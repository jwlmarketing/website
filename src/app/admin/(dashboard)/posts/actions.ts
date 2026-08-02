"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function requireAdmin() {
  const session = await auth();
  if (!session) throw new Error("Non autorisé");
}

export async function savePost(formData: FormData) {
  await requireAdmin();

  const id = formData.get("id") as string;
  const slug = (formData.get("slug") as string).trim().replace(/^\/+/, "");
  const title = formData.get("title") as string;
  const excerpt = (formData.get("excerpt") as string) || null;
  const metaTitle = (formData.get("metaTitle") as string) || null;
  const metaDesc = (formData.get("metaDesc") as string) || null;
  const coverImage = (formData.get("coverImage") as string) || null;
  const html = formData.get("content") as string;
  const published = formData.get("published") === "on";

  const data = {
    slug,
    title,
    excerpt,
    metaTitle,
    metaDesc,
    coverImage,
    content: { html },
    published,
    publishedAt: published ? new Date() : null,
  };

  if (id) {
    await prisma.post.update({ where: { id }, data });
  } else {
    await prisma.post.create({ data });
  }

  revalidatePath("/admin/posts");
  redirect("/admin/posts");
}

export async function deletePost(formData: FormData) {
  await requireAdmin();
  const id = formData.get("id") as string;
  await prisma.post.delete({ where: { id } });
  revalidatePath("/admin/posts");
}
