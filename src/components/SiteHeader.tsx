"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LanguageToggle from "@/components/LanguageToggle";

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path d="M5 7.5 10 12.5 15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Menu({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function X({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

const TEXT = {
  fr: {
    offers: "Mes offres",
    offerItems: [
      { label: "JWL Business", href: "/site-internet-aix-en-provence" },
      { label: "JWL Booster", href: "/site-web-seo-aix-en-provence" },
      { label: "JWL Connect", href: "/tarifs" },
      { label: "JWL Prospecte", href: "/developpement-commercial-aix-en-provence" },
    ],
    signature: { label: "JWL Signature", href: "/ressources/kit/signature" },
    work: { label: "Mes réalisations", href: "/realisations" },
    blog: { label: "Mon blog", href: "/blog" },
    cta: { label: "Parler de ton projet", href: "/contact-jwl-marketing-aix-en-provence" },
  },
  en: {
    offers: "My offers",
    offerItems: [
      { label: "JWL Business", href: "/en/site-internet-aix-en-provence" },
      { label: "JWL Booster", href: "/en/tarifs" },
      { label: "JWL Connect", href: "/en/tarifs" },
      { label: "JWL Prospecte", href: "/en/developpement-commercial-aix-en-provence" },
    ],
    signature: { label: "JWL Signature", href: "/ressources/kit/signature" },
    work: { label: "My work", href: "/en/realisations" },
    blog: { label: "My blog", href: "/en/blog" },
    cta: { label: "Talk about your project", href: "/en/contact-jwl-marketing-aix-en-provence" },
  },
} as const;

export default function SiteHeader({
  locale,
  href,
}: {
  locale: "fr" | "en";
  href: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [offersOpen, setOffersOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = TEXT[locale];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-[500] flex w-full justify-center px-[5%] pt-4">
      <div
        className={`w-full transition-all duration-300 ease-out ${
          mobileOpen
            ? "max-w-[480px] rounded-3xl bg-white px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)] lg:max-w-[1400px] lg:rounded-full lg:px-2 lg:py-2"
            : scrolled
              ? "max-w-[480px] rounded-full bg-white/95 px-6 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur lg:max-w-[900px]"
              : "max-w-[480px] rounded-full bg-transparent px-2 py-2 lg:max-w-[1400px]"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href={locale === "en" ? "/en" : "/"}>
            <Image
              src="/images/logo-jwl-marketing.png"
              alt="JWL Marketing"
              width={966}
              height={187}
              className={`w-auto transition-all duration-300 ${scrolled ? "h-[26px]" : "h-[36px]"}`}
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            <div
              className="relative"
              onMouseEnter={() => setOffersOpen(true)}
              onMouseLeave={() => setOffersOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-[15px] font-semibold text-black"
              >
                {t.offers}
                <ChevronDown className="h-4 w-4" />
              </button>
              {offersOpen && (
                <div className="absolute left-1/2 top-full z-[60] w-56 -translate-x-1/2 pt-3">
                  <div className="overflow-hidden rounded-2xl bg-white py-2 shadow-[0_16px_40px_rgba(0,0,0,0.15)]">
                    {t.offerItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#faf3ea] hover:text-[#c9846f]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href={t.signature.href} className="text-[15px] font-semibold text-black hover:text-[#c9846f]">
              {t.signature.label}
            </Link>
            <Link href={t.work.href} className="text-[15px] font-semibold text-black hover:text-[#c9846f]">
              {t.work.label}
            </Link>
            <Link href={t.blog.href} className="text-[15px] font-semibold text-black hover:text-[#c9846f]">
              {t.blog.label}
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={t.cta.href}
              className="hidden rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-black/85 lg:inline-block"
            >
              {t.cta.label}
            </Link>
            <a href="https://intranet.jwlmarketing.fr/" aria-label="Connexion espace client" className="hidden sm:block">
              <Image
                src="/images/seco.png"
                alt="Connexion espace client"
                width={28}
                height={28}
                className={`transition-all duration-300 ${scrolled ? "h-6 w-6" : "h-7 w-7"}`}
              />
            </a>
            <LanguageToggle locale={locale} href={href} />
            <button
              type="button"
              aria-label="Menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-black lg:hidden"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="mt-3 flex flex-col gap-1 border-t border-black/10 pt-3 lg:hidden">
            <p className="px-4 pb-1 pt-2 text-xs font-semibold uppercase tracking-wide text-black/40">
              {t.offers}
            </p>
            {t.offerItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-2 text-sm font-semibold text-black hover:bg-[#faf3ea] hover:text-[#c9846f]"
              >
                {item.label}
              </Link>
            ))}
            <div className="my-1 border-t border-black/10" />
            <Link
              href={t.signature.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-2 text-sm font-semibold text-black hover:bg-[#faf3ea] hover:text-[#c9846f]"
            >
              {t.signature.label}
            </Link>
            <Link
              href={t.work.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-2 text-sm font-semibold text-black hover:bg-[#faf3ea] hover:text-[#c9846f]"
            >
              {t.work.label}
            </Link>
            <Link
              href={t.blog.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-2 text-sm font-semibold text-black hover:bg-[#faf3ea] hover:text-[#c9846f]"
            >
              {t.blog.label}
            </Link>
            <Link
              href={t.cta.href}
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full bg-black px-4 py-3 text-center text-sm font-semibold text-white"
            >
              {t.cta.label}
            </Link>
          </nav>
        )}
      </div>
    </div>
  );
}
