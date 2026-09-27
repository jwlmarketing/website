"use client";

import { useState } from "react";
import type { PublicGatedDocument } from "@/lib/gatedContent";

function DocumentTile({ doc }: { doc: PublicGatedDocument }) {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function unlock(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setPending(true);
    try {
      const res = await fetch("/api/gated-downloads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ documentId: doc.id, code }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Code incorrect.");
        return;
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${doc.title}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
      setOpen(false);
      setCode("");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="flex flex-col items-center rounded-2xl border border-[#e9dfd5] bg-white p-5 text-center shadow-sm">
      <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10 text-[#c9846f]" aria-hidden>
        <path
          d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M15 2v5h5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="8" y="13" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 13v-1.5a2 2 0 1 1 4 0V13" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <p className="mt-3 text-sm font-semibold text-black">{doc.title}</p>

      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-4 rounded-full bg-[#2fa86a] px-4 py-2 text-xs font-bold uppercase text-white transition hover:bg-[#26905a]"
        >
          Télécharger
        </button>
      ) : (
        <form onSubmit={unlock} className="mt-4 w-full">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Code"
            autoFocus
            className="w-full rounded-full border border-[#e9dfd5] px-4 py-2 text-center text-sm focus:border-[#c9846f] focus:outline-none"
          />
          <button
            type="submit"
            disabled={pending}
            className="mt-2 w-full rounded-full bg-[#c9846f] px-4 py-2 text-xs font-bold uppercase text-white transition hover:bg-[#b56f5a] disabled:opacity-60"
          >
            {pending ? "..." : "Valider"}
          </button>
          {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
        </form>
      )}
    </div>
  );
}

export default function GatedDocumentsModal({
  category,
  documents,
  onClose,
}: {
  category: string;
  documents: PublicGatedDocument[];
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      onClick={onClose}
    >
      <div
        className="max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-2xl text-black">{category}</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="rounded-full p-2 text-neutral-400 transition hover:bg-neutral-100 hover:text-black"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {documents.length === 0 ? (
          <p className="mt-6 text-sm text-neutral-500">
            Aucun document pour le moment.
          </p>
        ) : (
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {documents.map((doc) => (
              <DocumentTile key={doc.id} doc={doc} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
