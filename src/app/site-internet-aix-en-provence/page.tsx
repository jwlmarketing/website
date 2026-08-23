import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ProofCard from "@/components/ProofCard";
import FaqAccordion from "@/components/FaqAccordion";
import GoogleVisibilityTest from "@/components/GoogleVisibilityTest";
import { PROOF_CARDS } from "@/data/proofCards";
import { SITE_INTERNET_FAQ } from "@/data/siteInternetFaq";

export const metadata: Metadata = {
  title: "Création site internet Aix-en-Provence | JWL Marketing",
  description:
    "Découvre la puissance d'un site web conçu par une experte commerciale. Structure saine, rédaction SEO-GEO et cité par l'IA. France entière.",
};

const WHY = [
  { title: "Plus de 10 ans d'expérience en développement commercial B2B.", text: "J'ai une conviction : un site internet doit avant tout générer des contacts, des opportunités et des clients." },
  { title: "Une expérience au sein du groupe américain IAC (Meetic, TripAdvisor).", text: "J'y ai développé une expertise de la prospection, de la performance commerciale et de l'atteinte des objectifs." },
  { title: "Spécialisée en référencement naturel (SEO).", text: "Formée par Sylvie Grézaud, ancienne collaboratrice de Google, j'intègre les bonnes pratiques SEO dès la conception de votre site." },
  { title: "Basée à Aix-en-Provence.", text: "J'accompagne les entreprises locales, les indépendants et les PME partout en France avec une stratégie adaptée à leurs objectifs." },
  { title: "Mon objectif ne se limite pas à créer un site internet.", text: "Je construis une stratégie pour que Google comprenne votre activité, améliore votre visibilité et vous présente aux bonnes personnes, au bon moment." },
];

const PLANS = [
  { num: "01", title: "Pilotage SEO", price: "675€ HT / mois", tag: "Souvent adapté aux petites structures qui démarrent", items: ["Reporting mensuel", "Optimisations techniques", "Suivi Search Console", "Suivi Analytics", "Réunion mensuelle"] },
  { num: "02", title: "Croissance SEO", price: "895€ HT / mois", tag: "Souvent adapté aux structures en croissance", items: ["Tout le Pilotage SEO", "Gestion de la fiche Google Entreprise", "2 publications / mois", "Optimisations complémentaires"] },
  { num: "03", title: "Performance SEO", price: "1 290€ HT / mois", tag: "Souvent adapté aux PME avec plusieurs équipes", items: ["Tout Croissance SEO", "2 articles SEO / mois", "Stratégie éditoriale", "Accompagnement renforcé"] },
];

export default function SiteInternet() {
  return (
    <div>
      <div className="flex w-full flex-col items-center justify-between gap-10 bg-white px-[5%] py-[60px] md:flex-row">
        <div className="max-w-[600px] flex-1">
          <h1 className="font-heading text-[42px] font-semibold leading-[1.25] text-black">
            Création — Un site web qui te fait{" "}
            <span className="text-gold">gagner de l&apos;argent.</span>
          </h1>
          <div className="my-4 flex items-center gap-2">
            <div className="h-0.5 w-[46px] bg-gold" />
            <span className="text-base text-gold">✦</span>
          </div>
          <p className="text-base text-[#333]">
            Vise la 1ère page Google et investis dans une vraie stratégie
            commerciale digitale.
          </p>
          <Link
            href="/contact-jwl-marketing-aix-en-provence"
            className="mt-6 inline-block rounded-[5px] border-2 border-gold bg-gold px-10 py-[15px] font-medium text-white transition-colors hover:border-[#b8952f] hover:bg-[#b8952f]"
          >
            AUDIT GRATUIT
          </Link>
        </div>
        <Image
          src="/images/hero-site-internet.webp"
          alt="Création de site web SEO à Aix-en-Provence"
          width={1200}
          height={800}
          priority
          className="h-auto w-full max-w-[500px] rounded-2xl object-cover"
        />
      </div>

      {/* Objectif */}
      <section className="mx-auto max-w-[900px] px-6 py-16">
        <SectionHeading
          kicker="Un site web qui travaille pour ton entreprise 24h/24 et qui ne fait pas grève."
          title="Objectif — Faire de ton site web"
          accent="une machine à clients."
        />
        <p className="mb-8 text-center text-[15px] text-[#555]">
          Mon objectif n&apos;est pas simplement de créer un site internet.
          Je conçois un véritable outil commercial capable d&apos;attirer du
          trafic, de rassurer tes visiteurs et de les transformer en
          clients, sans te noyer dans le jargon technique.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { t: "1. Un audit compréhensible", d: "Je t'explique chaque recommandation avec des mots simples afin que tu comprennes pourquoi elle est importante et comment l'appliquer." },
            { t: "2. Un guide pour évoluer", d: "Ton audit devient un véritable guide pratique que tu peux consulter à tout moment pour faire évoluer ton référencement." },
            { t: "3. Un suivi basé sur les données", d: "Chaque mois, nous analysons ensemble tes résultats grâce à Google Search Console et Analytics. Jamais au hasard." },
          ].map((s) => (
            <div key={s.t} className="rounded-2xl border border-gold bg-white p-6">
              <h3 className="font-heading text-lg font-semibold text-black">{s.t}</h3>
              <p className="mt-2 text-sm text-[#555]">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pourquoi me confier */}
      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-[800px]">
          <SectionHeading
            kicker="Je parle couramment le langage &quot;Google&quot;."
            title="Pourquoi me confier"
            accent="votre visibilité ?"
          />
          <div className="space-y-4">
            {WHY.map((w) => (
              <div key={w.title} className="flex gap-3">
                <span className="mt-1 text-gold">✓</span>
                <p className="text-sm leading-relaxed text-[#ddd]">
                  <strong className="text-white">{w.title}</strong> {w.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preuves clients */}
      <section className="bg-transparent px-5 py-[50px]" style={{ fontFamily: '"DM Sans", Arial, sans-serif' }}>
        <SectionHeading title="Preuves clients —" accent="JWL Marketing" />
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-start justify-center gap-6">
          {PROOF_CARDS.map((card) => (
            <ProofCard key={card.badge} data={card} />
          ))}
        </div>
      </section>

      {/* Transparence */}
      <section className="mx-auto max-w-[900px] px-6 py-16">
        <SectionHeading
          title="Un partenariat mensuel,"
          accent="avec des données chiffrées et un accompagnement clair."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
            <p className="text-xs font-semibold uppercase text-red-600">Situation actuelle</p>
            <ul className="mt-3 space-y-2 text-sm text-[#444]">
              <li>✕ Une ligne &quot;SEO&quot; sur ta facture, sans détail ni explication.</li>
              <li>✕ Les actions supplémentaires ? Facturées en plus, sans que tu t&apos;y attendes.</li>
              <li>✕ Tu ne sais pas si ça avance, ni pourquoi.</li>
              <li>✕ Tu attends des résultats depuis des mois, sans visibilité claire.</li>
            </ul>
            <p className="mt-4 text-center font-heading text-2xl font-bold text-red-500">Transparence 0%</p>
          </div>
          <div className="rounded-2xl border border-gold bg-[#fdfaf3] p-6">
            <p className="text-xs font-semibold uppercase text-gold">Avec JWL Marketing</p>
            <ul className="mt-3 space-y-2 text-sm text-[#444]">
              <li>✓ Un rapport chaque mois, expliqué en visio pendant 1h.</li>
              <li>✓ Des actions concrètes, incluses dans ta stratégie, jamais facturées en plus.</li>
              <li>✓ Tu comprends exactement ce qui a été fait, et pourquoi.</li>
              <li>✓ Des résultats mesurables : Search Console, Analytics, positions Google.</li>
            </ul>
            <p className="mt-4 text-center font-heading text-2xl font-bold text-gold">Transparence 100%</p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-neutral-50 px-6 py-16">
        <SectionHeading kicker="Un accompagnement continu" title="Pour une stratégie" accent="qui dure" />
        <div className="mx-auto grid max-w-[1000px] gap-6 md:grid-cols-3">
          {PLANS.map((p) => (
            <div key={p.num} className="rounded-md border border-gold bg-white p-7">
              <span className="font-heading text-3xl font-bold text-gold/30">{p.num}</span>
              <h3 className="mt-2 font-heading text-xl font-semibold text-black">{p.title}</h3>
              <p className="mt-1 text-xs text-[#888]">{p.tag}</p>
              <p className="mt-3 text-xs font-bold uppercase text-[#C97B63]">À partir de</p>
              <p className="font-heading text-2xl font-semibold text-black">{p.price}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-[#444]">
                {p.items.map((i) => <li key={i}>✓ {i}</li>)}
              </ul>
              <p className="mt-4 text-xs text-[#888]">✔ Engagement 12 mois renouvelable</p>
              <Link
                href="/contact-jwl-marketing-aix-en-provence"
                className="mt-4 block rounded-[5px] border-2 border-gold bg-gold px-6 py-3 text-center text-sm font-medium text-white hover:border-[#b8952f] hover:bg-[#b8952f]"
              >
                Je lance ma stratégie
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Test visibilité */}
      <section className="px-6 py-16">
        <GoogleVisibilityTest />
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">
        <SectionHeading
          kicker="Questions"
          title="FAQ :"
          accent="Je réponds à tes questions sur la création de site web."
        />
        <FaqAccordion items={SITE_INTERNET_FAQ} />
      </section>
    </div>
  );
}
