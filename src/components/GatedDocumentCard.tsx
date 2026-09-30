"use client";

import { useState } from "react";
import type { PublicGatedDocument } from "@/lib/gatedContent";

function DocThumbnail() {
  return (
    <div className="relative flex aspect-[3/4] w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#f3e4da] to-[#e7c9b7]">
      <svg viewBox="0 0 64 64" className="h-14 w-14 text-white drop-shadow" fill="none" aria-hidden>
        <path
          d="M14 4h26l12 12v40a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z"
          fill="currentColor"
          fillOpacity="0.9"
        />
        <path d="M40 4v12h12" fill="#e7c9b7" />
      </svg>
      <span className="absolute bottom-2 right-2 rounded bg-[#c9846f] px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">
        PDF
      </span>
    </div>
  );
}

export default function GatedDocumentCard({ doc }: { doc: PublicGatedDocument }) {
  const [stage, setStage] = useState<"locked" | "code" | "preview">("locked");
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  async function unlock(e?: React.FormEvent) {
    e?.preventDefault();
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
      setFileUrl(URL.createObjectURL(blob));
      setStage("preview");
    } finally {
      setPending(false);
    }
  }

  function handleClick() {
    if (stage !== "locked") return;
    if (doc.locked) {
      setStage("code");
    } else {
      unlock();
    }
  }

  function closePreview() {
    if (fileUrl) URL.revokeObjectURL(fileUrl);
    setFileUrl(null);
    setStage("locked");
    setCode("");
  }

  return (
    <>
      <div className="flex w-full flex-col overflow-hidden rounded-2xl border border-[#e9dfd5] bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <div
          role={stage === "locked" ? "button" : undefined}
          tabIndex={stage === "locked" ? 0 : undefined}
          onClick={handleClick}
          onKeyDown={(e) => {
            if (stage === "locked" && (e.key === "Enter" || e.key === " ")) handleClick();
          }}
          className={stage === "locked" ? "cursor-pointer" : undefined}
        >
          <DocThumbnail />
        </div>
        <div className="p-4">
          <p className="text-sm font-semibold text-black">{doc.title}</p>
          {stage === "locked" && doc.locked && (
            <button
              type="button"
              onClick={handleClick}
              className="mt-1 flex items-center gap-1 text-xs text-neutral-500 transition hover:text-[#c9846f]"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden>
                <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              Code requis
            </button>
          )}
          {stage === "locked" && !doc.locked && (
            <button
              type="button"
              onClick={handleClick}
              disabled={pending}
              className="mt-1 flex items-center gap-1 text-xs text-neutral-500 transition hover:text-[#c9846f]"
            >
              {pending ? "..." : "Télécharger"}
            </button>
          )}
          {stage === "code" && (
            <form onSubmit={unlock} className="mt-2 flex items-center gap-2">
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Code"
                autoFocus
                className="w-full rounded-full border border-[#e9dfd5] px-3 py-1.5 text-sm focus:border-[#c9846f] focus:outline-none"
              />
              <button
                type="submit"
                disabled={pending}
                className="shrink-0 rounded-full bg-[#c9846f] px-3 py-1.5 text-xs font-bold uppercase text-white transition hover:bg-[#b56f5a] disabled:opacity-60"
              >
                {pending ? "..." : "OK"}
              </button>
            </form>
          )}
          {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
        </div>
      </div>

      {stage === "preview" && fileUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8"
          onClick={closePreview}
        >
          <div
            className="flex h-full w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#e9dfd5] px-5 py-3">
              <p className="font-semibold text-black">{doc.title}</p>
              <div className="flex items-center gap-2">
                <a
                  href={fileUrl}
                  download={`${doc.title}.pdf`}
                  className="rounded-full bg-[#2fa86a] px-4 py-1.5 text-xs font-bold uppercase text-white transition hover:bg-[#26905a]"
                >
                  Télécharger
                </a>
                <button
                  type="button"
                  onClick={closePreview}
                  aria-label="Fermer"
                  className="rounded-full p-2 text-neutral-400 transition hover:bg-neutral-100 hover:text-black"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
                    <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
            <iframe src={fileUrl} title={doc.title} className="w-full flex-1" />
          </div>
        </div>
      )}
    </>
  );
}
