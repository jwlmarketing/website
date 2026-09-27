"use client";

import { useState, useTransition } from "react";
import { saveSiteCodeAction } from "../actions";

export default function CodeForm({
  pageSlug,
  pageLabel,
  initialCode,
}: {
  pageSlug: string;
  pageLabel: string;
  initialCode: string;
}) {
  const [code, setCode] = useState(initialCode);
  const [message, setMessage] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    const formData = new FormData();
    formData.set("pageSlug", pageSlug);
    formData.set("code", code);
    startTransition(async () => {
      const res = await saveSiteCodeAction(formData);
      setMessage("error" in res ? res.error : "Code enregistré.");
    });
  }

  return (
    <form onSubmit={onSubmit} className="form-group">
      <label>{pageLabel}</label>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Code d'accès"
      />
      <button type="submit" className="btn-or btn-sm" disabled={pending} style={{ marginTop: 10 }}>
        {pending ? "Enregistrement..." : "Enregistrer"}
      </button>
      {message && <p style={{ marginTop: 8, fontSize: 13 }}>{message}</p>}
    </form>
  );
}
