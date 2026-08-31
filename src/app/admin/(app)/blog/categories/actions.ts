"use server";

import { execSync } from "child_process";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdminUser } from "@/lib/jwlAuth";
import { getCategories, saveCategories } from "@/lib/blog";

async function requireAdmin() {
  const user = await requireAdminUser();
  if (!user) redirect("/admin/login");
}

function syncToGit(message: string) {
  try {
    execSync("git add content/categories.json", { cwd: process.cwd() });
    execSync(`git -c user.email="contact.jwlmarketing@gmail.com" -c user.name="JWL Marketing" commit -m ${JSON.stringify(message)}`, {
      cwd: process.cwd(),
    });
    execSync("git push", { cwd: process.cwd() });
  } catch (err) {
    console.error("[categories admin] git sync failed (non-fatal):", err);
  }
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function addCategoryAction(formData: FormData) {
  await requireAdmin();
  const name = String(formData.get("name") || "").trim();
  if (!name) return;
  const slug = slugify(String(formData.get("slug") || "") || name);
  const color = String(formData.get("color") || "#A8874A");
  const description = String(formData.get("description") || "");

  const categories = getCategories();
  if (categories.some((c) => c.slug === slug)) return;

  categories.push({
    id: slug,
    slug,
    name,
    description: description || null,
    color,
    order: categories.length + 1,
  });
  saveCategories(categories);
  syncToGit(`Blog: ajoute la catégorie "${name}"`);
  revalidatePath("/admin/blog/categories");
  revalidatePath("/blog");
}

export async function deleteCategoryAction(formData: FormData) {
  await requireAdmin();
  const slug = String(formData.get("slug") || "");
  const categories = getCategories().filter((c) => c.slug !== slug);
  saveCategories(categories);
  syncToGit(`Blog: supprime la catégorie "${slug}"`);
  revalidatePath("/admin/blog/categories");
  revalidatePath("/blog");
}
