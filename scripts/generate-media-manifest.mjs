import { readdirSync, statSync, writeFileSync, mkdirSync } from "fs";
import path from "path";

const IMAGE_EXT = /\.(jpe?g|png|webp|gif|avif|svg|ico)$/i;
const SKIP_DIRS = new Set(["tinymce", "node_modules", ".git", "uploads"]);

const publicRoot = path.join(process.cwd(), "public");
const assetsRoot = path.join(publicRoot, "assets");
const outFile = path.join(
  process.cwd(),
  "src",
  "data",
  "site-media-manifest.json",
);

/** @type {{ url: string, name: string, ext: string, size?: number, modifiedAt?: string }[]} */
const items = [];

/**
 * @param {string} absDir
 */
function walk(absDir) {
  let entries;
  try {
    entries = readdirSync(absDir, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    const abs = path.join(absDir, entry.name);
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name.toLowerCase())) continue;
      walk(abs);
      continue;
    }
    if (!entry.isFile() || !IMAGE_EXT.test(entry.name)) continue;

    const rel = path.relative(publicRoot, abs).split(path.sep).join("/");
    const url = `/${rel}`;
    try {
      const info = statSync(abs);
      items.push({
        url,
        name: entry.name,
        ext: path.extname(entry.name).slice(1).toLowerCase(),
        size: info.size,
        modifiedAt: info.mtime.toISOString(),
      });
    } catch {
      items.push({
        url,
        name: entry.name,
        ext: path.extname(entry.name).slice(1).toLowerCase(),
      });
    }
  }
}

walk(assetsRoot);

items.sort((a, b) => a.url.localeCompare(b.url));

mkdirSync(path.dirname(outFile), { recursive: true });
writeFileSync(outFile, `${JSON.stringify(items, null, 2)}\n`, "utf8");
console.log(`Wrote ${items.length} site media paths → ${path.relative(process.cwd(), outFile)}`);
