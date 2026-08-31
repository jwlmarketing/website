"use client";

import { useTransition } from "react";
import { uploadMediaAction } from "./actions";

export default function UploadForm() {
  const [isPending, startTransition] = useTransition();

  function handleFile(file: File | undefined) {
    if (!file) return;
    const formData = new FormData();
    formData.set("file", file);
    startTransition(async () => {
      await uploadMediaAction(formData);
    });
  }

  return (
    <label className="media-upload-zone" style={{ display: "block" }}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={32} height={32}>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <p>
        {isPending ? (
          "Envoi en cours…"
        ) : (
          <>
            Glisse une image ou <span className="upload-label-link">choisis un fichier</span>
          </>
        )}
      </p>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        disabled={isPending}
        onChange={(e) => handleFile(e.target.files?.[0])}
      />
    </label>
  );
}
