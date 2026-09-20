import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

// Runtime-uploaded réalisations media is stored outside /public: Turbopack
// bakes a static manifest of /public at build time, so files written there
// after a running server starts are silently 404'd until the next rebuild.
// Serving them through this dynamic route instead means uploads are visible
// immediately, no rebuild required. Same pattern as the blog media library.
const UPLOAD_DIR = path.join(process.cwd(), "content/uploads/realisations");

const MIME: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".mov": "video/quicktime",
  ".m4v": "video/x-m4v",
};

export async function GET(req: NextRequest, { params }: { params: Promise<{ filename: string }> }) {
  const { filename } = await params;
  if (!filename || filename.includes("/") || filename.includes("..")) {
    return new NextResponse("Not found", { status: 404 });
  }
  const file = path.join(UPLOAD_DIR, filename);
  if (!fs.existsSync(file)) {
    return new NextResponse("Not found", { status: 404 });
  }
  const ext = path.extname(filename).toLowerCase();
  const contentType = MIME[ext] || "application/octet-stream";
  const stat = fs.statSync(file);

  // Videos need Range support so the browser can seek instead of downloading
  // the whole file up front.
  const range = req.headers.get("range");
  if (range) {
    const match = range.match(/bytes=(\d*)-(\d*)/);
    const start = match && match[1] ? parseInt(match[1], 10) : 0;
    const end = match && match[2] ? parseInt(match[2], 10) : stat.size - 1;
    const chunk = fs.readFileSync(file, { flag: "r" }).subarray(start, end + 1);
    return new NextResponse(new Uint8Array(chunk), {
      status: 206,
      headers: {
        "Content-Type": contentType,
        "Content-Range": `bytes ${start}-${end}/${stat.size}`,
        "Content-Length": String(chunk.length),
        "Accept-Ranges": "bytes",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  }

  const buf = fs.readFileSync(file);
  return new NextResponse(new Uint8Array(buf), {
    headers: {
      "Content-Type": contentType,
      "Content-Length": String(stat.size),
      "Accept-Ranges": "bytes",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
