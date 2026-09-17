"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const OTHER_PAGES = {
  fr: [
    { href: "/consultant-freelance-seo-aix-en-provence", label: "Qui suis-je" },
    { href: "/audit-seo-aix-en-provence", label: "Audit SEO" },
    { href: "/google-my-business-aix-en-provence", label: "Fiche Google Business Profile" },
    { href: "/site-internet-aix-en-provence", label: "Création site web" },
    { href: "/developpement-commercial-aix-en-provence", label: "Développement commercial" },
    { href: "/entrepreneur-aix-en-provence", label: "Indépendants" },
    { href: "/blog", label: "Blog" },
  ],
  en: [
    { href: "/en/consultant-freelance-seo-aix-en-provence", label: "About me" },
    { href: "/en/audit-seo-aix-en-provence", label: "SEO Audit" },
    { href: "/en/google-my-business-aix-en-provence", label: "Google Business Profile" },
    { href: "/en/site-internet-aix-en-provence", label: "Website creation" },
    { href: "/en/developpement-commercial-aix-en-provence", label: "Sales development" },
    { href: "/en/entrepreneur-aix-en-provence", label: "Independent professionals" },
    { href: "/en/blog", label: "Blog" },
  ],
};

const ZONES = {
  fr: [
    { href: "/consultant-freelance-seo-marseille-jwl-marketing", label: "Consultant SEO Marseille", external: false },
    { href: "/consultant-freelance-seo-nice", label: "Consultant SEO Nice", external: false },
    { href: "/consultant-freelance-seo-montpellier-jwl-marketing", label: "Consultant SEO Montpellier", external: false },
    { href: "https://www.jwl-marketing.fr/consultant-freelance-seo-toulouse-jwl-marketing/", label: "Consultant SEO Toulouse", external: true },
    { href: "/consultant-seo-bordeaux-jwl-marketing", label: "Consultant SEO Bordeaux", external: false },
    { href: "/consultant-freelance-seo-paris-jwl-marketing", label: "Consultant SEO Paris", external: false },
  ],
  en: [
    { href: "/en/consultant-freelance-seo-marseille-jwl-marketing", label: "SEO Consultant Marseille", external: false },
    { href: "/en/consultant-freelance-seo-nice", label: "SEO Consultant Nice", external: false },
    { href: "/en/consultant-freelance-seo-montpellier-jwl-marketing", label: "SEO Consultant Montpellier", external: false },
    { href: "https://www.jwl-marketing.fr/consultant-freelance-seo-toulouse-jwl-marketing/", label: "SEO Consultant Toulouse", external: true },
    { href: "/en/consultant-seo-bordeaux-jwl-marketing", label: "SEO Consultant Bordeaux", external: false },
    { href: "/en/consultant-freelance-seo-paris-jwl-marketing", label: "SEO Consultant Paris", external: false },
  ],
};

const ZONES_STATIC = {
  fr: [
    "Consultant SEO Lyon",
    "Consultant SEO Nantes",
    "Consultant SEO Lille",
    "Consultant SEO Strasbourg",
    "Consultant SEO Grenoble",
  ],
  en: [
    "SEO Consultant Lyon",
    "SEO Consultant Nantes",
    "SEO Consultant Lille",
    "SEO Consultant Strasbourg",
    "SEO Consultant Grenoble",
  ],
};

const TEXT = {
  fr: {
    title: "Contactez-moi",
    headOffice: "SIÈGE SOCIAL",
    otherPages: "AUTRES PAGES",
    zone: "ZONE D'INTERVENTION",
    socials: "RÉSEAUX SOCIAUX",
    rights: "Tous droits réservés",
    trademark: "™ Marque déposée • Immatriculée au Registre National des Entreprises (RNE)",
    blog: "Blog",
    cgv: "CGV",
    legal: "Mentions légales",
    privacy: "Politique de confidentialité",
    cookies: "Cookies",
  },
  en: {
    title: "Contact me",
    headOffice: "HEAD OFFICE",
    otherPages: "OTHER PAGES",
    zone: "AREAS COVERED",
    socials: "SOCIAL MEDIA",
    rights: "All rights reserved",
    trademark: "™ Registered trademark • Registered with the French National Business Register (RNE)",
    blog: "Blog",
    cgv: "Terms & Conditions",
    legal: "Legal notice",
    privacy: "Privacy policy",
    cookies: "Cookies",
  },
};

export default function Footer() {
  const pathname = usePathname();
  const locale = pathname?.startsWith("/en") ? "en" : "fr";
  const t = TEXT[locale];

  return (
    <footer className="rounded-t-[40px] bg-black px-5 pb-[30px] pt-16" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h2 className="font-heading text-3xl text-gold">{t.title}</h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
          <div>
            <div className="mb-[18px] text-[15px] font-semibold text-white">{t.headOffice}</div>
            <p className="mb-4 text-[13px] leading-relaxed text-white">
              JWL MARKETING
              <br />
              Pôle d&apos;activité des Milles
              <br />
              13290 Aix-en-Provence
            </p>
            <p className="mb-4 text-[13px] leading-relaxed text-white">
              <span className="font-semibold">SIRET</span> 315 087 767
              <br />
              RCS Aix-en-Provence
            </p>
            <a
              href="mailto:service@jwl-marketing.fr"
              className="mb-4 block text-[13px] font-semibold text-white underline hover:text-[#C26A4B]"
            >
              service@jwl-marketing.fr
            </a>
            <div className="mb-2 text-[13px] font-semibold text-white">{t.socials}</div>
            <a
              href="https://www.facebook.com/people/JWL-Marketing-Communication-Marketing-et-Commercial/61578345536283/"
              target="_blank"
              rel="noopener"
              className="block text-[13px] text-white hover:text-[#C26A4B]"
            >
              Facebook
            </a>
          </div>

          <div>
            <div className="mb-[18px] text-[15px] font-semibold text-white">{t.otherPages}</div>
            {OTHER_PAGES[locale].map((p) => (
              <Link key={p.href} href={p.href} className="mb-2 block text-[13px] text-white hover:text-[#C26A4B]">
                {p.label}
              </Link>
            ))}
          </div>

          <div>
            <div className="mb-[18px] text-[15px] font-semibold text-white">{t.zone}</div>
            {ZONES[locale].map((z) =>
              z.external ? (
                <a key={z.href} href={z.href} className="mb-2 block text-[13px] text-white hover:text-[#C26A4B]">
                  {z.label}
                </a>
              ) : (
                <Link key={z.href} href={z.href} className="mb-2 block text-[13px] text-white hover:text-[#C26A4B]">
                  {z.label}
                </Link>
              )
            )}
            {ZONES_STATIC[locale].map((z) => (
              <span key={z} className="mb-2 block text-[13px] text-white">
                {z}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-[#1a1a1a] pt-5 text-center leading-relaxed">
          <div className="text-sm text-white">
            © {new Date().getFullYear()} JWL Marketing - {t.rights}
          </div>
          <div className="text-xs text-[#C26A4B]">
            {t.trademark}
          </div>
          <div className="mt-3.5 flex flex-wrap justify-center gap-x-1 gap-y-1.5 text-xs">
            <Link href={locale === "en" ? "/en/blog" : "/blog"} className="!m-0 !inline text-[#aaa] hover:text-[#C26A4B]">{t.blog}</Link>
            <span className="text-[#444]">•</span>
            <Link href={locale === "en" ? "/en/cgv" : "/cgv"} className="!m-0 !inline text-[#aaa] hover:text-[#C26A4B]">{t.cgv}</Link>
            <span className="text-[#444]">•</span>
            <Link href={locale === "en" ? "/en/mentions-legales" : "/mentions-legales"} className="!m-0 !inline text-[#aaa] hover:text-[#C26A4B]">{t.legal}</Link>
            <span className="text-[#444]">•</span>
            <Link href={locale === "en" ? "/en/politique-de-confidentialite" : "/politique-de-confidentialite"} className="!m-0 !inline text-[#aaa] hover:text-[#C26A4B]">{t.privacy}</Link>
            <span className="text-[#444]">•</span>
            <Link href={locale === "en" ? "/en/cookies" : "/cookies"} className="!m-0 !inline text-[#aaa] hover:text-[#C26A4B]">{t.cookies}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
