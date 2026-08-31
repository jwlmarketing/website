"use client";

import { deletePostAction } from "./actions";

export default function DeleteButton({ slug }: { slug: string }) {
  return (
    <form
      action={deletePostAction}
      onSubmit={(e) => {
        if (!confirm(`Supprimer définitivement "${slug}" ?`)) e.preventDefault();
      }}
    >
      <input type="hidden" name="slug" value={slug} />
      <button type="submit" className="text-red-500 hover:underline">
        Supprimer
      </button>
    </form>
  );
}
