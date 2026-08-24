"use client";

import { useState } from "react";

export default function NewsletterCta() {
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
      fd.append("source", "wp-home");
      const res = await fetch(
        "https://api.jwl-marketing.fr/newsletter/api/public-subscribe.php",
        { method: "POST", body: fd }
      );
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
      className="rounded-xl px-6 py-[60px] text-center"
      style={{
        background: "linear-gradient(135deg,#fdf2ef,#fef9f0,#fdf2ef)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <h2 className="mb-4 font-heading text-[clamp(1.8rem,4vw,2.4rem)] font-extrabold leading-tight text-[#0D0D0D]">
        Chaque mois, fais grandir ton entreprise <br />
        avec JWL MARKETING !
      </h2>
      <p className="mb-2.5 text-[0.95rem] font-bold text-[#0D0D0D]">
        Google change. Les habitudes des internautes aussi.
      </p>
      <p className="mb-2.5 text-[0.9rem] leading-[1.7] text-[#6b6560]">
        Alors une à deux fois par mois, je te partage ce que j&apos;apprends sur le terrain :
      </p>
      <ul className="mx-auto mb-3.5 inline-block list-none text-left">
        {[
          "Les nouveautés Google qui peuvent vraiment impacter ton entreprise",
          "Des astuces simples pour être plus visible",
          "Des erreurs que je rencontre chez mes clients",
          "Des exemples concrets qui fonctionnent",
          "Et quelques surprises en avant-première",
        ].map((item) => (
          <li key={item} className="relative pl-[18px] text-[0.88rem] leading-[1.8] text-[#6b6560] before:absolute before:left-0 before:top-[11px] before:h-[5px] before:w-[5px] before:rounded-full before:bg-gold before:content-['']">
            {item}
          </li>
        ))}
      </ul>
      <p className="mb-7 text-[0.82rem] italic text-gray-400">
        Promis, pas de spam. Juste du contenu utile.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-[560px] flex-wrap justify-center gap-2"
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
  );
}
