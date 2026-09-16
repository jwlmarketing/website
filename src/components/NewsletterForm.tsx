"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Entre une adresse email valide.");
      return;
    }
    setStatus("sending");
    setMessage("");
    try {
      const fd = new FormData();
      fd.append("email", email);
      fd.append("source", "site-internet-aix-en-provence");
      fd.append("locale", "fr");
      const res = await fetch("/api/newsletter", { method: "POST", body: fd });
      const data = await res.json();
      if (data.success) {
        setStatus("ok");
        setMessage(data.message || "✓ Vérifie ta boîte mail pour confirmer !");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Une erreur est survenue.");
      }
    } catch {
      setStatus("error");
      setMessage("Erreur réseau. Réessaie dans quelques secondes.");
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-[420px] flex-wrap justify-center gap-2 rounded-2xl border border-white/20 bg-white p-4 md:mx-0 md:justify-start"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Écris ton adresse mail"
          autoComplete="email"
          className="min-w-[200px] flex-1 rounded-full border-2 border-[#E5E2DC] bg-white px-[22px] py-3.5 text-[0.9rem] text-[#0D0D0D] outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="whitespace-nowrap rounded-full bg-gold px-6 py-3.5 text-[0.88rem] font-bold text-white hover:bg-[#b5903a] disabled:opacity-60"
        >
          {status === "sending" ? "Envoi en cours..." : "Reçois mes conseils"}
        </button>
      </form>
      {message && (
        <p
          className={`mt-3 text-[0.86rem] font-semibold ${
            status === "ok" ? "text-green-400" : "text-red-400"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
