import PostForm from "@/components/admin/PostForm";
import { savePost } from "../actions";

export default function NewPost() {
  return (
    <div>
      <h1 className="font-heading text-2xl font-semibold text-black">Nouvel article</h1>
      <div className="mt-6 max-w-2xl">
        <PostForm action={savePost} />
      </div>
    </div>
  );
}
