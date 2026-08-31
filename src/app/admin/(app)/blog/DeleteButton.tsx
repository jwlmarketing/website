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
      <button type="submit" className="tbl-btn tbl-btn--danger" title="Supprimer">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14}>
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      </button>
    </form>
  );
}
