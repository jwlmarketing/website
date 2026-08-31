"use client";

import { useState, useTransition } from "react";
import { submitCommentAction } from "./commentActions";

export default function CommentForm({ postSlug }: { postSlug: string }) {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const res = await submitCommentAction(formData);
      setStatus(res?.error ? "error" : "sent");
    });
  }

  if (status === "sent") {
    return (
      <p className="mt-6 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
        Merci ! Ton commentaire a bien été envoyé, il sera visible après validation.
      </p>
    );
  }

  return (
    <form action={handleSubmit} className="mt-4 space-y-3">
      <input type="hidden" name="postSlug" value={postSlug} />
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          name="authorName"
          placeholder="Ton nom"
          required
          className="rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:border-gold focus:outline-none"
        />
        <input
          name="authorEmail"
          type="email"
          placeholder="Ton email (non affiché)"
          required
          className="rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:border-gold focus:outline-none"
        />
      </div>
      <textarea
        name="content"
        placeholder="Ton commentaire"
        required
        rows={4}
        className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:border-gold focus:outline-none"
      />
      {status === "error" && <p className="text-sm text-red-600">Merci de remplir tous les champs.</p>}
      <button
        type="submit"
        disabled={isPending}
        className="rounded-full bg-[#c9846f] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#b8735f] disabled:opacity-60"
      >
        {isPending ? "Envoi…" : "Envoyer"}
      </button>
    </form>
  );
}
