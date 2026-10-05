import { buildMetadata } from "@/lib/seo";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import ContactForm from "@/components/ContactForm";
import NewsletterCta from "@/components/NewsletterCta";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = buildMetadata({
  path: "/contact",
  locale: "fr",
  title: "Contact | JWL Marketing",
  description: "Contacte JWL Marketing pour ton projet SEO et visibilité digitale à Aix-en-Provence et partout en France.",
});

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader locale="fr" href="/contact" />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero-jodie.png"
            alt="Jodie Lapaillerie — JWL Marketing"
            fill
            priority
            className="object-cover object-[center_15%] scale-110"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative mx-auto grid max-w-[1200px] gap-10 px-6 pb-16 pt-[140px] md:grid-cols-2 md:px-10 md:pb-24">
          <div className="flex flex-col justify-end text-white">
            <h1 className="font-heading text-5xl leading-[1.05] md:text-6xl">
              Jodie
              <br />
              LAPAILLERIE
            </h1>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.instagram.com/jwl.marketing/"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition hover:border-white hover:bg-white/10"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                  <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.16-.46-.35-1.26-.4-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43a4.9 4.9 0 0 1 1.15-1.77A4.9 4.9 0 0 1 5.59 1.8c.46-.16 1.26-.35 2.43-.4C9.29 1.34 9.67 1.33 12.87 1.33ZM12 6.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm0 9.07a3.57 3.57 0 1 1 0-7.14 3.57 3.57 0 0 1 0 7.14Zm5.72-9.28a1.29 1.29 0 1 1-2.57 0 1.29 1.29 0 0 1 2.57 0Z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/people/JWL-Marketing-Communication-Marketing-et-Commercial/61578345536283/"
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition hover:border-white hover:bg-white/10"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                  <path d="M13.5 22v-8.5h2.85l.43-3.3h-3.28V8.05c0-.96.27-1.61 1.64-1.61h1.75V3.5c-.3-.04-1.34-.13-2.55-.13-2.52 0-4.25 1.54-4.25 4.36v2.43H7.24v3.3h2.85V22h3.4Z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@jwl.marketing"
                target="_blank"
                rel="noopener"
                aria-label="TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition hover:border-white hover:bg-white/10"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                  <path d="M16.6 5.82a4.28 4.28 0 0 1-1.7-3.42h-3.07v13.44a2.6 2.6 0 1 1-1.85-2.49V10.2a5.65 5.65 0 1 0 4.92 5.6V9.08a7.3 7.3 0 0 0 4.4 1.48V7.5a4.27 4.27 0 0 1-2.7-1.68z" />
                </svg>
              </a>
            </div>

            <p className="mt-6 max-w-[380px] text-[15px] leading-relaxed text-white/85">
              Parlons de votre projet ! JWL Marketing accompagne les
              entrepreneurs, TPE et PME à Aix-en-Provence et partout en
              France dans leur stratégie marketing, leur visibilité SEO,
              leur site web et leur développement commercial.
            </p>
          </div>

          <div className="rounded-2xl bg-transparent p-6 md:p-8">
            <ContactForm variant="dark" />
          </div>
        </div>
      </section>

      {/* Logo + infos pratiques */}
      <section className="mx-auto max-w-[1200px] px-6 py-16 md:px-10">
        <ScrollReveal>
          <div className="mx-auto mb-10 w-[140px]">
            <Image
              src="/images/logo-jwl-marketing.png"
              alt="JWL Marketing"
              width={280}
              height={100}
              className="h-auto w-full"
            />
          </div>

          <div className="flex flex-col items-center gap-3 text-center text-sm text-neutral-700">
            <p className="flex items-center gap-2">
              <span aria-hidden>📍</span> Aix-en-Provence et toute la France,
              à distance
            </p>
            <a href="mailto:service@jwl-marketing.fr" className="flex items-center gap-2 hover:text-[#c9846f]">
              <span aria-hidden>✉️</span> service@jwl-marketing.fr
            </a>
            <a href="tel:0783792814" className="flex items-center gap-2 hover:text-[#c9846f]">
              <span aria-hidden>📞</span> 07.83.79.28.14
            </a>
          </div>

          <div className="mx-auto mt-14 grid max-w-[800px] gap-10 text-center sm:grid-cols-3">
            <div>
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#c9846f]/30 text-[#c9846f]">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.8 1 .8 1.6v.5h5.4v-.5c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 3Z" />
                </svg>
              </div>
              <p className="font-heading text-[15px] text-black">
                Un projet, une mission ?
              </p>
            </div>
            <div>
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#c9846f]/30 text-[#c9846f]">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="12" cy="12" r="1" fill="currentColor" />
                </svg>
              </div>
              <p className="font-heading text-[15px] text-black">
                Besoin d&apos;un conseil ?
              </p>
            </div>
            <div>
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#c9846f]/30 text-[#c9846f]">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 11V8a3 3 0 0 1 6 0M3 13l3-2 2.5 1.8L12 11l3 2 3-2 3 2v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3Z" />
                </svg>
              </div>
              <p className="font-heading text-[15px] text-black">
                Envie d&apos;une collaboration ?
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Où me trouver */}
      <section className="mx-auto max-w-[1200px] px-6 pb-16 md:px-10">
        <ScrollReveal>
          <div className="overflow-hidden rounded-2xl bg-[#c9846f] p-8 text-center md:p-12">
            <p className="mb-6 font-heading text-xl text-white md:text-2xl">
              Où me trouver ?
            </p>
            <div className="mx-auto overflow-hidden rounded-xl">
              <iframe
                title="JWL Marketing — Aix-en-Provence"
                src="https://www.google.com/maps?q=Aix-en-Provence&output=embed"
                width="100%"
                height="360"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Échanger directement */}
      <section className="mx-auto max-w-[1200px] px-6 pb-16 md:px-10">
        <ScrollReveal>
          <div className="rounded-2xl bg-[#faf8f5] p-8 text-center md:p-12">
            <p className="font-heading text-xl text-black md:text-2xl">
              📣 Vous préférez échanger directement ?
            </p>
            <p className="mx-auto mt-3 max-w-[520px] text-sm text-neutral-600">
              Réservez un premier échange avec JWL Marketing.
              <br />
              30 minutes pour faire le point sur votre projet, vos objectifs
              et les premières pistes d&apos;action.
            </p>

            <div className="relative mx-auto mt-6 h-[180px] w-[180px]">
              <Image
                src="/images/contact-echange-illustration.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <a
              href="https://calendar.app.google/MZrdz3xprTy4kfwy9"
              target="_blank"
              rel="noopener"
              className="mt-6 inline-block rounded-full bg-[#c9846f] px-8 py-4 font-semibold text-white transition hover:bg-[#b56f5a]"
            >
              📅 Prendre rendez-vous
            </a>

            <div className="mx-auto mt-8 flex max-w-[500px] flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm font-medium text-[#c9846f]">
              <span>Échange personnalisé</span>
              <span>Des conseils concrets</span>
              <span>Sans engagement</span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-[1200px] px-6 pb-20 md:px-10">
        <ScrollReveal>
          <NewsletterCta />
        </ScrollReveal>
      </section>
    </div>
  );
}
