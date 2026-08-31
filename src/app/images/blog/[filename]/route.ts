import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

// Runtime-uploaded blog media is stored outside /public: Turbopack bakes a
// static manifest of /public at build time, so files written there after a
// running server starts are silently 404'd until the next rebuild. Serving
// them through this dynamic route instead means uploads are visible
// immediately, no rebuild required.
const UPLOAD_DIR = path.join(process.cwd(), "content/uploads/blog");

const MIME: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
};

export async function GET(_req: NextRequest, { params }: { params: Promise<{ filename: string }> }) {
  const { filename } = await params;
  if (!filename || filename.includes("/") || filename.includes("..")) {
    return new NextResponse("Not found", { status: 404 });
  }
  const file = path.join(UPLOAD_DIR, filename);
  if (!fs.existsSync(file)) {
    return new NextResponse("Not found", { status: 404 });
  }
  const ext = path.extname(filename).toLowerCase();
  const buf = fs.readFileSync(file);
  return new NextResponse(new Uint8Array(buf), {
    headers: {
      "Content-Type": MIME[ext] || "application/octet-stream",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
