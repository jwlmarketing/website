import { redirect } from "next/navigation";
import { requireAdminUser } from "@/lib/jwlAuth";
import { CATEGORIES } from "@/lib/blog";
import PostForm from "../PostForm";

export default async function NewPost() {
  const user = await requireAdminUser();
  if (!user) redirect("/admin/login");

  return (
    <div className="mx-auto max-w-[760px] px-6 py-10">
      <h1 className="mb-8 font-heading text-2xl font-bold text-black">Nouvel article</h1>
      <PostForm categories={CATEGORIES} />
    </div>
  );
}
