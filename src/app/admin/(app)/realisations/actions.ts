"use server";

import { execSync } from "child_process";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdminUser } from "@/lib/jwlAuth";
import {
  saveIndexPage,
  saveCaseStudy,
  deleteCaseStudy,
} from "@/lib/realisations";
import type { Block } from "@/lib/blocks/types";

async function requireAdmin() {
  const user = await requireAdminUser();
  if (!user) redirect("/admin/login");
}

function syncToGit(message: string) {
  // Best effort: commit + push content/realisations changes so they survive
  // the next deploy, same approach as the blog admin.
  try {
    execSync("git add content/realisations", { cwd: process.cwd() });
    execSync(
      `git -c user.email="contact.jwlmarketing@gmail.com" -c user.name="JWL Marketing" commit -m ${JSON.stringify(message)}`,
      { cwd: process.cwd() }
    );
    execSync("git push", { cwd: process.cwd() });
  } catch (err) {
    console.error("[realisations admin] git sync failed (non-fatal):", err);
  }
}

function parseBlocks(raw: string): Block[] {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function saveIndexAction(formData: FormData) {
  await requireAdmin();

  const title = String(formData.get("title") || "").trim();
  if (!title) throw new Error("Titre requis");

  saveIndexPage({
    title,
    metaTitle: String(formData.get("metaTitle") || ""),
    metaDescription: String(formData.get("metaDescription") || ""),
    blocks: parseBlocks(String(formData.get("blocksJson") || "[]")),
  });

  syncToGit(`Réalisations: modifie la page d'accueil`);

  revalidatePath("/realisations");
  revalidatePath("/admin/realisations");
  redirect("/admin/realisations");
}

export async function saveCaseStudyAction(formData: FormData) {
  await requireAdmin();

  const originalSlug = String(formData.get("originalSlug") || "") || undefined;
  const title = String(formData.get("title") || "").trim();
  if (!title) throw new Error("Titre requis");

  const slug = saveCaseStudy({
    originalSlug,
    title,
    slug: String(formData.get("slug") || ""),
    metaTitle: String(formData.get("metaTitle") || ""),
    metaDescription: String(formData.get("metaDescription") || ""),
    status: (String(formData.get("status") || "draft") as "draft" | "published"),
    blocks: parseBlocks(String(formData.get("blocksJson") || "[]")),
  });

  syncToGit(
    originalSlug
      ? `Réalisations: modifie "${title}"`
      : `Réalisations: nouveau cas client "${title}"`
  );

  revalidatePath("/realisations");
  revalidatePath(`/realisations/${slug}`);
  revalidatePath("/admin/realisations");
  redirect("/admin/realisations");
}

export async function deleteCaseStudyAction(formData: FormData) {
  await requireAdmin();

  const slug = String(formData.get("slug") || "");
  if (!slug) throw new Error("Slug requis");

  deleteCaseStudy(slug);
  syncToGit(`Réalisations: supprime "${slug}"`);

  revalidatePath("/realisations");
  revalidatePath("/admin/realisations");
  redirect("/admin/realisations");
}
