"use client";

import { useRef, useState } from "react";
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
  const dragStartX = useRef<number | null>(null);
  const dragging = useRef(false);
  const dragMoved = useRef(false);

  function next() {
    setActive((i) => (i + 1) % STEPS.length);
  }
  function prev() {
    setActive((i) => (i - 1 + STEPS.length) % STEPS.length);
  }

  function onPointerDown(e: React.PointerEvent) {
    dragStartX.current = e.clientX;
    dragging.current = true;
    dragMoved.current = false;
  }
  function onPointerMove(e: React.PointerEvent) {
    if (!dragging.current || dragStartX.current === null) return;
    if (Math.abs(e.clientX - dragStartX.current) > 10) dragMoved.current = true;
  }
  function onPointerUp(e: React.PointerEvent) {
    if (!dragging.current || dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    if (delta > 40) prev();
    else if (delta < -40) next();
    dragging.current = false;
    dragStartX.current = null;
  }

  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <div className="grid gap-6 md:hidden">
        {STEPS.map((step, i) => (
          <StepCard key={i} step={step} />
        ))}
      </div>

      <div
        className="relative mx-auto hidden h-[420px] w-[400px] touch-pan-y select-none md:block"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={() => {
          dragging.current = false;
          dragStartX.current = null;
        }}
      >
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
              onClick={() => {
                if (dragMoved.current) return;
                setActive(i);
              }}
              className="absolute left-1/2 top-0 w-[400px] cursor-grab text-left active:cursor-grabbing"
              style={{
                transform: `translateX(-50%) translateX(${offset * 280}px) scale(${isActive ? 1 : 0.85})`,
                zIndex: isActive ? 20 : 10 - Math.abs(offset),
                opacity: Math.abs(offset) > 1 ? 0 : isActive ? 1 : 0.55,
                filter: isActive ? "none" : "grayscale(0.3)",
                transition:
                  "transform 0.5s ease, opacity 0.5s ease, filter 0.5s ease",
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
    <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-[#141414] text-white shadow-md">
      <Image
        src={step.image}
        alt={step.alt}
        width={step.width}
        height={step.height}
        className="h-[220px] w-full object-cover"
      />
      <div className="p-4 text-left">
        <p className="text-[15px] font-semibold leading-[22px]">
          {step.title}
        </p>
        <p className="mt-2 text-[14px] leading-[22px] text-white/80">
          {step.text}
        </p>
      </div>
    </div>
  );
}
