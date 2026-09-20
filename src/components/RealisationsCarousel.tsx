"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type RealisationSummary = {
  slug: string;
  title: string;
  coverImage?: string;
};

export default function RealisationsCarousel({
  items,
}: {
  items: RealisationSummary[];
}) {
  const [active, setActive] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const dragging = useRef(false);
  const dragMoved = useRef(false);

  function next() {
    setActive((i) => (i + 1) % items.length);
  }
  function prev() {
    setActive((i) => (i - 1 + items.length) % items.length);
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

  if (items.length === 0) return null;

  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <div className="grid gap-6 md:hidden">
        {items.map((item, i) => (
          <Link key={i} href={`/realisations/${item.slug}`} className="block">
            <RealisationCard item={item} />
          </Link>
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
        onDragStart={(e) => e.preventDefault()}
      >
        {items.map((item, i) => {
          const total = items.length;
          let offset = i - active;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;
          const isActive = offset === 0;

          return (
            <Link
              key={i}
              href={`/realisations/${item.slug}`}
              aria-label={item.title}
              onClick={(e) => {
                if (dragMoved.current) e.preventDefault();
                else if (!isActive) {
                  e.preventDefault();
                  setActive(i);
                }
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
              <RealisationCard item={item} />
            </Link>
          );
        })}

        {items.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Projet précédent"
              onClick={prev}
              className="absolute left-0 top-1/2 z-30 flex h-11 w-11 -translate-x-[64px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl text-black shadow-lg transition-transform hover:scale-110"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Projet suivant"
              onClick={next}
              className="absolute right-0 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 translate-x-[64px] items-center justify-center rounded-full bg-white text-xl text-black shadow-lg transition-transform hover:scale-110"
            >
              ›
            </button>
          </>
        )}
      </div>

      {items.length > 1 && (
        <div className="mt-8 hidden justify-center gap-2 md:flex">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Voir le projet ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === active ? "bg-[#c9846f]" : "bg-black/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function RealisationCard({ item }: { item: RealisationSummary }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-[#141414] text-white shadow-md">
      <div className="relative h-[220px] w-full bg-[#1e1e1e]">
        {item.coverImage && (
          <Image
            src={item.coverImage}
            alt={item.title}
            fill
            draggable={false}
            className="object-cover"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between p-4 text-left">
        <p className="text-[15px] font-semibold leading-[22px]">{item.title}</p>
        <p className="mt-3 text-sm font-semibold text-[#c9846f]">
          Voir le projet →
        </p>
      </div>
    </div>
  );
}
