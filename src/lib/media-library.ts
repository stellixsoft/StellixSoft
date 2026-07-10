import { readdir, stat } from "fs/promises";
import path from "path";
import { prisma } from "@/src/lib/prisma";

export type MediaSource = "site" | "upload" | "cover" | "content";

export interface MediaItem {
  url: string;
  name: string;
  source: MediaSource;
  /** Lowercase extension without dot, e.g. "png", "svg". */
  ext: string;
  /** File size in bytes when available. */
  size?: number;
  /** ISO mtime when available. */
  modifiedAt?: string;
}

const IMAGE_EXT = /\.(jpe?g|png|webp|gif|avif|svg|ico)$/i;
const IMG_SRC_RE = /<img[^>]+src=["']([^"']+)["']/gi;

/** Skip editor/vendor bundles — not website media. */
const SKIP_DIR_NAMES = new Set([
  "tinymce",
  "node_modules",
  ".git",
]);

function fileNameFromUrl(url: string) {
  try {
    const pathname = url.startsWith("http")
      ? new URL(url).pathname
      : url.split("?")[0];
    return decodeURIComponent(pathname.split("/").pop() || url);
  } catch {
    return url.split("/").pop() || url;
  }
}

function extFromUrl(url: string) {
  const name = fileNameFromUrl(url);
  const dot = name.lastIndexOf(".");
  return dot >= 0 ? name.slice(dot + 1).toLowerCase() : "";
}

function addImage(
  map: Map<string, MediaItem>,
  url: string,
  source: MediaSource,
  extra?: Pick<MediaItem, "size" | "modifiedAt" | "ext">,
) {
  const trimmed = url.trim();
  if (!trimmed || trimmed.startsWith("data:")) return;
  if (!IMAGE_EXT.test(trimmed.split("?")[0])) return;

  const existing = map.get(trimmed);
  const rank: Record<MediaSource, number> = {
    upload: 4,
    cover: 3,
    content: 2,
    site: 1,
  };

  if (existing) {
    if (rank[source] > rank[existing.source]) {
      map.set(trimmed, {
        ...existing,
        source,
        ...extra,
        ext: extra?.ext || existing.ext,
      });
    } else if (extra) {
      map.set(trimmed, {
        ...existing,
        ...extra,
        ext: extra.ext || existing.ext,
      });
    }
    return;
  }

  map.set(trimmed, {
    url: trimmed,
    name: fileNameFromUrl(trimmed),
    source,
    ext: extra?.ext || extFromUrl(trimmed),
    ...extra,
  });
}

function extractContentImages(html: string): string[] {
  const urls: string[] = [];
  let match: RegExpExecArray | null;
  IMG_SRC_RE.lastIndex = 0;
  while ((match = IMG_SRC_RE.exec(html)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

async function walkPublicImages(
  absDir: string,
  publicRoot: string,
  map: Map<string, MediaItem>,
  source: MediaSource,
) {
  let entries;
  try {
    entries = await readdir(absDir, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    const abs = path.join(absDir, entry.name);
    if (entry.isDirectory()) {
      if (SKIP_DIR_NAMES.has(entry.name.toLowerCase())) continue;
      await walkPublicImages(abs, publicRoot, map, source);
      continue;
    }
    if (!entry.isFile() || !IMAGE_EXT.test(entry.name)) continue;

    const rel = path.relative(publicRoot, abs).split(path.sep).join("/");
    const url = `/${rel}`;
    try {
      const info = await stat(abs);
      addImage(map, url, source, {
        size: info.size,
        modifiedAt: info.mtime.toISOString(),
        ext: path.extname(entry.name).slice(1).toLowerCase(),
      });
    } catch {
      addImage(map, url, source, {
        ext: path.extname(entry.name).slice(1).toLowerCase(),
      });
    }
  }
}

export async function listMediaLibrary(): Promise<MediaItem[]> {
  const map = new Map<string, MediaItem>();
  const publicRoot = path.join(process.cwd(), "public");

  // All website assets under /public (icons, png, jpg, webp, svg, …)
  // except vendor folders like tinymce.
  await walkPublicImages(
    path.join(publicRoot, "assets"),
    publicRoot,
    map,
    "site",
  );

  // Uploaded media
  await walkPublicImages(
    path.join(publicRoot, "uploads"),
    publicRoot,
    map,
    "upload",
  );

  // Any loose images at public root
  try {
    const rootEntries = await readdir(publicRoot, { withFileTypes: true });
    for (const entry of rootEntries) {
      if (!entry.isFile() || !IMAGE_EXT.test(entry.name)) continue;
      const abs = path.join(publicRoot, entry.name);
      try {
        const info = await stat(abs);
        addImage(map, `/${entry.name}`, "site", {
          size: info.size,
          modifiedAt: info.mtime.toISOString(),
          ext: path.extname(entry.name).slice(1).toLowerCase(),
        });
      } catch {
        addImage(map, `/${entry.name}`, "site");
      }
    }
  } catch {
    /* ignore */
  }

  const posts = await prisma.blogPost.findMany({
    select: { coverImage: true, content: true },
  });

  for (const post of posts) {
    if (post.coverImage) addImage(map, post.coverImage, "cover");
    for (const src of extractContentImages(post.content || "")) {
      addImage(map, src, "content");
    }
  }

  return Array.from(map.values()).sort((a, b) => {
    const aTime = a.modifiedAt ? Date.parse(a.modifiedAt) : 0;
    const bTime = b.modifiedAt ? Date.parse(b.modifiedAt) : 0;
    if (aTime !== bTime) return bTime - aTime;
    return a.name.localeCompare(b.name);
  });
}
