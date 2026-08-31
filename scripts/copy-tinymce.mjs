// Self-hosts TinyMCE (no cloud API key, no watermark) by copying its assets
// from node_modules into public/tinymce before the Next.js build runs.
import fs from "fs";
import path from "path";

const src = path.join(process.cwd(), "node_modules/tinymce");
const dest = path.join(process.cwd(), "public/tinymce");

if (!fs.existsSync(src)) {
  console.warn("[copy-tinymce] node_modules/tinymce not found, skipping");
  process.exit(0);
}

fs.rmSync(dest, { recursive: true, force: true });
fs.cpSync(src, dest, { recursive: true });
console.log("[copy-tinymce] copied to public/tinymce");
