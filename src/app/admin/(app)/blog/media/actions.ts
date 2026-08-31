"use server";

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdminUser } from "@/lib/jwlAuth";

const MEDIA_DIR = path.join(process.cwd(), "public/images/blog");

function syncToGit(message: string) {
  try {
    execSync("git add public/images/blog", { cwd: process.cwd() });
    execSync(`git -c user.email="contact.jwlmarketing@gmail.com" -c user.name="JWL Marketing" commit -m ${JSON.stringify(message)}`, {
      cwd: process.cwd(),
    });
    execSync("git push", { cwd: process.cwd() });
  } catch (err) {
    console.error("[media admin] git sync failed (non-fatal):", err);
  }
}

export async function uploadMediaAction(formData: FormData) {
  const user = await requireAdminUser();
  if (!user) redirect("/admin/login");

  const file = formData.get("file") as File | null;
  if (!file || !file.size) return;

  if (!fs.existsSync(MEDIA_DIR)) fs.mkdirSync(MEDIA_DIR, { recursive: true });

  const safeName = file.name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9.]+/g, "-");
  const dest = path.join(MEDIA_DIR, safeName);
  const buf = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(dest, buf);

  syncToGit(`Blog: ajoute l'image ${safeName}`);
  revalidatePath("/admin/blog/media");
}

export async function deleteMediaAction(formData: FormData) {
  const user = await requireAdminUser();
  if (!user) redirect("/admin/login");

  const name = String(formData.get("name") || "");
  if (!name || name.includes("/") || name.includes("..")) return;
  const target = path.join(MEDIA_DIR, name);
  if (fs.existsSync(target)) fs.unlinkSync(target);

  syncToGit(`Blog: supprime l'image ${name}`);
  revalidatePath("/admin/blog/media");
}
