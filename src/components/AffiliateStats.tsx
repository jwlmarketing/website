"use client";

import { useState } from "react";

const API_URL = "https://jwl-license-api.hub.jwlmarketing.fr/api/affiliate/stats";

type Stats = {
  code: string;
  name: string;
  referrals: number;
  activeReferrals: number;
  estimatedMonthlyCommissionEur: number;
  estimatedTotalSinceStartEur: number;
};

export default function AffiliateStats() {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch(`${API_URL}?code=${encodeURIComponent(code)}`);
      const data = await res.json();
      if (data.ok) {
        setStats(data);
        setStatus("done");
      } else {
        setStatus("error");
        setError("Code introuvable. Vérifie l'orthographe.");
      }
    } catch {
      setStatus("error");
      setError("Impossible de contacter le serveur, réessaie dans un instant.");
    }
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          required
          placeholder="Ton code (ex. MARIE142)"
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          className="flex-1 rounded-full border border-neutral-300 px-5 py-3 text-sm outline-none focus:border-[#c9846f]"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-[#141414] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800 disabled:opacity-60"
        >
          Voir
        </button>
      </form>

      {status === "error" && <p className="text-center text-sm text-red-600">{error}</p>}

      {status === "done" && stats && (
        <div className="rounded-2xl border border-neutral-200 p-5">
          <p className="text-center font-heading text-lg text-[#141414]">{stats.name}</p>
          <div className="mt-4 grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-[#141414]">{stats.activeReferrals}</p>
              <p className="text-xs text-neutral-500">filleuls actifs</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#141414]">{stats.referrals}</p>
              <p className="text-xs text-neutral-500">filleuls au total</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#c9846f]">{stats.estimatedMonthlyCommissionEur} €</p>
              <p className="text-xs text-neutral-500">estimé / mois</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#c9846f]">{stats.estimatedTotalSinceStartEur} €</p>
              <p className="text-xs text-neutral-500">estimé depuis le début</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
