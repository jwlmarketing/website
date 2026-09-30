"use server";

import fs from "fs";
import path from "path";
import { execSync, exec } from "child_process";
import { revalidatePath } from "next/cache";
import { requireAdminUser } from "@/lib/jwlAuth";
import {
  setPageCode,
  addDocument,
  deleteDocument,
  GATED_UPLOAD_DIR,
  GATED_CHUNK_DIR,
} from "@/lib/gatedContent";

function syncToGit(message: string, paths: string[]) {
  try {
    execSync(`git add ${paths.join(" ")}`, { cwd: process.cwd() });
    execSync(
      `git -c user.email="contact.jwlmarketing@gmail.com" -c user.name="JWL Marketing" commit -m ${JSON.stringify(message)}`,
      { cwd: process.cwd() }
    );
  } catch (err) {
    console.error("[site admin] git add/commit failed (non-fatal):", err);
    return;
  }
  try {
    exec("git push", { cwd: process.cwd() }, (err) => {
      if (err) console.error("[site admin] git push failed (non-fatal):", err);
    });
  } catch (err) {
    console.error("[site admin] git push spawn failed (non-fatal):", err);
  }
}

export async function saveSiteCodeAction(
  formData: FormData
): Promise<{ ok: true } | { error: string }> {
  const user = await requireAdminUser();
  if (!user) return { error: "Session expirée — recharge la page et reconnecte-toi." };

  const pageSlug = String(formData.get("pageSlug") || "").trim();
  const code = String(formData.get("code") || "").trim();
  if (!pageSlug || !code) return { error: "Page et code requis." };

  setPageCode(pageSlug, code);
  syncToGit(`Site: met à jour le code de la page "${pageSlug}"`, ["content/gated-content.json"]);
  revalidatePath("/admin/site/codes");
  revalidatePath(`/${pageSlug}`);
  return { ok: true };
}

// PDFs are sent in small chunks (see UploadForm.tsx) instead of one big
// request: the production deployment sits behind a reverse proxy whose body
// size limit is well under our own 1GB Server Actions limit, so a normal
// multi-megabyte upload was rejected before it ever reached this code. Each
// chunk is written to its own temp file and stitched back together in
// finalizeGatedDocumentAction below.
export async function uploadGatedChunkAction(
  formData: FormData
): Promise<{ ok: true } | { error: string }> {
  try {
    const user = await requireAdminUser();
    if (!user) return { error: "Session expirée — recharge la page et reconnecte-toi." };

    const uploadId = String(formData.get("uploadId") || "");
    const index = String(formData.get("index") || "");
    const chunk = formData.get("chunk") as File | null;
    if (!uploadId || !/^[a-f0-9-]{36}$/.test(uploadId) || !/^\d+$/.test(index) || !chunk) {
      return { error: "Requête de chunk invalide." };
    }

    const dir = path.join(GATED_CHUNK_DIR, uploadId);
    fs.mkdirSync(dir, { recursive: true });
    const buf = Buffer.from(await chunk.arrayBuffer());
    fs.writeFileSync(path.join(dir, index), buf);

    return { ok: true };
  } catch (err) {
    console.error("[site admin] chunk upload failed:", err);
    return { error: "Échec de l'envoi d'un morceau du fichier. Réessaie." };
  }
}

export async function finalizeGatedDocumentAction(
  formData: FormData
): Promise<{ ok: true } | { error: string }> {
  try {
    const user = await requireAdminUser();
    if (!user) return { error: "Session expirée — recharge la page et reconnecte-toi." };

    const uploadId = String(formData.get("uploadId") || "");
    const totalChunks = Number(formData.get("totalChunks") || 0);
    const pageSlug = String(formData.get("pageSlug") || "").trim();
    const category = String(formData.get("category") || "").trim();
    const title = String(formData.get("title") || "").trim();
    const code = String(formData.get("code") || "").trim();
    const originalName = String(formData.get("fileName") || "").trim();

    if (!uploadId || !/^[a-f0-9-]{36}$/.test(uploadId) || !totalChunks) {
      return { error: "Requête invalide." };
    }
    if (!pageSlug || !category || !title) {
      return { error: "Page, catégorie et titre sont requis." };
    }

    const chunkDir = path.join(GATED_CHUNK_DIR, uploadId);
    for (let i = 0; i < totalChunks; i++) {
      if (!fs.existsSync(path.join(chunkDir, String(i)))) {
        return { error: "Envoi incomplet — un morceau du fichier est manquant. Réessaie." };
      }
    }

    fs.mkdirSync(GATED_UPLOAD_DIR, { recursive: true });

    let safeName = originalName
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9.]+/g, "-");
    if (!safeName.endsWith(".pdf")) safeName += ".pdf";
    if (fs.existsSync(path.join(GATED_UPLOAD_DIR, safeName))) {
      const ext = path.extname(safeName);
      const base = safeName.slice(0, -ext.length);
      safeName = `${base}-${Date.now()}${ext}`;
    }

    const dest = path.join(GATED_UPLOAD_DIR, safeName);
    const out = fs.createWriteStream(dest);
    for (let i = 0; i < totalChunks; i++) {
      const chunkBuf = fs.readFileSync(path.join(chunkDir, String(i)));
      out.write(chunkBuf);
    }
    await new Promise<void>((resolve, reject) => {
      out.end((err: unknown) => (err ? reject(err) : resolve()));
    });

    fs.rmSync(chunkDir, { recursive: true, force: true });

    addDocument({ pageSlug, category, title, fileName: safeName, code });

    syncToGit(`Site: ajoute le document "${title}" (${pageSlug})`, [
      "content/gated-content.json",
      "content/uploads/gated",
    ]);

    revalidatePath("/admin/site/downloads");
    revalidatePath(`/${pageSlug}`);
    return { ok: true };
  } catch (err) {
    console.error("[site admin] finalize upload failed:", err);
    return { error: "Échec de l'assemblage du fichier. Réessaie." };
  }
}

export async function deleteGatedDocumentAction(
  id: string,
  pageSlug: string
): Promise<{ ok: true } | { error: string }> {
  const user = await requireAdminUser();
  if (!user) return { error: "Session expirée — recharge la page et reconnecte-toi." };

  deleteDocument(id);
  syncToGit(`Site: supprime un document (${pageSlug})`, [
    "content/gated-content.json",
    "content/uploads/gated",
  ]);
  revalidatePath("/admin/site/downloads");
  revalidatePath(`/${pageSlug}`);
  return { ok: true };
}
