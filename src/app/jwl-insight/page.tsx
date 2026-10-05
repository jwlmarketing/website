import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = buildMetadata({
  path: "/jwl-insight",
  locale: "fr",
  title: "JWL Insight — Extension Chrome d'audit SEO gratuit | JWL Marketing",
  description: "JWL Insight audite n'importe quelle page en un clic : score /100, on-page, signaux GEO/E-E-A-T, mots-clés, maillage interne. Extension Chrome gratuite par JWL Marketing.",
});

const STEPS = [
  {
    n: 1,
    title: "Installe l'extension",
    text: "Ajoute JWL Insight à Chrome depuis le Chrome Web Store. Aucune inscription, aucune carte bancaire.",
  },
  {
    n: 2,
    title: "Clique sur «Audit»",
    text: "Sur n'importe quelle page — la tienne ou celle d'un concurrent — clique le bouton Audit dans la barre d'outils Chrome.",
  },
  {
    n: 3,
    title: "Lis ton score",
    text: "Score /100, mots-clés à ajouter, maillage interne, signaux GEO pour les IA : tout s'affiche directement dans le popup, en local, sans envoyer ta page nulle part.",
  },
  {
    n: 4,
    title: "Corrige avec ton IA",
    text: "Copie les prompts fournis dans ChatGPT, Claude ou Gemini pour réécrire ton intro et ta conclusion — ou branche le connecteur MCP pour que ton IA corrige directement.",
  },
];

const FEATURES = [
  { title: "Score /100", text: "Indexabilité, canonical, HTTPS, mobile, title, meta, Open Graph, volume de contenu, maillage, liens cassés, H1/Hn, images sans alt, données structurées." },
  { title: "Signaux GEO / E-E-A-T", text: "16 signaux qui déterminent si les IA (ChatGPT, Perplexity, Gemini) citent ta page : auteur, dates, citations, JSON-LD, FAQ, fraîcheur..." },
  { title: "Mots-clés du top 10", text: "Les mots que Google récompense sur ta requête, mesurés en direct sur les 10 premiers résultats — pas des suggestions génériques." },
  { title: "Maillage interne", text: "Les pages orphelines, celles à mailler en priorité, et celles qui ont le plus de poids SEO à redistribuer." },
  { title: "Connecteur MCP", text: "Branche Claude, Cursor ou Claude Code sur JWL Insight : ton IA audite et corrige tes pages 10x plus vite, avec tes vraies données." },
  { title: "100% local", text: "L'analyse tourne dans ton navigateur. Aucune page envoyée à un serveur, aucun compte requis pour la version gratuite." },
];

export default function Page() {
  return (
    <div>
      <SiteHeader locale="fr" href="/jwl-insight" />

      <section className="px-[5%] py-20 text-center">
        <ScrollReveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#c9846f]">
            Extension Chrome gratuite
          </p>
          <h1 className="mx-auto max-w-3xl font-heading text-4xl leading-tight text-[#141414] sm:text-5xl">
            Audite n&apos;importe quelle page en un clic
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-neutral-600">
            Score SEO, signaux GEO pour les IA, mots-clés du moment, maillage interne :
            JWL Insight te dit exactement quoi corriger, directement dans Chrome.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://chromewebstore.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#c9846f] px-8 py-3 font-medium text-white transition-colors hover:bg-[#b8735f]"
            >
              Installer l&apos;extension — gratuit
            </a>
            <Link
              href="/jwl-insight-tarifs"
              className="inline-block rounded-full border border-neutral-300 px-8 py-3 font-medium text-[#141414] transition-colors hover:border-[#c9846f] hover:text-[#c9846f]"
            >
              Voir les tarifs Pro
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <section id="comment-ca-marche" className="bg-neutral-50 px-[5%] py-20">
        <ScrollReveal>
          <h2 className="mb-12 text-center font-heading text-3xl text-[#141414]">
            Comment utiliser JWL Insight
          </h2>
        </ScrollReveal>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <ScrollReveal key={s.n} delay={s.n * 60}>
              <div className="relative h-full rounded-2xl bg-[#141414] p-6 pt-8 text-center text-white">
                <span className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-gold text-lg font-bold text-white shadow-md">
                  {s.n}
                </span>
                <p className="mt-2 font-heading text-lg text-[#c9846f]">{s.title}</p>
                <p className="mt-2 text-[13.5px] leading-[20px] text-white/85">{s.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="px-[5%] py-20">
        <ScrollReveal>
          <h2 className="mb-12 text-center font-heading text-3xl text-[#141414]">
            Ce que JWL Insight analyse
          </h2>
        </ScrollReveal>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <ScrollReveal key={f.title}>
              <div className="h-full rounded-2xl border border-neutral-200 p-6">
                <p className="font-heading text-lg text-[#141414]">{f.title}</p>
                <p className="mt-2 text-[14px] leading-[21px] text-neutral-600">{f.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="mcp" className="bg-neutral-50 px-[5%] py-20">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl text-[#141414]">Connecteur MCP</h2>
            <p className="mt-4 text-neutral-600">
              JWL Insight Pro inclut un connecteur MCP : branche-le sur Claude Code, Claude Desktop
              ou Cursor et demande simplement « Audite https://mon-site.fr/ma-page avec JWL Insight ».
              Ton IA lance l&apos;audit et te donne le plan d&apos;action, sans quitter ta conversation.
            </p>
            <p className="mt-4 text-sm text-neutral-500">
              La commande d&apos;installation exacte se trouve dans l&apos;onglet « JWL Insight Pro »
              de l&apos;extension, une fois ta clé de licence activée.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <section id="aide" className="px-[5%] py-20">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl text-[#141414]">Besoin d&apos;aide ?</h2>
            <p className="mt-4 text-neutral-600">
              Une question sur l&apos;extension, la licence Pro ou un score qui te semble étrange ?
              Écris-nous, on répond directement.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:contact@jwl-marketing.fr"
                className="inline-block rounded-full bg-[#c9846f] px-8 py-3 font-medium text-white transition-colors hover:bg-[#b8735f]"
              >
                contact@jwl-marketing.fr
              </a>
              <Link
                href="/contact"
                className="inline-block rounded-full border border-neutral-300 px-8 py-3 font-medium text-[#141414] transition-colors hover:border-[#c9846f] hover:text-[#c9846f]"
              >
                Formulaire de contact
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
