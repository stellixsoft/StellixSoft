import { cpSync, existsSync, mkdirSync, rmSync } from "fs";
import path from "path";

const root = process.cwd();
const src = path.join(root, "node_modules", "tinymce");
const dest = path.join(root, "public", "tinymce");

if (!existsSync(src)) {
  console.warn("tinymce not installed; skip copy");
  process.exit(0);
}

rmSync(dest, { recursive: true, force: true });
mkdirSync(path.dirname(dest), { recursive: true });
cpSync(src, dest, { recursive: true });
console.log("Copied tinymce to public/tinymce");
