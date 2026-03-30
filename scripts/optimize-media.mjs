/**
 * High-quality WebP generation for raster assets under public/assets/images.
 * Run: npm run optimize:media
 *
 * Uses sharp with generous quality and sensible max widths so visuals stay crisp.
 * For a true video first-frame poster, replace public/assets/videos/hero-poster.jpg
 * with an export from the hero MP4 (e.g. ffmpeg -ss 1 -i hero.mp4 -vframes 1 poster.jpg).
 */

import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const imagesDir = path.join(root, "public", "assets", "images");
const videosDir = path.join(root, "public", "assets", "videos");

const MIN_BYTES = 40 * 1024; // optimize anything over ~40 KiB

function maxWidthForSize(bytes) {
  if (bytes > 8_000_000) return 2560;
  if (bytes > 2_000_000) return 2400;
  if (bytes > 500_000) return 1920;
  if (bytes > 150_000) return 1600;
  return 1200;
}

async function optimizeToWebp(inputPath, relFromImagesDir) {
  const st = fs.statSync(inputPath);
  if (st.size < MIN_BYTES) return null;

  const outRel = relFromImagesDir.replace(/\.(png|jpe?g)$/i, "") + ".webp";
  const outputPath = path.join(imagesDir, outRel);
  const outDir = path.dirname(outputPath);
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const maxW = maxWidthForSize(st.size);
  const buf = await fs.promises.readFile(inputPath);
  const meta = await sharp(buf).metadata();
  const hasAlpha = meta.hasAlpha === true;

  let pipeline = sharp(buf).rotate();

  if (meta.width && meta.width > maxW) {
    pipeline = pipeline.resize(maxW, null, {
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  const quality = hasAlpha ? 92 : 90;
  await pipeline.webp({ quality, effort: 5, smartSubsample: true }).toFile(outputPath);

  const outStat = fs.statSync(outputPath);
  const saved = ((1 - outStat.size / st.size) * 100).toFixed(1);
  const pubRel = path.relative(path.join(root, "public"), outputPath).replace(/\\/g, "/");
  console.log(`${relFromImagesDir} → ${pubRel} (${(st.size / 1024).toFixed(0)} KiB → ${(outStat.size / 1024).toFixed(0)} KiB, −${saved}%)`);
  return { from: relFromImagesDir, webp: pubRel };
}

async function walkImages(dir, relBase = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const results = [];
  for (const e of entries) {
    const abs = path.join(dir, e.name);
    const rel = path.join(relBase, e.name).replace(/\\/g, "/");
    if (e.isDirectory()) {
      results.push(...(await walkImages(abs, rel)));
      continue;
    }
    if (!/\.(png|jpe?g)$/i.test(e.name)) continue;
    if (e.name.toLowerCase().endsWith(".webp")) continue;
    const r = await optimizeToWebp(abs, rel.replace(/\\/g, "/"));
    if (r) results.push(r);
  }
  return results;
}

async function heroPosterFromFallback() {
  const fallback = path.join(imagesDir, "fallback.jpg");
  const posterOut = path.join(videosDir, "hero-poster.jpg");
  if (!fs.existsSync(fallback)) {
    console.warn("No fallback.jpg; skip hero-poster.jpg");
    return;
  }
  await sharp(fallback)
    .resize(1920, 1080, { fit: "cover", position: "centre" })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(posterOut);
  console.log("Created videos/hero-poster.jpg from fallback.jpg (replace with a real video frame when possible).");
}

async function main() {
  console.log("Optimizing images under public/assets/images …\n");
  if (!fs.existsSync(imagesDir)) {
    console.error("Missing", imagesDir);
    process.exit(1);
  }
  const converted = await walkImages(imagesDir);
  console.log(`\nDone. ${converted.length} WebP file(s) written.`);
  await heroPosterFromFallback();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
