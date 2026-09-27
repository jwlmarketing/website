"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { unlockPageAction } from "@/lib/pageGate";

export default function PageGateForm({ pageSlug }: { pageSlug: string }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      const res = await unlockPageAction(pageSlug, code);
      if ("error" in res) {
        setError(res.error);
      } else {
        router.refresh();
      }
    });
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6">
      <form onSubmit={onSubmit} className="w-full max-w-sm text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c9846f]">
          Accès protégé
        </p>
        <h1 className="mt-3 font-heading text-3xl text-black">
          Entre le code pour continuer
        </h1>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="mt-8 w-full rounded-full border border-[#e9dfd5] px-6 py-3 text-center text-lg focus:border-[#c9846f] focus:outline-none"
          placeholder="Code d'accès"
          autoFocus
        />
        <button
          type="submit"
          disabled={pending}
          className="mt-4 w-full rounded-full bg-[#c9846f] px-6 py-3 font-semibold text-white transition hover:bg-[#b56f5a] disabled:opacity-60"
        >
          {pending ? "Vérification..." : "Valider"}
        </button>
        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
      </form>
    </div>
  );
}
