"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function requireAdmin() {
  const session = await auth();
  if (!session) throw new Error("Non autorisé");
}

export async function saveCategory(formData: FormData) {
  await requireAdmin();
  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const slug = (formData.get("slug") as string).trim().replace(/^\/+/, "");
  const color = (formData.get("color") as string) || "#A8874A";
  const description = (formData.get("description") as string) || null;

  if (id) {
    await prisma.category.update({ where: { id }, data: { name, slug, color, description } });
  } else {
    await prisma.category.create({ data: { name, slug, color, description } });
  }

  revalidatePath("/admin/posts/categories");
  redirect("/admin/posts/categories");
}

export async function deleteCategory(formData: FormData) {
  await requireAdmin();
  const id = formData.get("id") as string;
  await prisma.category.delete({ where: { id } });
  revalidatePath("/admin/posts/categories");
}
