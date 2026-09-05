"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const COOKIE_NAME = "jwl_carousel_dismissed";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 jours
const SLIDES_COUNT = 10;

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name: string, value: string, maxAge: number) {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

export default function PromoCarouselPopup() {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!getCookie(COOKIE_NAME)) {
      setVisible(true);
    }
  }, []);

  function close() {
    setCookie(COOKIE_NAME, "1", COOKIE_MAX_AGE);
    setVisible(false);
  }

  function prev() {
    setIndex((i) => (i === 0 ? SLIDES_COUNT - 1 : i - 1));
  }

  function next() {
    setIndex((i) => (i === SLIDES_COUNT - 1 ? 0 : i + 1));
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 px-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-[420px]">
        <button
          type="button"
          onClick={close}
          aria-label="Fermer"
          className="absolute -top-4 -right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl font-medium text-black shadow-lg transition-transform hover:scale-105"
        >
          ✕
        </button>

        <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
          <div className="relative aspect-[4/5] w-full">
            <Image
              src={`/images/carousel-conseils-seo/slide-${index + 1}.png`}
              alt={`Conseils JWL Marketing — diapositive ${index + 1}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="Diapositive précédente"
          className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl text-black shadow-md transition-colors hover:bg-white"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Diapositive suivante"
          className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl text-black shadow-md transition-colors hover:bg-white"
        >
          ›
        </button>

        <div className="mt-4 flex justify-center gap-1.5">
          {Array.from({ length: SLIDES_COUNT }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Aller à la diapositive ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-5 bg-white" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
