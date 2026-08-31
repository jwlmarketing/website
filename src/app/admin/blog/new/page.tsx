import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { CATEGORIES } from "@/lib/blog";
import PostForm from "../PostForm";

export default async function NewPost() {
  const session = await auth();
  if (!session) redirect("/admin/login");

  return (
    <div className="mx-auto max-w-[760px] px-6 py-10">
      <h1 className="mb-8 font-heading text-2xl font-bold text-black">Nouvel article</h1>
      <PostForm categories={CATEGORIES} />
    </div>
  );
}
