import { redirect } from "next/navigation";
import { requireAdminUser } from "@/lib/jwlAuth";
import { CATEGORIES } from "@/lib/blog";
import PostForm from "../PostForm";

export default async function NewPost() {
  const user = await requireAdminUser();
  if (!user) redirect("/admin/login");

  return <PostForm categories={CATEGORIES} />;
}
