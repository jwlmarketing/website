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

export async function uploadGatedDocumentAction(
  formData: FormData
): Promise<{ ok: true } | { error: string }> {
  try {
    const user = await requireAdminUser();
    if (!user) return { error: "Session expirée — recharge la page et reconnecte-toi." };

    const pageSlug = String(formData.get("pageSlug") || "").trim();
    const category = String(formData.get("category") || "").trim();
    const title = String(formData.get("title") || "").trim();
    const code = String(formData.get("code") || "").trim();
    const file = formData.get("file") as File | null;

    if (!pageSlug || !category || !title || !code) {
      return { error: "Tous les champs sont requis." };
    }
    if (!file || !file.size) return { error: "Aucun fichier reçu." };
    if (file.type !== "application/pdf") {
      return { error: "Seuls les fichiers PDF sont acceptés." };
    }

    fs.mkdirSync(GATED_UPLOAD_DIR, { recursive: true });

    let safeName = file.name
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

    const buf = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(path.join(GATED_UPLOAD_DIR, safeName), buf);

    addDocument({ pageSlug, category, title, fileName: safeName, code });

    syncToGit(`Site: ajoute le document "${title}" (${pageSlug})`, [
      "content/gated-content.json",
      "content/uploads/gated",
    ]);

    revalidatePath("/admin/site/downloads");
    revalidatePath(`/${pageSlug}`);
    return { ok: true };
  } catch (err) {
    console.error("[site admin] upload failed:", err);
    return { error: "Échec de l'envoi du document. Réessaie." };
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
