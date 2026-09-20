"use client";

import { useRef, useState, useTransition } from "react";
import { uploadRealisationVideoAction } from "./media-actions";

export default function VideoPicker({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (path: string) => void;
}) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFile(file: File | undefined) {
    if (!file) return;
    setError("");
    const formData = new FormData();
    formData.set("file", file);
    startTransition(async () => {
      try {
        const res = await uploadRealisationVideoAction(formData);
        if ("path" in res) onChange(res.path);
        else setError(res.error);
      } catch {
        setError("Échec de l'envoi de la vidéo. Réessaie.");
      }
    });
  }

  return (
    <div className="form-group">
      <label>{label}</label>

      {value ? (
        <div className="thumb-preview" style={{ aspectRatio: "16/9" }}>
          <video src={value} controls style={{ width: "100%", height: "100%", objectFit: "contain", background: "#000" }} />
          <button
            type="button"
            className="thumb-remove"
            onClick={() => onChange("")}
            title="Retirer"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14}>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      ) : (
        <label
          className="upload-zone"
          onDragOver={(e) => {
            e.preventDefault();
            setIsDraggingOver(true);
          }}
          onDragLeave={() => setIsDraggingOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDraggingOver(false);
            handleFile(e.dataTransfer.files?.[0]);
          }}
          style={isDraggingOver ? { borderColor: "var(--or)", background: "var(--or-bg)" } : undefined}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={22} height={22}>
            <polygon points="23 7 16 12 23 17 23 7" />
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
          </svg>
          <span>{isPending ? "Envoi en cours…" : "Glisse une vidéo ici ou clique"}</span>
          <span className="upload-hint">MP4, WEBM ou MOV</span>
          <input
            ref={inputRef}
            type="file"
            accept="video/mp4,video/webm,video/quicktime"
            style={{ display: "none" }}
            disabled={isPending}
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
        </label>
      )}
      {error && <small style={{ color: "var(--red)" }}>{error}</small>}
    </div>
  );
}
