"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-[999] flex w-full items-center border-b border-[#eee] bg-white px-5 py-3">
      <div className="mr-5 flex shrink-0 items-center">
        <Link href="/">
          <Image
            src="/images/favicon-bsn.png"
            alt="JWL Marketing Aix-en-Provence"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
      </div>

      {/* Burger — visible sous 960px */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Menu"
        className="ml-auto flex flex-col gap-[5px] border-none bg-none p-1 max-[960px]:flex min-[961px]:hidden"
      >
        <span
          className={`block h-0.5 w-6 bg-black transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
        />
        <span className={`block h-0.5 w-6 bg-black transition-opacity ${open ? "opacity-0" : ""}`} />
        <span
          className={`block h-0.5 w-6 bg-black transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
        />
      </button>

      {/* Nav desktop — cachée sous 960px */}
      <nav className="hidden flex-1 items-center justify-center gap-2 whitespace-nowrap font-heading text-[15px] min-[961px]:flex">
        <Link href="/" className="px-2.5 py-1.5 text-black hover:text-[#c9a227]">
          Accueil
        </Link>
        <span className="mx-0.5 text-[#ccc]">|</span>

        <Link href="/qui-suis-je" className="px-2.5 py-1.5 text-black hover:text-[#c9a227]">
          Qui suis-je
        </Link>
        <span className="mx-0.5 text-[#ccc]">|</span>

        <div className="group relative pb-2.5">
          <a href="#" className="inline-flex items-center gap-1 px-2.5 py-1.5 text-black hover:text-[#c9a227]">
            Services
            <span className="border-x-4 border-t-[5px] border-x-transparent border-t-[#c9a227] transition-transform group-hover:rotate-180" />
          </a>
          <div className="absolute left-0 top-full z-[999] hidden min-w-[280px] flex-col border border-[#c9a227] border-t-0 bg-white py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.15)] group-hover:flex">
            <span className="block px-5 pb-1 pt-3.5 font-sans text-[10px] tracking-[2px] text-[#c9a227] uppercase">
              Mon expertise
            </span>
            <Link href="/audit-seo-aix-en-provence" className="px-5 py-2.5 text-sm hover:bg-[#faf7ee] hover:text-[#c9a227]">
              Audit SEO
            </Link>
            <span className="block border-t border-[#eee] px-5 pb-1 pt-3.5 font-sans text-[10px] tracking-[2px] text-[#c9a227] uppercase">
              Mes solutions
            </span>
            <Link href="/google-my-business-aix-en-provence" className="px-5 py-2.5 text-sm hover:bg-[#faf7ee] hover:text-[#c9a227]">
              Fiche Google My Business
            </Link>
            <Link href="/site-internet-aix-en-provence" className="px-5 py-2.5 text-sm hover:bg-[#faf7ee] hover:text-[#c9a227]">
              Création de site web
            </Link>
          </div>
        </div>
        <span className="mx-0.5 text-[#ccc]">|</span>

        <Link href="/tarifs" className="px-2.5 py-1.5 text-black hover:text-[#c9a227]">
          Tarifs
        </Link>
        <span className="mx-0.5 text-[#ccc]">|</span>

        <Link href="/contact-jwl-marketing-aix-en-provence" className="px-2.5 py-1.5 text-black hover:text-[#c9a227]">
          Contact
        </Link>
        <span className="mx-0.5 text-[#ccc]">|</span>

        <Link href="/blog" className="px-2.5 py-1.5 text-black hover:text-[#c9a227]">
          Blog
        </Link>
        <span className="mx-0.5 text-[#ccc]">|</span>

        <a
          href="https://plugins.jwl-marketing.fr/"
          className="px-2.5 py-1.5 text-black hover:text-[#c9a227]"
        >
          Plugins
        </a>
      </nav>

      <div className="ml-auto hidden shrink-0 items-center gap-3 whitespace-nowrap min-[961px]:flex">
        <a
          href="tel:+33783792814"
          className="rounded bg-[#c9a227] px-4.5 py-2.5 font-semibold text-black hover:bg-[#e0b52c]"
        >
          Appelle-moi
        </a>
        <a href="https://intranet.jwlmarketing.fr/" aria-label="Connexion espace client">
          <Image
            src="/images/seco.png"
            alt="Connexion espace client"
            width={28}
            height={28}
            className="h-7 w-7"
          />
        </a>
      </div>

      {/* Menu mobile déroulant */}
      {open && (
        <div className="absolute left-0 right-0 top-full z-[998] flex max-h-[80vh] flex-col overflow-y-auto border-t border-[#eee] bg-white min-[961px]:hidden">
          <Link href="/" onClick={() => setOpen(false)} className="block border-b border-[#f0f0f0] px-5 py-3.5 font-heading text-[15px] text-black hover:text-[#c9a227]">
            Accueil
          </Link>
          <Link href="/qui-suis-je" onClick={() => setOpen(false)} className="block border-b border-[#f0f0f0] px-5 py-3.5 font-heading text-[15px] text-black hover:text-[#c9a227]">
            Qui suis-je
          </Link>
          <span className="block border-b border-[#f0f0f0] px-5 pb-1.5 pt-3.5 font-sans text-[11px] tracking-[2px] text-[#c9a227] uppercase">
            Services
          </span>
          <Link href="/audit-seo-aix-en-provence" onClick={() => setOpen(false)} className="block border-b border-[#f0f0f0] py-3.5 pl-9 pr-5 text-sm text-black hover:text-[#c9a227]">
            Audit SEO
          </Link>
          <Link href="/google-my-business-aix-en-provence" onClick={() => setOpen(false)} className="block border-b border-[#f0f0f0] py-3.5 pl-9 pr-5 text-sm text-black hover:text-[#c9a227]">
            Fiche Google My Business
          </Link>
          <Link href="/site-internet-aix-en-provence" onClick={() => setOpen(false)} className="block border-b border-[#f0f0f0] py-3.5 pl-9 pr-5 text-sm text-black hover:text-[#c9a227]">
            Création de site web
          </Link>
          <Link href="/tarifs" onClick={() => setOpen(false)} className="block border-b border-[#f0f0f0] px-5 py-3.5 font-heading text-[15px] text-black hover:text-[#c9a227]">
            Tarifs
          </Link>
          <Link href="/contact-jwl-marketing-aix-en-provence" onClick={() => setOpen(false)} className="block border-b border-[#f0f0f0] px-5 py-3.5 font-heading text-[15px] text-black hover:text-[#c9a227]">
            Contact
          </Link>
          <Link href="/blog" onClick={() => setOpen(false)} className="block border-b border-[#f0f0f0] px-5 py-3.5 font-heading text-[15px] text-black hover:text-[#c9a227]">
            Blog
          </Link>
          <a href="https://plugins.jwl-marketing.fr/" onClick={() => setOpen(false)} className="block border-b border-[#f0f0f0] px-5 py-3.5 font-heading text-[15px] text-black hover:text-[#c9a227]">
            Plugins
          </a>
          <a href="tel:+33783792814" onClick={() => setOpen(false)} className="block border-b border-[#f0f0f0] px-5 py-3.5 font-heading text-[15px] text-black hover:text-[#c9a227]">
            Appelle-moi — 07 83 79 28 14
          </a>
          <a href="https://intranet.jwlmarketing.fr/" onClick={() => setOpen(false)} className="block px-5 py-3.5 font-heading text-[15px] text-black hover:text-[#c9a227]">
            Connexion espace client
          </a>
        </div>
      )}
    </header>
  );
}
