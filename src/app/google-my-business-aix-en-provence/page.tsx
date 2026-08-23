import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";
import GmbAuditQuiz from "@/components/GmbAuditQuiz";
import { GMB_FAQ } from "@/data/gmbFaq";

export const metadata: Metadata = {
  title: "Optimisation Fiche Google Business Profile | JWL MARKETING",
  description:
    "Ta fiche Google my business est à l'abandon ? Reprends le contrôle de ta visibilité locale. Avec moi et partout en France.",
};

const STATS = [
  { value: "+90%", label: "des consommateurs utilisent Google pour trouver une entreprise locale.", source: "BrightLocal et Think with Google" },
  { value: "+70%", label: "des recherches locales débouchent sur une visite dans la journée.", source: "Think with Google" },
  { value: "+75%", label: "des consommateurs refusent de contacter une entreprise notée moins de 4 étoiles.", source: "BrightLocal 2026" },
  { value: "+1000", label: "vues par mois générées par un profil Google Business Profile optimisé.", source: "étude Lesmakers GMB 2025" },
];

const SIGNALS = [
  { title: "1. La cohérence de vos informations", text: "Nom, adresse, téléphone, site web... Ces informations doivent être identiques partout sur Internet. La moindre incohérence peut réduire votre crédibilité aux yeux de Google." },
  { title: "2. L'ancienneté et la confiance", text: "Une fiche active depuis plusieurs années bénéficie souvent d'un avantage. Plus tôt vous optimisez votre présence locale, plus vous construisez votre autorité." },
  { title: "3. Votre écosystème digital", text: "Votre fiche Google n'agit jamais seule. Site internet, pages SEO, blog, avis clients et réseaux sociaux renforcent ensemble votre visibilité locale." },
  { title: "4. L'activité de votre fiche", text: "Avis récents, réponses aux commentaires, nouvelles photos et publications régulières montrent à Google que votre entreprise est active et digne de confiance." },
];

export default function GoogleMyBusiness() {
  return (
    <div>
      <div className="flex w-full flex-col items-center justify-between gap-10 bg-white px-[5%] py-[60px] md:flex-row">
        <div className="max-w-[600px] flex-1">
          <p className="text-sm italic text-[#555]">
            &quot;Ne laisse plus tes clients locaux partir chez tes
            concurrents.&quot;
          </p>
          <p className="mt-2 text-sm text-[#555]">
            Attire les clients qui cherchent près de chez vous.
          </p>
          <h1 className="mt-4 font-heading text-[38px] font-semibold leading-[1.25] text-black">
            Domine <span className="text-gold">Google</span> dans ta ville
            grâce à Google My Business Profile
          </h1>
          <div className="my-4 flex flex-wrap items-center gap-3">
            <Link
              href="/audit-seo-aix-en-provence"
              className="inline-block rounded-[5px] border-2 border-gold bg-gold px-8 py-[15px] font-medium text-white transition-colors hover:border-[#b8952f] hover:bg-[#b8952f]"
            >
              Demande un Audit de ta fiche GMB
            </Link>
            <Link
              href="/contact-jwl-marketing-aix-en-provence"
              className="inline-block rounded-[5px] border-2 border-black px-8 py-[15px] font-medium text-black transition-colors hover:bg-black hover:text-white"
            >
              Prend rendez-vous
            </Link>
          </div>
        </div>
        <Image
          src="/images/hero-gmb.webp"
          alt="Google Business Profile JWL Marketing"
          width={1200}
          height={800}
          priority
          className="h-auto w-full max-w-[500px] rounded-2xl object-cover"
        />
      </div>

      {/* Stats */}
      <section className="bg-black px-6 py-14">
        <div className="mx-auto grid max-w-[1000px] gap-6 sm:grid-cols-2 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center text-white">
              <p className="font-heading text-3xl font-bold text-gold">{s.value}</p>
              <p className="mt-2 text-xs leading-relaxed text-[#ccc]">{s.label}</p>
              <p className="mt-2 text-[10px] text-[#777]">Source : {s.source}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-[900px] px-6 py-16">
        <SectionHeading
          kicker="avant de te choisir, ils regardent ta fiche. est-elle à la hauteur ?"
          title="Google Business Profile, l'outil que"
          accent="tes clients utilisent sans le savoir"
        />
        <div className="grid items-center gap-10 md:grid-cols-[1fr_260px]">
          <div className="space-y-4 text-[15px] leading-[25.5px] text-[#1a1a1a]">
            <p>
              Quand un prospect recherche ton entreprise, la première chose
              qu&apos;il découvre est souvent ta fiche Google Business
              Profile (GMB). Avis clients, photos, horaires, coordonnées,
              services... en quelques secondes, il décide de vous contacter
              ou de poursuivre ses recherches.
            </p>
            <p>
              Pourtant, de nombreuses entreprises n&apos;exploitent pas
              pleinement cet outil gratuit alors qu&apos;il constitue un
              véritable levier de visibilité locale.
            </p>
            <p>
              Chez JWL Marketing, j&apos;optimise ta fiche Google pour
              renforcer ta crédibilité, améliorer ta présence locale et
              transformer davantage de recherches en contacts.
            </p>
          </div>
          <Image
            src="/images/fiche-gmb-jwl.webp"
            alt="Fiche Google Business Profile JWL Marketing"
            width={682}
            height={1024}
            className="mx-auto h-auto w-full max-w-[260px] rounded-2xl object-cover"
          />
        </div>
      </section>

      {/* Quiz interactif */}
      <section className="bg-neutral-50 px-6 py-16">
        <GmbAuditQuiz />
      </section>

      {/* Local pack */}
      <section className="mx-auto max-w-[800px] px-6 py-16">
        <SectionHeading
          kicker="Ton activité tourne. Tes clients suivent ?"
          title="Sans fiche GMB optimisée,"
          accent="tes concurrents prennent ta place"
        />
        <div className="space-y-5 text-[15px] leading-[25.5px] text-[#1a1a1a]">
          <p>
            Tape « ostéopathe Aix-en-Provence » sur Google. Tu vois les
            trois entreprises affichées en premier avec la carte ?
            C&apos;est ce qu&apos;on appelle le Local Pack.
          </p>
          <p>
            C&apos;est à cet endroit que se concentrent la majorité des
            clics, des appels et des demandes de rendez-vous. Pour y
            apparaître, Google privilégie les entreprises les plus
            pertinentes : fiche Google Business Profile complète, avis
            clients récents, photos de qualité, informations à jour et
            activité régulière.
          </p>
          <p>
            Résultat ? Tes concurrents apparaissent avant toi sur Google
            Maps et récupèrent les prospects qui recherchent pourtant tes
            services.
          </p>
        </div>
      </section>

      {/* Signaux */}
      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-[900px]">
          <SectionHeading
            kicker="Google ne t'envoie jamais de notification pour te prévenir que ta visibilité baisse."
            title="Ce que Google sanctionne en silence,"
            accent="les signaux de ta fiche qu'il surveille"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {SIGNALS.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#2a2a2a] bg-[#141414] p-6">
                <h3 className="font-heading text-lg font-semibold text-gold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#bbb]">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-[800px] px-6 py-16 text-center">
        <SectionHeading
          kicker="ta fiche Google Business Profile mérite mieux que l'abandon."
          title="Et maintenant,"
          accent="prends le contrôle de ta visibilité locale"
        />
        <p className="text-[15px] leading-[25.5px] text-[#1a1a1a]">
          Chez JWL Marketing, j&apos;analyse votre fiche Google Business
          Profile, votre site internet et votre référencement local.
          J&apos;optimise votre fiche, je crée des contenus SEO, des pages
          locales et j&apos;assure un suivi régulier des performances.
        </p>
        <Link
          href="/contact-jwl-marketing-aix-en-provence"
          className="mt-8 inline-block rounded-[5px] border-2 border-gold bg-gold px-10 py-[15px] font-medium text-white transition-colors hover:border-[#b8952f] hover:bg-[#b8952f]"
        >
          Ne laisse pas ta visibilité au hasard
        </Link>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">
        <SectionHeading
          kicker="Questions"
          title="FAQ :"
          accent="Foire Aux Questions"
          subtext="Retrouve les réponses aux questions les plus fréquentes"
        />
        <FaqAccordion items={GMB_FAQ} />
      </section>
    </div>
  );
}
