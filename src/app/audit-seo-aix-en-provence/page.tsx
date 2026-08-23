import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";
import { AUDIT_SEO_FAQ } from "@/data/auditSeoFaq";

export const metadata: Metadata = {
  title: "Audit SEO & Stratégie : Réveille ton site web | JWL MARKETING",
  description:
    "Ton site fait du surplace ? Découvre ce qui bloque ton trafic et tes ventes grâce à un audit SEO stratégique. À distance ou en région PACA.",
};

const STEPS = [
  {
    title: "comprendre ton marché",
    text: "j'analyse ton secteur, tes concurrents et les opportunités à activer. tu pars de ta réalité, pas d'une théorie.",
    result: "→ bons leviers identifiés",
  },
  {
    title: "identifier ce qui bloque",
    text: "j'audite ton site, ton contenu et ton positionnement. objectif : comprendre pourquoi tes clients ne passent pas à l'action.",
    result: "→ visibilité débloquée",
  },
  {
    title: "construire ce qui génère",
    text: "tu repars avec un plan d'action clair, priorisé et adapté à tes objectifs.",
    result: "→ stratégie activable",
  },
];

export default function AuditSeo() {
  return (
    <div>
      <div className="flex w-full flex-col items-center justify-between gap-10 bg-white px-[5%] py-[60px] md:flex-row">
        <div className="max-w-[600px] flex-1">
          <p className="text-sm italic text-[#555]">
            &quot;Ton site dort. L&apos;audit SEO, c&apos;est ce qui le
            réveille.&quot;
          </p>
          <p className="mt-2 text-sm text-[#555]">
            Identifie ce qui bloque grâce à un audit de référencement
            naturel.
          </p>
          <h1 className="mt-4 font-heading text-[42px] font-semibold leading-[1.25] text-black">
            Audit SEO : Transforme ton site en{" "}
            <span className="text-gold">machine à clients</span>
          </h1>
          <div className="my-4 flex items-center gap-2">
            <div className="h-0.5 w-[46px] bg-gold" />
            <span className="text-base text-gold">✦</span>
          </div>
          <Link
            href="/contact-jwl-marketing-aix-en-provence"
            className="inline-block rounded-[5px] border-2 border-gold bg-gold px-10 py-[15px] font-medium text-white transition-colors hover:border-[#b8952f] hover:bg-[#b8952f]"
          >
            AUDIT GRATUIT
          </Link>
        </div>
        <Image
          src="/images/hero-audit-seo.webp"
          alt="Audit SEO JWL Marketing Aix-en-Provence"
          width={1200}
          height={800}
          priority
          className="h-auto w-full max-w-[500px] rounded-2xl object-cover"
        />
      </div>

      {/* Lancement activité */}
      <section className="mx-auto max-w-[900px] px-6 py-16">
        <SectionHeading
          kicker="Parce que démarrer sans visibilité, c'est avancer les yeux fermés."
          title="Ton audit SEO dès le lancement"
          accent="de ton activité"
        />
        <div className="space-y-5 text-[15px] leading-[25.5px] text-[#1a1a1a]">
          <p>
            Ne crée pas ton site internet au hasard. Avant de te lancer, il
            faut comprendre ce que recherchent réellement tes futurs clients
            et comment ils te trouveront sur Google.
          </p>
          <p>
            Un audit SEO permet de définir une stratégie claire, un
            positionnement efficace et les bons mots-clés. Aujourd&apos;hui,
            être visible ne suffit plus : il faut donner envie de te choisir.
          </p>
          <p>
            Chez JWL Marketing, je conçois des sites internet pensés pour
            attirer des clients, générer des demandes et accompagner
            durablement le développement de ton entreprise.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-gold bg-white p-6">
              <h3 className="font-heading text-lg font-semibold capitalize text-black">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-[#555]">{s.text}</p>
              <p className="mt-3 text-sm font-semibold text-gold">{s.result}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm italic text-[#555]">
          Ton SEO ne remplace pas ton positionnement. Il amplifie ce que ton
          entreprise communique déjà.
        </p>
      </section>

      {/* Révélation */}
      <section className="bg-neutral-50 px-6 py-16">
        <div className="mx-auto grid max-w-[1000px] items-center gap-10 md:grid-cols-[260px_1fr]">
          <Image
            src="/images/audit-seo-geo.webp"
            alt="Audit SEO GEO Aix-en-Provence"
            width={724}
            height={1024}
            className="mx-auto h-auto w-full max-w-[260px] rounded-2xl object-cover"
          />
          <div>
            <h2 className="font-heading text-2xl font-semibold text-black">
              Votre audit SEO révèle pourquoi votre site n&apos;obtient pas
              les résultats attendus.
            </h2>
            <div className="mt-4 space-y-4 text-[15px] leading-[25.5px] text-[#1a1a1a]">
              <p>
                Le problème ne vient pas toujours du référencement. En
                quelques secondes, un visiteur décide s&apos;il reste... ou
                s&apos;il repart.
              </p>
              <p>
                Un message peu clair, une offre mal mise en avant ou un
                positionnement trop proche de vos concurrents peuvent
                freiner vos conversions.
              </p>
              <p>
                <strong className="text-gold">
                  Le référencement attire des visiteurs. Le positionnement
                  les transforme en clients.
                </strong>
              </p>
              <p>
                Mon objectif est de vous aider à construire une stratégie
                durable pour améliorer votre visibilité et augmenter vos
                demandes de contact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO génère des leads */}
      <section className="mx-auto max-w-[800px] px-6 py-16">
        <SectionHeading
          kicker="Site internet, Google, réseaux… tout est lié, mais rarement optimisé ensemble."
          title="Ton SEO"
          accent="génère des leads."
        />
        <div className="space-y-5 text-[15px] leading-[25.5px] text-[#1a1a1a]">
          <p>
            Arrête de séparer ton site internet, ta fiche Google Business
            Profile et tes réseaux sociaux. Pour gagner en visibilité sur
            Google, tout doit fonctionner ensemble.
          </p>
          <p>
            Analyse les mots-clés recherchés par tes prospects, optimise ton
            référencement local et crée du contenu utile. Plus ta stratégie
            est cohérente, plus tu augmentes tes chances d&apos;apparaître
            dans les résultats de recherche.
          </p>
          <p>
            Enfin, transforme ton site internet en véritable commercial :
            une offre claire, des appels à l&apos;action efficaces et des
            preuves de confiance peuvent faire toute la différence entre un
            simple visiteur et un futur client.
          </p>
        </div>
      </section>

      {/* Vision claire */}
      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-[800px]">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-gold">
            L&apos;audit SEO te permet d&apos;identifier la stratégie.
          </p>
          <h2 className="mt-2 text-center font-heading text-2xl font-semibold">
            Une technique qui t&apos;aide à comprendre{" "}
            <span className="text-gold">ton business.</span>
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-[25.5px] text-[#ddd]">
            <p>
              Un audit SEO te donne une vision claire de ta visibilité sur
              Google. Il révèle comment tes prospects te trouvent, les
              mots-clés qu&apos;ils recherchent et les freins qui limitent
              aujourd&apos;hui ton référencement.
            </p>
            <p>
              Grâce à ton audit SEO, tu analyses ton positionnement, tes
              concurrents et les opportunités de référencement naturel à
              exploiter.
            </p>
            <p>
              L&apos;objectif est simple : prendre des décisions basées sur
              des données, améliorer ton référencement local, renforcer ta
              visibilité sur Google et attirer davantage de prospects
              qualifiés grâce à une stratégie digitale cohérente.
            </p>
          </div>
        </div>
      </section>

      {/* Chaque entreprise */}
      <section className="mx-auto max-w-[800px] px-6 py-16">
        <SectionHeading
          kicker="Tous les sites ne jouent pas dans la même cour… et c'est normal."
          title="Les clés de ton SEO :"
          accent="PME, PMI et indépendants"
        />
        <div className="space-y-5 text-[15px] leading-[25.5px] text-[#1a1a1a]">
          <p>
            Chaque entreprise est différente. Votre stratégie SEO doit
            l&apos;être aussi. Une TPE, un artisan ou un indépendant
            n&apos;ont pas les mêmes objectifs qu&apos;une grande entreprise.
          </p>
          <p>
            L&apos;essentiel est de bâtir une stratégie adaptée à votre
            activité, votre marché et votre budget. Identifiez les
            mots-clés recherchés par vos prospects, optimisez vos pages et
            créez des contenus utiles pour améliorer votre visibilité sur
            Google.
          </p>
          <p>
            <strong>
              Le but n&apos;est pas d&apos;attirer plus de visiteurs, mais
              d&apos;attirer les bons visiteurs.
            </strong>
          </p>
          <p>
            Enfin, analysez vos résultats. Positionnement, trafic,
            conversions… les données permettent d&apos;ajuster votre
            stratégie et de transformer progressivement votre site internet
            en un véritable levier de développement.
          </p>
        </div>
      </section>

      {/* SEO vs Google Ads */}
      <section className="bg-neutral-50 px-6 py-16">
        <div className="mx-auto max-w-[800px]">
          <SectionHeading
            kicker="L'un construit votre visibilité sur le long terme. L'autre vous apporte des résultats immédiats."
            title="Référencement naturel et"
            accent="Google Ads"
          />
          <div className="space-y-5 text-[15px] leading-[25.5px] text-[#1a1a1a]">
            <p>
              Le SEO et Google Ads sont complémentaires. Le SEO construit
              votre visibilité sur le long terme en optimisant votre site,
              vos contenus et vos mots-clés. Google Ads, lui, permet
              d&apos;obtenir des résultats rapidement.
            </p>
            <p>
              Sans une stratégie SEO solide, vos campagnes publicitaires
              risquent d&apos;attirer les mauvaises personnes et de
              gaspiller votre budget. Un audit SEO permet de poser les bonnes
              bases.
            </p>
            <p className="font-semibold text-gold">
              Le SEO construit, Google Ads propulse.
            </p>
            <p>
              Ensemble, ils attirent des prospects qualifiés et maximisent
              votre retour sur investissement.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">
        <SectionHeading
          kicker="Questions"
          title="FAQ :"
          accent="Foire Aux Questions"
          subtext="Retrouve les réponses aux questions les plus fréquentes"
        />
        <FaqAccordion items={AUDIT_SEO_FAQ} />
      </section>
    </div>
  );
}
