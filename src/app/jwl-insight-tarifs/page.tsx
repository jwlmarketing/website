import { buildMetadata } from "@/lib/seo";
import SiteHeader from "@/components/SiteHeader";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = buildMetadata({
  path: "/jwl-insight-tarifs",
  locale: "fr",
  title: "Tarifs JWL Insight Pro | JWL Marketing",
  description: "JWL Insight est gratuit et illimité pour l'analyse on-page. La formule Pro (29€ HT/mois ou 228€ HT/an) débloque l'audit de site complet, Search Console et le connecteur MCP.",
});

const FREE_FEATURES = [
  "Analyses SEO on-page illimitées",
  "Score /100 complet, en local",
  "3 rapports PDF de page offerts",
  "2 audits de site complet offerts",
  "3 premiers mots-clés à ajouter",
];

const PRO_FEATURES = [
  "Analyses SEO illimitées",
  "Analyse concurrentielle illimitée, 1 contre 1",
  "Score sémantique complet + prompts de réécriture",
  "Les 16 signaux GEO en détail",
  "Audit full-site PDF illimité",
  "Search Console TURBO (positions, clics, quick wins)",
  "Connecteur MCP (Claude, Cursor, Claude Code)",
];

export default function Page() {
  return (
    <div>
      <SiteHeader locale="fr" href="/jwl-insight-tarifs" />

      <section className="px-[5%] py-20 text-center">
        <ScrollReveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#c9846f]">
            JWL Insight
          </p>
          <h1 className="mx-auto max-w-3xl font-heading text-4xl leading-tight text-[#141414] sm:text-5xl">
            Un tarif simple, un essai pour se décider
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-neutral-600">
            Tout ce qui est coché à gauche reste gratuit pour toujours. Passe à Pro directement
            depuis le popup de l&apos;extension quand tu es prêt.
          </p>
        </ScrollReveal>
      </section>

      <section className="px-[5%] pb-24">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 lg:grid-cols-2">
          <ScrollReveal>
            <div className="h-full rounded-2xl border border-neutral-200 p-8">
              <p className="font-heading text-xl text-[#141414]">Gratuit</p>
              <p className="mt-2 text-3xl font-bold text-[#141414]">0 €</p>
              <p className="mt-1 text-sm text-neutral-500">Pour toujours, sans carte bancaire</p>
              <ul className="mt-6 space-y-3">
                {FREE_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[14px] text-neutral-700">
                    <span className="mt-0.5 text-green-600">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="h-full rounded-2xl bg-[#141414] p-8 text-white">
              <p className="font-heading text-xl text-gold">JWL Insight Pro</p>
              <p className="mt-2 text-3xl font-bold">
                29 € <span className="text-base font-normal text-white/70">HT/mois</span>
              </p>
              <p className="mt-1 text-sm text-white/60">
                ou 228 € HT/an (19 € HT/mois, 4 mois offerts) — essai 7 jours
              </p>
              <ul className="mt-6 space-y-3">
                {PRO_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[14px] text-white/90">
                    <span className="mt-0.5 text-gold">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-white/50">
                Prix hors taxes · avec un numéro de TVA, tu paies ce prix exact.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <p className="mx-auto mt-10 max-w-xl text-center text-sm text-neutral-500">
            L&apos;abonnement se prend directement dans l&apos;extension : ouvre le popup JWL Insight,
            onglet « JWL Insight Pro », et choisis ta formule. Résiliable en un clic à tout moment.
          </p>
        </ScrollReveal>
      </section>
    </div>
  );
}
