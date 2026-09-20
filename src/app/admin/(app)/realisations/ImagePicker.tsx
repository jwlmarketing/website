"use client";

import { useRef, useState, useTransition } from "react";
import { uploadRealisationImageAction } from "./media-actions";

export default function ImagePicker({
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
      const res = await uploadRealisationImageAction(formData);
      if ("path" in res) onChange(res.path);
      else setError(res.error);
    });
  }

  return (
    <div className="form-group">
      <label>{label}</label>

      {value ? (
        <div className="thumb-preview">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value} alt="" />
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
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <span>{isPending ? "Envoi en cours…" : "Glisse une image ici ou clique"}</span>
          <span className="upload-hint">Elle est ajoutée automatiquement</span>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
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
