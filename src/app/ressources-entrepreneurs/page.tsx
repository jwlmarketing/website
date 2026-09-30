"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";

const CARDS = [
  {
    id: "parcours",
    title: "Le parcours des créatrice 🚀",
    desc: "Ton site ne doit pas seulement être joli : il doit être compris par Google et pensé pour attirer tes futurs clients.",
    image: "/images/entrepreneurielles-parcours-cover.jpg",
    requiresLock: true,
    pdf: "atelierparcourselle.pdf",
    label: "l'Atelier du parcours des créatrices"
  },
  {
    id: "visibilite",
    title: "Comment être visible localement sur Aix-en-Provence",
    desc: "Donnez à votre public une brève description de cette ressource.",
    image: "/images/entrepreneurielles-visibilite-locale.jpg",
    requiresLock: true,
    pdf: "jwlaap.pdf",
    label: "le guide de Visibilité Locale"
  },
  {
    id: "encours",
    title: "En cours",
    desc: "en cours",
    image: "/images/entrepreneurielles-en-cours.jpg",
    requiresLock: false,
    pdf: null,
    label: ""
  }
];

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [activeCard, setActiveCard] = useState<(typeof CARDS)[number] | null>(null);

  useEffect(() => {
    if (localStorage.getItem("jwl_unlocked_all") === "true") {
      setIsUnlocked(true);
    }
  }, []);

  const handleCardAction = (card: typeof CARDS[number]) => {
    setActiveCard(card);
    if (card.requiresLock) {
      setIsModalOpen(true);
      setError(false);
      setPassword("");
    } else {
      alert("Ressource bientôt disponible !");
    }
  };

  const handleVerifyPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim() === "jwlparcoursdescreatrices") {
      setIsUnlocked(true);
      setError(false);
      localStorage.setItem("jwl_unlocked_all", "true");
    } else {
      setError(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPassword("");
    setError(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader locale="fr" href="/ressources-entrepreneurs" />

      {/* Hero */}
      <section className="mx-auto max-w-[1440px] px-6 pt-28 pb-20 md:px-10 md:pt-40">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <h1 className="font-heading text-4xl leading-tight text-black md:text-5xl">
              <span className="text-[#c9846f]">JWL</span> Entrepreneuri&apos;<span className="text-gold">Elles</span> :<br />Entreprendre entre Elles.
            </h1>
            <p className="mt-6 max-w-[520px] text-lg leading-8 text-neutral-600">
              Des femmes qui construisent ensemble leur indépendance, pour devenir la meilleure version d&apos;elle même.
            </p>
            <a href="/contact-jwl-marketing-aix-en-provence" className="mt-8 inline-flex items-center rounded-full bg-gold px-8 py-4 text-center text-lg font-semibold text-white transition hover:bg-[#b8952f]">
              Retrouve moi
            </a>
          </div>
          <div className="relative mx-auto h-auto w-full max-w-[420px]">
            <Image src="/images/entrepreneurielles-hero.jpg" alt="JWL" width={1400} height={2099} className="rounded-3xl object-contain" priority />
          </div>
        </div>
      </section>

      {/* Cartes */}
      <section className="mx-auto max-w-[1440px] px-6 pb-32 md:px-10">
        <div className="text-center">
          <p className="italic text-[#c9846f]">Entreprendre</p>
          <h2 className="mt-2 font-heading text-3xl text-black md:text-4xl">Ensemble</h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card) => (
            <div key={card.title} className="flex w-full flex-col overflow-hidden rounded-2xl border border-[#e9dfd5] bg-white text-left shadow-sm">
              <div className="relative aspect-[16/9] w-full bg-[#faf8f5]">
                <Image src={card.image} alt={card.title} fill className="object-contain" />
              </div>
              <div className="p-4 flex flex-1 flex-col justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-black">{card.title}</p>
                  <p className="mt-2 text-sm text-neutral-600">{card.desc}</p>
                </div>
                <button onClick={() => handleCardAction(card)} className="mt-4 inline-flex w-fit items-center rounded-full bg-[#c9846f] px-5 py-2.5 text-xs font-bold uppercase text-white transition hover:scale-105 hover:bg-[#b56f5a]">
                  Je télécharge
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pop-up */}
      {isModalOpen && activeCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-[440px] overflow-hidden rounded-3xl bg-white p-8 text-center shadow-2xl relative">
            <button onClick={closeModal} className="absolute top-4 right-4 text-neutral-400 hover:text-black text-xl transition z-10">✕</button>

            {!isUnlocked ? (
              <form onSubmit={handleVerifyPassword} className="space-y-6">
                <div className="relative mx-auto h-28 w-44 overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50 flex items-center justify-center">
                  <Image src={activeCard.image} alt="Lock" fill className="object-cover blur-[8px] scale-110 opacity-75" />
                  <div className="absolute text-xl bg-white/90 h-10 w-10 rounded-full flex items-center justify-center shadow-md">🔒</div>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-black">Ressource Protégée</h3>
                  <p className="mt-2 text-sm text-neutral-500">Code requis pour {activeCard.label}.</p>
                </div>
                <div className="text-left">
                  <input type="password" placeholder="Code..." value={password} onChange={(e) => setPassword(e.target.value)} className={`w-full rounded-full border px-5 py-3 text-sm text-black focus:outline-none ${error ? "border-red-500 bg-red-50" : "border-neutral-200 focus:border-[#c9846f]"}`} />
                  {error && <p className="mt-1.5 pl-4 text-xs font-medium text-red-500">⚠️ Code incorrect.</p>}
                </div>
                <button type="submit" className="w-full rounded-full bg-[#c9846f] py-3.5 text-sm font-bold uppercase text-white hover:bg-[#b56f5a]">Déverrouiller</button>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="relative mx-auto h-28 w-44 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 flex items-center justify-center">
                  <Image src={activeCard.image} alt="Unlock" fill className="object-cover blur-0" />
                  <div className="absolute text-xl bg-emerald-500 h-8 w-8 rounded-full flex items-center justify-center shadow-md">✨</div>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-black">Accès Accordé 🎉</h3>
                  <p className="mt-2 text-sm text-neutral-500">{activeCard.label} est disponible.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <a href={`/documents/${activeCard.pdf}`} target="_blank" rel="noopener noreferrer" onClick={closeModal} className="w-full rounded-full border border-neutral-200 py-3.5 text-sm font-semibold text-black hover:bg-neutral-50">👁️ Prévisualiser</a>
                  <a href={`/documents/${activeCard.pdf}`} download={activeCard.pdf || "doc.pdf"} onClick={closeModal} className="w-full rounded-full bg-[#c9846f] py-3.5 text-sm font-bold uppercase text-white hover:bg-[#b56f5a]">📥 Télécharger</a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
