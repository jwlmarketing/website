import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Programme d'affiliation JWL Insight | JWL Marketing",
  description:
    "Recommande JWL Insight et touche 25% de chaque paiement pendant 24 mois. Ton filleul profite d'un essai de 14 jours au lieu de 7.",
};

export default function Page() {
  return (
    <div>
      <SiteHeader locale="fr" href="/jwl-insight-affiliation" />

      <section className="px-[5%] py-20 text-center">
        <ScrollReveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#c9846f]">
            Programme d&apos;affiliation
          </p>
          <h1 className="mx-auto max-w-3xl font-heading text-4xl leading-tight text-[#141414] sm:text-5xl">
            Tu recommandes JWL Insight ? Tu gagnes 25 %.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-neutral-600">
            25 % de chaque paiement pendant 24 mois pour chaque personne que tu amènes.
            Elle profite d&apos;un essai de 14 jours au lieu de 7.
          </p>
        </ScrollReveal>
      </section>

      <section className="px-[5%] pb-16">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          <ScrollReveal>
            <div className="h-full rounded-2xl bg-[#141414] p-6 text-center text-white">
              <p className="text-3xl font-bold text-gold">25 %</p>
              <p className="mt-2 text-sm text-white/85">de commission sur chaque paiement, pendant 24 mois</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={60}>
            <div className="h-full rounded-2xl bg-[#141414] p-6 text-center text-white">
              <p className="text-3xl font-bold text-gold">14 jours</p>
              <p className="mt-2 text-sm text-white/85">d&apos;essai offerts à la personne que tu recommandes (au lieu de 7)</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <div className="h-full rounded-2xl bg-[#141414] p-6 text-center text-white">
              <p className="text-3xl font-bold text-gold">Sans limite</p>
              <p className="mt-2 text-sm text-white/85">de filleuls, ni de plafond de gains</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-neutral-50 px-[5%] py-16">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl text-[#141414]">Comment ça marche</h2>
            <p className="mt-4 text-neutral-600">
              Le programme est encore géré manuellement le temps de finir la partie automatique
              (lien de suivi et versement). Écris-nous ton nom et le site que tu représentes,
              on t&apos;envoie ton lien d&apos;affilié et ton code sous 24h.
            </p>
            <a
              href="mailto:contact@jwl-marketing.fr?subject=Programme%20d%27affiliation%20JWL%20Insight"
              className="mt-6 inline-block rounded-full bg-[#c9846f] px-8 py-3 font-medium text-white transition-colors hover:bg-[#b8735f]"
            >
              Devenir affilié
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
