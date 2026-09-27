import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { verifyDocumentCode, GATED_UPLOAD_DIR } from "@/lib/gatedContent";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const documentId = String(body?.documentId || "");
  const code = String(body?.code || "");
  if (!documentId || !code) {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const doc = verifyDocumentCode(documentId, code);
  if (!doc) {
    return NextResponse.json({ error: "Code incorrect." }, { status: 403 });
  }

  const file = path.join(GATED_UPLOAD_DIR, doc.fileName);
  if (!fs.existsSync(file)) {
    return NextResponse.json({ error: "Fichier introuvable." }, { status: 404 });
  }

  const buf = fs.readFileSync(file);
  return new NextResponse(new Uint8Array(buf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${doc.title.replace(/["]/g, "")}.pdf"`,
      "Cache-Control": "no-store",
    },
  });
}
