"use client";

import { useRef, useState, useTransition } from "react";
import { uploadGatedDocumentAction } from "../actions";

export default function UploadForm({
  pages,
}: {
  pages: { slug: string; label: string }[];
}) {
  const [message, setMessage] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage(null);
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const res = await uploadGatedDocumentAction(formData);
      if ("error" in res) {
        setMessage(res.error);
      } else {
        setMessage("Document ajouté.");
        formRef.current?.reset();
      }
    });
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
        <input type="text" name="category" placeholder="ex: Entrepreneuri'Elles" required />
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
          {pending ? "Envoi..." : "Ajouter le document"}
        </button>
      </div>
      {message && <p style={{ fontSize: 13, gridColumn: "1 / -1" }}>{message}</p>}
    </form>
  );
}
