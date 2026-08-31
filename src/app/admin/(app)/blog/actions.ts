"use server";

import { execSync } from "child_process";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdminUser } from "@/lib/jwlAuth";
import { savePost, deletePost } from "@/lib/blog";

async function requireAdmin() {
  const user = await requireAdminUser();
  if (!user) redirect("/admin/login");
}

function syncToGit(message: string) {
  // Best effort: commit + push content/blog changes so they survive the next
  // deploy. If git isn't available or push fails, the post still saved to
  // disk and is live immediately — this just logs instead of throwing.
  try {
    execSync("git add content/blog content/categories.json", { cwd: process.cwd() });
    execSync(`git -c user.email="contact.jwlmarketing@gmail.com" -c user.name="JWL Marketing" commit -m ${JSON.stringify(message)}`, {
      cwd: process.cwd(),
    });
    execSync("git push", { cwd: process.cwd() });
  } catch (err) {
    console.error("[blog admin] git sync failed (non-fatal):", err);
  }
}

export async function savePostAction(formData: FormData) {
  await requireAdmin();

  const originalSlug = String(formData.get("originalSlug") || "") || undefined;
  const title = String(formData.get("title") || "").trim();
  if (!title) throw new Error("Titre requis");

  const slug = savePost({
    originalSlug,
    title,
    slug: String(formData.get("slug") || ""),
    excerpt: String(formData.get("excerpt") || ""),
    category: String(formData.get("category") || ""),
    tags: String(formData.get("tags") || ""),
    coverImage: String(formData.get("coverImage") || ""),
    coverAlt: String(formData.get("coverAlt") || ""),
    status: (String(formData.get("status") || "draft") as "draft" | "published"),
    publishedAt: String(formData.get("publishedAt") || ""),
    seoTitle: String(formData.get("seoTitle") || ""),
    seoDescription: String(formData.get("seoDescription") || ""),
    content: String(formData.get("content") || ""),
  });

  syncToGit(originalSlug ? `Blog: modifie "${title}"` : `Blog: nouvel article "${title}"`);

  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  revalidatePath("/admin/blog");
  revalidatePath("/admin/blog/articles");
  redirect("/admin/blog/articles");
}

export async function deletePostAction(formData: FormData) {
  await requireAdmin();
  const slug = String(formData.get("slug") || "");
  if (!slug) return;
  deletePost(slug);
  syncToGit(`Blog: supprime "${slug}"`);
  revalidatePath("/blog");
  revalidatePath("/admin/blog");
  revalidatePath("/admin/blog/articles");
  redirect("/admin/blog/articles");
}
