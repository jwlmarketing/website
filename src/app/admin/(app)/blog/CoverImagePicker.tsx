"use client";

import { useState, useTransition } from "react";
import { uploadMediaAction } from "./media/actions";

export default function CoverImagePicker({
  initialPath,
  initialAlt,
}: {
  initialPath?: string;
  initialAlt?: string;
}) {
  const [imagePath, setImagePath] = useState(initialPath || "");
  const [alt, setAlt] = useState(initialAlt || "");
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");

  function handleFile(file: File | undefined) {
    if (!file) return;
    setError("");
    const formData = new FormData();
    formData.set("file", file);
    startTransition(async () => {
      try {
        const res = await uploadMediaAction(formData);
        if (res?.path) setImagePath(res.path);
      } catch {
        setError("Échec de l'envoi de l'image.");
      }
    });
  }

  return (
    <div className="form-group">
      <input type="hidden" name="coverImage" value={imagePath} />

      {imagePath ? (
        <div className="thumb-preview">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imagePath} alt={alt} />
          <button type="button" className="thumb-remove" onClick={() => setImagePath("")} title="Retirer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14}>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      ) : (
        <label className="upload-zone">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={22} height={22}>
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <span>{isPending ? "Envoi en cours…" : "Choisir une image"}</span>
          <span className="upload-hint">Elle est déposée automatiquement dans public/images/blog/</span>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            disabled={isPending}
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
        </label>
      )}
      {error && <small style={{ color: "var(--red)" }}>{error}</small>}

      <label style={{ marginTop: 10 }}>Texte alternatif</label>
      <input name="coverAlt" value={alt} onChange={(e) => setAlt(e.target.value)} />
    </div>
  );
}
