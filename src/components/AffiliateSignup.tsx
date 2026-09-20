"use client";

import { useState } from "react";

const API_URL = "https://jwl-license-api.hub.jwlmarketing.fr/api/affiliate/signup";

export default function AffiliateSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus("done");
        setMessage(
          data.alreadyExisted
            ? "Tu es déjà inscrit·e : ton lien vient de repartir par email."
            : `Bienvenue ! Ton code est ${data.code} — il arrive aussi par email avec ton lien.`
        );
      } else {
        setStatus("error");
        setMessage("Vérifie ton nom et ton email.");
      }
    } catch {
      setStatus("error");
      setMessage("Impossible de contacter le serveur, réessaie dans un instant.");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-5 text-center text-sm text-green-800">
        {message}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        required
        placeholder="Ton nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-full border border-neutral-300 px-5 py-3 text-sm outline-none focus:border-[#c9846f]"
      />
      <input
        type="email"
        required
        placeholder="Ton email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-full border border-neutral-300 px-5 py-3 text-sm outline-none focus:border-[#c9846f]"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-[#c9846f] px-8 py-3 font-medium text-white transition-colors hover:bg-[#b8735f] disabled:opacity-60"
      >
        {status === "loading" ? "Inscription..." : "Devenir affilié"}
      </button>
      {status === "error" && <p className="text-center text-sm text-red-600">{message}</p>}
    </form>
  );
}
