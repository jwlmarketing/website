"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NewsletterCta() {
  const pathname = usePathname();
  const isQuiSuisJe = pathname === "/consultant-freelance-seo-aix-en-provence";
  const isNice = pathname === "/consultant-freelance-seo-nice";
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
      fd.append("source", "site");
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
    <div
      className="grid items-center gap-10 overflow-hidden rounded-xl md:grid-cols-[420px_1fr]"
      style={{ background: "#fdf2ef" }}
    >
      <div className="relative h-full min-h-[400px] overflow-hidden">
        <Image
          src="/images/newsletter-jodie.png"
          alt="Jodie Lapaillerie — JWL Marketing"
          width={525}
          height={768}
          className="relative h-full w-full object-cover"
        />
      </div>

      <div className="px-6 py-[60px] text-center md:px-0 md:pr-10 md:text-left">
        <h2 className="mb-6 font-heading text-[clamp(1.8rem,4vw,2.4rem)] font-bold leading-tight text-[#0D0D0D]">
          {isQuiSuisJe
            ? "Et toi? Quand est ce que tu t'engages pour ton Business sur Aix?"
            : isNice
              ? "Et toi ? Quand est-ce que tu t'engages pour ton Business sur Nice?"
              : "Hâte de voir votre carrière décollée !"}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-[420px] flex-wrap justify-center gap-2 border-2 border-black bg-white p-6 md:mx-0 md:justify-start"
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
              status === "ok" ? "text-green-700" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
