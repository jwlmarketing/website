import { prisma } from "@/lib/prisma";
import PostForm from "@/components/admin/PostForm";
import { savePost } from "../actions";

export default async function NewPost() {
  const categories = await prisma.category.findMany({ orderBy: { order: "asc" } });

  return (
    <div>
      <h1 className="font-heading text-2xl font-semibold text-black">Nouvel article</h1>
      <div className="mt-6 max-w-2xl">
        <PostForm categories={categories} action={savePost} />
      </div>
    </div>
  );
}
