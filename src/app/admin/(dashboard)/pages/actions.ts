"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function requireAdmin() {
  const session = await auth();
  if (!session) throw new Error("Non autorisé");
}

export async function savePage(formData: FormData) {
  await requireAdmin();

  const id = formData.get("id") as string;
  const slug = (formData.get("slug") as string).trim().replace(/^\/+/, "");
  const title = formData.get("title") as string;
  const metaTitle = (formData.get("metaTitle") as string) || null;
  const metaDesc = (formData.get("metaDesc") as string) || null;
  const html = formData.get("content") as string;
  const published = formData.get("published") === "on";

  const data = {
    slug,
    title,
    metaTitle,
    metaDesc,
    content: { html },
    published,
  };

  if (id) {
    await prisma.page.update({ where: { id }, data });
  } else {
    await prisma.page.create({ data });
  }

  revalidatePath("/admin/pages");
  redirect("/admin/pages");
}

export async function deletePage(formData: FormData) {
  await requireAdmin();
  const id = formData.get("id") as string;
  await prisma.page.delete({ where: { id } });
  revalidatePath("/admin/pages");
}
