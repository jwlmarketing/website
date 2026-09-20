"use server";

import fs from "fs";
import path from "path";
import { execSync, exec } from "child_process";
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
  try {
    exec("git push", { cwd: process.cwd() }, (err) => {
      if (err) console.error("[realisations media] git push failed (non-fatal):", err);
    });
  } catch (err) {
    console.error("[realisations media] git push spawn failed (non-fatal):", err);
  }
}

// This is called directly from client code (not via a <form action>), so it
// must NEVER throw — any uncaught error here (including next/navigation's
// redirect(), which relies on framework machinery that a plain function call
// doesn't get) surfaces to the browser as a generic, unrecoverable "server
// error" page instead of the inline message the UI is built to show. Every
// path returns a plain object instead.
export async function uploadRealisationImageAction(
  formData: FormData
): Promise<{ path: string } | { error: string }> {
  try {
    const user = await requireAdminUser();
    if (!user) {
      return { error: "Session expirée — recharge la page et reconnecte-toi." };
    }

    const file = formData.get("file") as File | null;
    if (!file || !file.size) return { error: "Aucun fichier reçu." };
    if (!file.type.startsWith("image/")) {
      return { error: "Seules les images sont acceptées." };
    }

    // next/image ne sait optimiser que ces formats : un .heic (photo iPhone),
    // .avif ou autre format exotique ferait planter l'affichage de la page
    // publique au lieu d'échouer proprement ici.
    const SUPPORTED = new Set(["image/jpeg", "image/png", "image/webp", "image/gif", "image/svg+xml"]);
    if (!SUPPORTED.has(file.type)) {
      return {
        error:
          "Format d'image non supporté (ex: HEIC des photos iPhone). Utilise un JPG, PNG, WEBP ou GIF.",
      };
    }

    if (!fs.existsSync(MEDIA_DIR)) fs.mkdirSync(MEDIA_DIR, { recursive: true });

    let safeName = file.name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9.]+/g, "-");

    if (!safeName) safeName = "image.jpg";

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
  } catch (err) {
    console.error("[realisations media] upload failed:", err);
    return { error: "Échec de l'envoi de l'image. Réessaie." };
  }
}

// Same shape/guarantees as uploadRealisationImageAction above (never throws,
// called directly from client code) but for video files (testimonial clips,
// demo videos, etc).
export async function uploadRealisationVideoAction(
  formData: FormData
): Promise<{ path: string } | { error: string }> {
  try {
    const user = await requireAdminUser();
    if (!user) {
      return { error: "Session expirée — recharge la page et reconnecte-toi." };
    }

    const file = formData.get("file") as File | null;
    if (!file || !file.size) return { error: "Aucun fichier reçu." };

    const SUPPORTED = new Set(["video/mp4", "video/webm", "video/quicktime", "video/x-m4v"]);
    if (!SUPPORTED.has(file.type)) {
      return {
        error: "Format vidéo non supporté. Utilise un MP4, WEBM ou MOV.",
      };
    }

    if (!fs.existsSync(MEDIA_DIR)) fs.mkdirSync(MEDIA_DIR, { recursive: true });

    let safeName = file.name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9.]+/g, "-");

    if (!safeName) safeName = "video.mp4";

    if (fs.existsSync(path.join(MEDIA_DIR, safeName))) {
      const ext = path.extname(safeName);
      const base = safeName.slice(0, -ext.length || undefined);
      safeName = `${base}-${Date.now()}${ext}`;
    }

    const dest = path.join(MEDIA_DIR, safeName);
    const buf = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(dest, buf);

    syncToGit(`Réalisations: ajoute la vidéo ${safeName}`);

    return { path: `/images/realisations/${safeName}` };
  } catch (err) {
    console.error("[realisations media] video upload failed:", err);
    return { error: "Échec de l'envoi de la vidéo. Réessaie." };
  }
}
