"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GoogleColors from "@/components/GoogleColors";

const ACCOMPAGNEMENTS = [
  {
    image: "/images/jwl-formation-redaction-seo-blog.png",
    packName: "JWL Business",
    title: "Création de site web professionnel",
    text: (
      <ul className="space-y-1">
        {[
          "Site moderne et responsive",
          "Optimisé pour mobile",
          "Balises techniques conformes (H1, titres, métadonnées)",
          "Vitesse et sécurité de base",
          "Formation à la prise en main",
        ].map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-green-500">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
    star: "À partir de 1 200 €",
    cta: "Créer mon Site Web",
    href: "/site-internet-aix-en-provence",
  },
  {
    image: "/images/jwl-creation-site-web-aix-en-provence.png",
    packName: "JWL Booster",
    badge: "Nouveau",
    title: (
      <>
        Je crée ou refonds ton site web visible par <GoogleColors />
      </>
    ),
    text: (
      <>
        1 seule interlocutrice
        <ul className="mt-2 space-y-1">
          {[
            "Ton site sur-mesure prêt en 1 mois (selon ta disponibilité)",
            "SEO + GEO intégrés dès sa conception",
            "Installation search console",
            "Maintenance et suivi inclus",
            "Sérénité totale & levier d'acquisition sur 12 mois",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-green-500">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
    star: "Audit stratégique offert pour tout accompagnement annuel",
    cta: "Découvre le détail de mes accompagnements",
    href: "/site-web-seo-aix-en-provence",
  },
];

export default function AccompagnementsSection() {
  const [active, setActive] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const dragging = useRef(false);
  const dragMoved = useRef(false);

  function next() {
    setActive((i) => (i + 1) % ACCOMPAGNEMENTS.length);
  }
  function prev() {
    setActive((i) => (i - 1 + ACCOMPAGNEMENTS.length) % ACCOMPAGNEMENTS.length);
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
    <div className="mx-auto max-w-[1200px]">
      <div className="relative mx-auto grid max-w-[900px] gap-8 md:hidden">
        {ACCOMPAGNEMENTS.map((item, i) => (
          <AccompagnementCard key={i} item={item} />
        ))}
      </div>

      <div
        className="relative mx-auto hidden min-h-[560px] w-[460px] touch-pan-y select-none md:block"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={() => {
          dragging.current = false;
          dragStartX.current = null;
        }}
        onDragStart={(e) => e.preventDefault()}
      >
        {ACCOMPAGNEMENTS.map((item, i) => {
          const isActive = i === active;
          const offset = i - active;

          return (
            <button
              key={i}
              type="button"
              aria-label={item.packName}
              onClick={() => {
                if (dragMoved.current) return;
                setActive(i);
              }}
              className="absolute left-1/2 top-0 w-[460px] cursor-grab text-left active:cursor-grabbing"
              style={{
                transform: `translateX(-50%) translateX(${offset * 260}px) scale(${isActive ? 1 : 0.85})`,
                zIndex: isActive ? 20 : 10,
                opacity: isActive ? 1 : 0.55,
                filter: isActive ? "none" : "grayscale(0.3)",
                transition: "transform 0.5s ease, opacity 0.5s ease, filter 0.5s ease",
                pointerEvents: "auto",
              }}
            >
              <AccompagnementCard item={item} interactive={!isActive} />
            </button>
          );
        })}

        <button
          type="button"
          aria-label="Offre précédente"
          onClick={prev}
          className="absolute left-0 top-1/2 z-30 flex h-11 w-11 -translate-x-[64px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl text-black shadow-lg transition-transform hover:scale-110"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Offre suivante"
          onClick={next}
          className="absolute right-0 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 translate-x-[64px] items-center justify-center rounded-full bg-white text-xl text-black shadow-lg transition-transform hover:scale-110"
        >
          ›
        </button>
      </div>

      <div className="mt-8 hidden justify-center gap-2 md:flex">
        {ACCOMPAGNEMENTS.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Voir l'offre ${i + 1}`}
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

function AccompagnementCard({
  item,
  interactive,
}: {
  item: (typeof ACCOMPAGNEMENTS)[number];
  interactive?: boolean;
}) {
  return (
    <div className="relative flex flex-col items-center pt-28 md:pt-32">
      <Image
        src={item.image}
        alt={typeof item.title === "string" ? item.title : "JWL Marketing"}
        width={220}
        height={220}
        draggable={false}
        className="absolute -top-4 left-1/2 h-[140px] w-[140px] -translate-x-1/2 rounded-xl object-cover shadow-lg md:h-[160px] md:w-[160px]"
      />
      {item.badge && (
        <span className="absolute right-6 top-2 -rotate-6 rounded-full bg-gold px-4 py-2 text-xs font-bold text-white shadow-md">
          {item.badge}
        </span>
      )}
      <div className="relative flex min-h-[400px] w-full flex-1 flex-col rounded-2xl border border-[#c9846f]/40 bg-[#141414] p-8 pt-10 text-left text-white">
        <span className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
          {item.packName}
        </span>
        <h3 className="text-center font-heading text-xl leading-snug">
          {item.title}
        </h3>
        <div className="mt-4 flex-1 whitespace-pre-line text-sm text-white/85">
          {item.text}
          <p className="mt-4 text-sm text-gold">⭐ {item.star}</p>
        </div>
        {interactive ? (
          <span className="mt-6 inline-block self-center rounded-full bg-[#c9846f]/60 px-6 py-3 text-sm font-medium text-white">
            {item.cta}
          </span>
        ) : (
          <Link
            href={item.href}
            className="mt-6 inline-block self-center rounded-full bg-[#c9846f] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#b8735f]"
          >
            {item.cta}
          </Link>
        )}
      </div>
    </div>
  );
}
