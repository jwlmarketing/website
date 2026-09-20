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
    <div>
      <span className="text-xs font-medium text-[#555]">{label}</span>

      {value ? (
        <div className="relative mt-1 inline-block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={value}
            alt=""
            className="h-28 w-28 rounded-lg border border-[#ddd] object-cover"
          />
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs text-white"
            aria-label="Retirer l'image"
          >
            ✕
          </button>
        </div>
      ) : (
        <div
          onClick={() => inputRef.current?.click()}
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
          className={`mt-1 flex h-28 w-full max-w-[280px] cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border-2 border-dashed text-center text-xs transition-colors ${
            isDraggingOver
              ? "border-gold bg-gold/10 text-gold"
              : "border-[#ddd] text-[#888] hover:border-gold hover:text-gold"
          }`}
        >
          <span>{isPending ? "Envoi…" : "Glisse une image ici"}</span>
          <span className="text-[10px]">ou clique pour parcourir</span>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            disabled={isPending}
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
        </div>
      )}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
