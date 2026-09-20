"use client";

import { useState } from "react";
import Image from "next/image";

const STEPS = [
  {
    image: "/images/conception-site-web.png",
    width: 466,
    height: 346,
    alt: "Je comprends comment tes clients te recherchent — JWL Marketing",
    title: "Je comprends comment tes clients te recherchent",
    text: "Étude de ton activité, de tes concurrents et des mots-clés utilisés sur Google.",
  },
  {
    image: "/images/site-web-sur-mesure.png",
    width: 466,
    height: 344,
    alt: "Je crée un site web pensé pour être trouvé — JWL Marketing",
    title: "Je crée un site web pensé pour être trouvé",
    text: "Structure, contenus, pages de services et optimisation SEO dès la création.",
  },
  {
    image: "/images/jwl-methode-analyse-search-console.png",
    width: 466,
    height: 346,
    alt: "J'analyse les données et j'améliore la connexion à Google Search Console — JWL Marketing",
    title:
      "J'analyse les données et j'améliore la connexion à Google Search Console",
    text: "Pour comprendre le comportement des visiteurs et identifier les opportunités d'amélioration.",
  },
];

export default function MethodeCarousel() {
  const [active, setActive] = useState(0);

  return (
    <div className="mx-auto mt-10 max-w-[1200px]">
      <div className="grid gap-6 md:hidden">
        {STEPS.map((step, i) => (
          <StepCard key={i} step={step} />
        ))}
      </div>

      <div className="relative hidden min-h-[440px] select-none md:block">
        {STEPS.map((step, i) => {
          const total = STEPS.length;
          let offset = i - active;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;
          const isActive = offset === 0;

          return (
            <button
              key={i}
              type="button"
              aria-label={step.title}
              onClick={() => setActive(i)}
              className="absolute left-1/2 top-0 w-full max-w-[400px] -translate-x-1/2 text-left"
              style={{
                transform: `translateX(calc(-50% + ${offset * 280}px)) scale(${isActive ? 1 : 0.85})`,
                zIndex: isActive ? 20 : 10 - Math.abs(offset),
                opacity: Math.abs(offset) > 1 ? 0 : isActive ? 1 : 0.55,
                filter: isActive ? "none" : "grayscale(0.3)",
                transition:
                  "transform 0.5s ease, opacity 0.5s ease, filter 0.5s ease",
                cursor: isActive ? "default" : "pointer",
                pointerEvents: "auto",
              }}
            >
              <StepCard step={step} />
            </button>
          );
        })}
      </div>

      <div className="mt-8 hidden justify-center gap-2 md:flex">
        {STEPS.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Voir l'étape ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              i === active ? "bg-[#c9846f]" : "bg-black/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function StepCard({ step }: { step: (typeof STEPS)[number] }) {
  return (
    <>
      <Image
        src={step.image}
        alt={step.alt}
        width={step.width}
        height={step.height}
        className="h-auto w-full rounded-t-2xl object-cover"
      />
      <div className="rounded-b-2xl bg-[#141414] p-4 text-left text-white">
        <p className="text-[15px] font-semibold leading-[22px]">
          {step.title}
        </p>
        <p className="mt-2 text-[14px] leading-[22px] text-white/80">
          {step.text}
        </p>
      </div>
    </>
  );
}
