"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LanguageToggle from "@/components/LanguageToggle";

export default function SiteHeader({
  locale,
  href,
}: {
  locale: "fr" | "en";
  href: string;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 flex w-full justify-center px-[5%] pt-4">
      <div
        className={`flex w-full items-center justify-between transition-all duration-300 ease-out ${
          scrolled
            ? "max-w-[480px] rounded-full bg-white/95 px-6 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur"
            : "max-w-[1400px] rounded-full bg-transparent px-2 py-2"
        }`}
      >
        <Link href={locale === "en" ? "/en" : "/"}>
          <Image
            src="/images/logo-jwl-marketing.png"
            alt="JWL Marketing"
            width={966}
            height={187}
            className={`w-auto transition-all duration-300 ${scrolled ? "h-[26px]" : "h-[36px]"}`}
          />
        </Link>
        <div className="flex items-center gap-3">
          <a href="https://intranet.jwlmarketing.fr/" aria-label="Connexion espace client">
            <Image
              src="/images/seco.png"
              alt="Connexion espace client"
              width={28}
              height={28}
              className={`transition-all duration-300 ${scrolled ? "h-6 w-6" : "h-7 w-7"}`}
            />
          </a>
          <LanguageToggle locale={locale} href={href} />
        </div>
      </div>
    </div>
  );
}
