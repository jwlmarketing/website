"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-lg border border-gold bg-white p-8 text-center">
        <p className="font-heading text-xl font-semibold text-black">
          Message envoyé !
        </p>
        <p className="mt-2 text-sm text-[#555]">
          Merci, je te réponds dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        required
        placeholder="Nom - Prénom"
        className="w-full rounded border border-[#ddd] px-4 py-3 text-sm outline-none focus:border-gold"
      />
      <input
        name="activity"
        placeholder="Activité"
        className="w-full rounded border border-[#ddd] px-4 py-3 text-sm outline-none focus:border-gold"
      />
      <input
        name="phone"
        type="tel"
        placeholder="Tel"
        className="w-full rounded border border-[#ddd] px-4 py-3 text-sm outline-none focus:border-gold"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="E-mail"
        className="w-full rounded border border-[#ddd] px-4 py-3 text-sm outline-none focus:border-gold"
      />
      <input
        name="website"
        placeholder="URL de votre site web"
        className="w-full rounded border border-[#ddd] px-4 py-3 text-sm outline-none focus:border-gold"
      />
      <textarea
        name="message"
        required
        rows={5}
        placeholder="Message"
        className="w-full rounded border border-[#ddd] px-4 py-3 text-sm outline-none focus:border-gold"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-block rounded-[5px] border-2 border-gold bg-gold px-10 py-[15px] font-medium text-white transition-colors hover:border-[#b8952f] hover:bg-[#b8952f] disabled:opacity-60"
      >
        {status === "sending" ? "Envoi en cours..." : "Envoyer"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600">
          Une erreur est survenue, réessaie dans un instant.
        </p>
      )}
    </form>
  );
}
