import fs from "fs";
import path from "path";

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, name.name);
    if (name.isDirectory()) walk(p, acc);
    else if (/\.(tsx|ts|jsx|js)$/.test(name.name)) acc.push(p);
  }
  return acc;
}

const root = path.join(process.cwd(), "src");
const files = walk(root);

const blockRe = /<video[\s\S]*?<source[\s\S]*?hero-banner-background-video\.mp4[\s\S]*?<\/video>/;

const importLine =
  'import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";';

for (const file of files) {
  let s = fs.readFileSync(file, "utf8");
  if (!s.includes("hero-banner-background-video.mp4")) continue;
  const m = s.match(blockRe);
  if (!m) {
    console.warn("No match:", path.relative(process.cwd(), file));
    continue;
  }
  const indent = m[0].match(/^(\s*)<video/)?.[1] ?? "      ";
  const replacement = `${indent}<HeroBackgroundVideo className="absolute inset-0 w-full h-full object-cover" />`;
  s = s.replace(blockRe, replacement);
  if (!s.includes(importLine)) {
    const lines = s.split("\n");
    const firstImport = lines.findIndex((l) => l.startsWith("import "));
    if (firstImport >= 0) lines.splice(firstImport, 0, importLine);
    else lines.unshift(importLine, "");
    s = lines.join("\n");
  }
  fs.writeFileSync(file, s);
  console.log("Updated", path.relative(process.cwd(), file));
}
