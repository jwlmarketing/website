"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const COOKIE_NAME = "jwl_cookie_consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180; // 180 jours

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name: string, value: string, maxAge: number) {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!getCookie(COOKIE_NAME));
  }, []);

  function choose(value: "accepted" | "declined") {
    setCookie(COOKIE_NAME, value, COOKIE_MAX_AGE);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#eee] bg-white px-5 py-5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-2xl text-[#1a1a1a] md:text-left">
          Ce site utilise des cookies pour améliorer ton expérience et mesurer
          son audience. Tu peux accepter ou refuser leur utilisation.{" "}
          <Link href="/cookies" className="underline hover:text-[#c9846f]">
            En savoir plus
          </Link>
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => choose("declined")}
            className="rounded-full border-2 border-[#c9846f] px-6 py-2.5 text-sm font-medium text-[#c9846f] transition-colors hover:bg-[#faf3ea]"
          >
            Refuser
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="rounded-full bg-[#c9846f] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#b8735f]"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
