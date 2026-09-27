"use client";

import { useRef, useState } from "react";
import { uploadGatedChunkAction, finalizeGatedDocumentAction } from "../actions";

const CATEGORIES = [
  "Google My Business",
  "Développement commercial",
  "SEO-GEO",
  "IA",
  "Réseaux sociaux",
  "Entrepreneuri'Elles",
  "Replays",
  "Guides PDF",
];

// Kept well under any reverse-proxy body size limit we've seen (some default
// to as little as 1MB) so each request is guaranteed to get through, no
// matter how big the PDF is overall.
const CHUNK_SIZE = 1_000_000;

export default function UploadForm({
  pages,
}: {
  pages: { slug: string; label: string }[];
}) {
  const [message, setMessage] = useState<string | null>(null);
  const [progress, setProgress] = useState<number | null>(null);
  const [pending, setPending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage(null);
    setPending(true);
    setProgress(0);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const file = formData.get("file") as File | null;
      if (!file || !file.size) {
        setMessage("Aucun fichier sélectionné.");
        return;
      }
      if (file.type !== "application/pdf") {
        setMessage("Seuls les fichiers PDF sont acceptés.");
        return;
      }

      const uploadId = crypto.randomUUID();
      const totalChunks = Math.ceil(file.size / CHUNK_SIZE);

      for (let i = 0; i < totalChunks; i++) {
        const chunk = file.slice(i * CHUNK_SIZE, (i + 1) * CHUNK_SIZE);
        const chunkData = new FormData();
        chunkData.set("uploadId", uploadId);
        chunkData.set("index", String(i));
        chunkData.set("chunk", chunk);

        const res = await uploadGatedChunkAction(chunkData);
        if ("error" in res) {
          setMessage(res.error);
          return;
        }
        setProgress(Math.round(((i + 1) / totalChunks) * 100));
      }

      const finalizeData = new FormData();
      finalizeData.set("uploadId", uploadId);
      finalizeData.set("totalChunks", String(totalChunks));
      finalizeData.set("pageSlug", String(formData.get("pageSlug") || ""));
      finalizeData.set("category", String(formData.get("category") || ""));
      finalizeData.set("title", String(formData.get("title") || ""));
      finalizeData.set("code", String(formData.get("code") || ""));
      finalizeData.set("fileName", file.name);

      const res = await finalizeGatedDocumentAction(finalizeData);
      if ("error" in res) {
        setMessage(res.error);
        return;
      }
      setMessage("Document ajouté.");
      formRef.current?.reset();
    } finally {
      setPending(false);
      setProgress(null);
    }
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="form-grid form-grid-2">
      <div className="form-group">
        <label>Page</label>
        <select name="pageSlug" defaultValue={pages[0]?.slug}>
          {pages.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.label}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Catégorie / levier</label>
        <select name="category" defaultValue={CATEGORIES[0]}>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Titre du document</label>
        <input type="text" name="title" placeholder="ex: Guide PDF" required />
      </div>
      <div className="form-group">
        <label>Code d&apos;accès</label>
        <input type="text" name="code" placeholder="ex: 1234" required />
      </div>
      <div className="form-group">
        <label>Fichier PDF</label>
        <input type="file" name="file" accept="application/pdf" required />
      </div>
      <div className="form-group" style={{ alignSelf: "end" }}>
        <button type="submit" className="btn-or btn-sm" disabled={pending}>
          {pending ? `Envoi... ${progress ?? 0}%` : "Ajouter le document"}
        </button>
      </div>
      {message && <p style={{ fontSize: 13, gridColumn: "1 / -1" }}>{message}</p>}
    </form>
  );
}
