"use server";

import fs from "fs";
import path from "path";
import { execSync, exec } from "child_process";
import { redirect } from "next/navigation";
import { requireAdminUser } from "@/lib/jwlAuth";

// Not under /public: Turbopack bakes a static manifest of /public at build
// time, so files written here by the running server (no rebuild) would
// 404 forever. Served instead via src/app/images/realisations/[filename]/route.ts,
// same pattern as the blog media library.
const MEDIA_DIR = path.join(process.cwd(), "content/uploads/realisations");

function syncToGit(message: string) {
  // add+commit are local and fast; `git push` (especially for a binary image)
  // can take a few seconds and must not block the HTTP response — the
  // reverse proxy in front of this app times out sooner than that, which
  // previously surfaced as a 500 to the browser even though the upload (and
  // the push) succeeded moments later. Push runs detached in the background.
  try {
    execSync("git add content/uploads/realisations", { cwd: process.cwd() });
    execSync(
      `git -c user.email="contact.jwlmarketing@gmail.com" -c user.name="JWL Marketing" commit -m ${JSON.stringify(message)}`,
      { cwd: process.cwd() }
    );
  } catch (err) {
    console.error("[realisations media] git add/commit failed (non-fatal):", err);
    return;
  }
  exec("git push", { cwd: process.cwd() }, (err) => {
    if (err) console.error("[realisations media] git push failed (non-fatal):", err);
  });
}

export async function uploadRealisationImageAction(
  formData: FormData
): Promise<{ path: string } | { error: string }> {
  const user = await requireAdminUser();
  if (!user) redirect("/admin/login");

  const file = formData.get("file") as File | null;
  if (!file || !file.size) return { error: "Aucun fichier reçu." };
  if (!file.type.startsWith("image/")) {
    return { error: "Seules les images sont acceptées." };
  }

  // next/image ne sait optimiser que ces formats : un .heic (photo iPhone),
  // .avif ou autre format exotique ferait planter l'affichage de la page
  // publique au lieu d'échouer proprement ici. On le refuse tout de suite
  // avec un message clair plutôt que de casser la page plus tard.
  const SUPPORTED = new Set(["image/jpeg", "image/png", "image/webp", "image/gif", "image/svg+xml"]);
  if (!SUPPORTED.has(file.type)) {
    return {
      error:
        "Format d'image non supporté (ex: HEIC des photos iPhone). Utilise un JPG, PNG, WEBP ou GIF — ta galerie photo/appli photo peut convertir le fichier.",
    };
  }

  if (!fs.existsSync(MEDIA_DIR)) fs.mkdirSync(MEDIA_DIR, { recursive: true });

  let safeName = file.name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9.]+/g, "-");

  if (fs.existsSync(path.join(MEDIA_DIR, safeName))) {
    const ext = path.extname(safeName);
    const base = safeName.slice(0, -ext.length || undefined);
    safeName = `${base}-${Date.now()}${ext}`;
  }

  const dest = path.join(MEDIA_DIR, safeName);
  const buf = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(dest, buf);

  syncToGit(`Réalisations: ajoute l'image ${safeName}`);

  return { path: `/images/realisations/${safeName}` };
}
