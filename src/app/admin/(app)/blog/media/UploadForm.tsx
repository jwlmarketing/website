"use client";

import { uploadMediaAction } from "./actions";

export default function UploadForm() {
  return (
    <form action={uploadMediaAction} encType="multipart/form-data">
      <label className="media-upload-zone" style={{ display: "block" }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={32} height={32}>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <p>
          Glisse une image ou <span className="upload-label-link">choisis un fichier</span>
        </p>
        <input
          type="file"
          name="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => e.currentTarget.form?.requestSubmit()}
        />
      </label>
    </form>
  );
}
