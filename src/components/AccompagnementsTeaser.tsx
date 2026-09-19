"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Cartes "Choisis l'accompagnement adapté à ton projet" — carrousel superposé
 * (une carte devant, les autres derrière), glissable souris/tactile, rotation
 * auto. Le détail complet (checklist, tarifs, modales) reste dans
 * AccompagnementsSection, réutilisée ailleurs.
 */

const CARDS = {
  fr: [
    {
      image: "/images/strategie-digitale.webp",
      name: "JWL Business",
      subtitle: "Création de site web pro",
      href: "/site-internet-aix-en-provence",
    },
    {
      image: "/images/croissance-digitale.webp",
      name: "JWL Booster",
      subtitle: "Refonte, pilotage de site web SEO",
      href: "/tarifs",
    },
    {
      image: "/images/communication-digitale.webp",
      name: "JWL Connect",
      subtitle: "Rédige ton blog avec du SEO",
      href: "/tarifs",
    },
    {
      image: "/images/transformation-digitale.webp",
      name: "JWL Prospecte",
      subtitle: "Développement commercial",
      href: "/developpement-commercial-aix-en-provence",
    },
  ],
  en: [
    {
      image: "/images/strategie-digitale.webp",
      name: "JWL Business",
      subtitle: "Professional website creation",
      href: "/en/site-internet-aix-en-provence",
    },
    {
      image: "/images/croissance-digitale.webp",
      name: "JWL Booster",
      subtitle: "Redesign and SEO website management",
      href: "/en/tarifs",
    },
    {
      image: "/images/communication-digitale.webp",
      name: "JWL Connect",
      subtitle: "Write your blog with SEO",
      href: "/en/tarifs",
    },
    {
      image: "/images/transformation-digitale.webp",
      name: "JWL Prospecte",
      subtitle: "Business development",
      href: "/en/developpement-commercial-aix-en-provence",
    },
  ],
};

const CTA = {
  fr: { label: "Découvrir les différences", href: "/tarifs" },
  en: { label: "Discover the differences", href: "/en/tarifs" },
};

export default function AccompagnementsTeaser() {
  const pathname = usePathname();
  const locale = pathname?.startsWith("/en") ? "en" : "fr";
  const cards = CARDS[locale];
  const cta = CTA[locale];

  const [index, setIndex] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const dragging = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % cards.length);
    }, 3500);
    return () => clearInterval(id);
  }, [cards.length]);

  function next() {
    setIndex((i) => (i + 1) % cards.length);
  }
  function prev() {
    setIndex((i) => (i - 1 + cards.length) % cards.length);
  }
  function onPointerDown(e: React.PointerEvent) {
    dragStartX.current = e.clientX;
    dragging.current = true;
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
    <div className="mx-auto max-w-[1200px]">
      <div
        className="relative mx-auto h-[420px] max-w-[1000px] select-none touch-pan-y sm:h-[480px]"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerLeave={() => {
          dragging.current = false;
          dragStartX.current = null;
        }}
      >
        {cards.map((card, i) => {
          const total = cards.length;
          let offset = i - index;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          const isFront = offset === 0;
          const translateX = offset * 210;
          const scale = isFront ? 1.1 : 0.75;
          const rotate = isFront ? 0 : offset > 0 ? 6 : -6;
          const zIndex = isFront ? 30 : 10 - Math.abs(offset);
          const opacity = Math.abs(offset) > 2 ? 0 : isFront ? 1 : 0.7;

          const cardInner = (
            <div className="group flex h-full w-full flex-col overflow-hidden rounded-2xl bg-black text-white shadow-xl transition-colors duration-300 hover:bg-gold">
              <div className="p-3">
                <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-white">
                  <Image src={card.image} alt={card.name} fill className="object-cover" />
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-center gap-1 px-3 py-4 text-center">
                <p className="font-heading text-base font-bold uppercase tracking-wide">
                  {card.name}
                </p>
                <p className="text-sm text-white/80 transition-colors duration-300 group-hover:text-[#141414]/80">
                  {card.subtitle}
                </p>
              </div>
            </div>
          );

          return (
            <div
              key={card.name}
              className="absolute left-1/2 top-1/2 h-[360px] w-[260px] cursor-grab active:cursor-grabbing sm:h-[420px] sm:w-[300px]"
              style={{
                transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale}) rotate(${rotate}deg)`,
                zIndex,
                opacity,
                transition: "transform 0.5s ease, opacity 0.5s ease",
              }}
            >
              {isFront ? (
                <Link href={card.href} className="block h-full w-full">
                  {cardInner}
                </Link>
              ) : (
                <button
                  type="button"
                  aria-label={`Voir ${card.name}`}
                  onClick={() => setIndex(i)}
                  className="block h-full w-full text-left"
                >
                  {cardInner}
                </button>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href={cta.href}
          className="inline-block rounded-full bg-[#c9846f] px-9 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#b8735f]"
        >
          {cta.label}
        </Link>
      </div>
    </div>
  );
}
