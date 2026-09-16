import Image from "next/image";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import SiteHeader from "@/components/SiteHeader";
import TrustedPartners from "@/components/TrustedPartners";
import ProofCards from "@/components/ProofCards";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Création de site web | JWL Marketing",
  description:
    "Découvre la puissance d'un site web conçu par une experte commerciale. Structure saine, rédaction SEO-GEO et cité par l'IA. France entière.",
};

const STEP_ICONS = {
  binoculars: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="7" cy="15" r="4" />
      <circle cx="17" cy="15" r="4" />
      <path d="M9.5 12 8 6h2l2 5M14.5 12 16 6h-2l-2 5" />
    </svg>
  ),
  pencil: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 20h4L19 9l-4-4L4 16v4Z" />
      <path d="M14 6l4 4" />
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  plane: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 3 3 10.5l7 2.5 2.5 7L21 3Z" />
      <path d="M12.5 13.5 21 3" />
    </svg>
  ),
  key: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8" cy="15" r="4" />
      <path d="M11 12l9-9M17 6l2 2M14 9l2 2" />
    </svg>
  ),
};

function StepCard({
  n,
  icon,
  title,
  text,
}: {
  n: number;
  icon: keyof typeof STEP_ICONS;
  title: string;
  text: string;
}) {
  return (
    <div className="relative w-full max-w-[340px] rounded-2xl bg-[#141414] p-6 pt-8 text-center text-white">
      <span className="absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-gold text-xl font-bold text-white shadow-md">
        {n}
      </span>
      <div className="mx-auto mt-2 h-8 w-8 text-[#c9846f]">{STEP_ICONS[icon]}</div>
      <p className="mt-2 font-heading text-lg text-[#c9846f]">{title}</p>
      <p className="mt-2 text-[13.5px] leading-[20px] text-white/85">{text}</p>
    </div>
  );
}

export default function Page() {
  return (
    <div>
      <SiteHeader locale="fr" href="/en/site-internet-aix-en-provence" />

      {/* Hero */}
      <div className="flex w-full flex-col items-center justify-between gap-10 bg-white px-[5%] py-[60px] lg:flex-row">
        <div className="max-w-[680px] flex-1">
          <h1 className="font-heading text-4xl font-bold leading-[1.1] lg:text-[54px] lg:leading-[1.1] text-black">
            <span className="text-[#c9846f]">JWL Business</span>
            <span className="font-medium"> : Un site web</span>
            <br />
            <span className="font-medium">conçu pour ton entreprise</span>
            <br />
            <span className="font-medium">et inspirer confiance.</span>
          </h1>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[15px] font-medium text-black">
            {["1 personne dédiée", "100 % sur mesure", "100 % propriétaire de ton site web"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold text-xs text-white">
                    ✓
                  </span>
                  {item}
                </li>
              )
            )}
          </ul>
          <p className="mt-6 text-base leading-[1.6] text-black">
            Création ou refonte : je m&apos;occupe de tout. Résultat, tu
            obtiens un site sur-mesure pensé pour ton image, tes clients, et
            qui développe l&apos;achat.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="rounded-full bg-gold px-6 py-[15px] font-semibold text-white">
              À partir de 1 200 €
            </span>
            <a
              href="https://calendly.com/jwlm"
              target="_blank"
              rel="noopener"
              className="inline-block rounded-full bg-[#c9846f] px-8 py-[15px] font-semibold text-white transition-colors hover:bg-[#b8735f]"
            >
              Créer mon site
            </a>
          </div>
        </div>
        <Image
          src="/images/creation-site-web.webp"
          alt="Jodie Lapaillerie — Création de site web JWL Marketing"
          width={712}
          height={582}
          priority
          className="h-auto w-full max-w-[500px] object-contain"
        />
      </div>

      {/* Mon réseau de confiance */}
      <TrustedPartners />

      {/* Un site web professionnel, conçu pour évoluer avec ton entreprise */}
      <section className="mx-auto max-w-[1400px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl font-bold leading-[1.15] md:text-[46px] md:leading-[1.15] text-black">
          Un site web professionnel, conçu pour
          <br />
          <span className="text-[#c9846f]">évoluer</span>{" "}
          <span className="font-medium">avec ton entreprise.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-[720px] text-[17px] leading-[26px] text-[#1a1a1a]">
          Une base solide, rapide et optimisée selon les bonnes pratiques du
          web. Ton site t&apos;appartient à 100 % et peut évoluer à tout
          moment vers une stratégie SEO, e-commerce ou marketing plus
          avancée.
        </p>
        <div className="mt-10">
          <ProofCards />
        </div>
      </section>

      {/* JWL Business est fait / pas fait pour toi */}
      <section className="mx-auto max-w-[1400px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl font-bold leading-[1.15] md:text-[46px] md:leading-[1.15] text-black">
          <span className="font-medium">JWL Business</span>
          <br />
          <span className="text-[#c9846f]">est fait pour toi</span>
          <span className="font-medium"> si tu veux :</span>
        </h2>
        <ScrollReveal>
          <div className="mx-auto mt-8 max-w-[820px] rounded-2xl bg-[#141414] p-8 text-left text-white">
            <ul className="space-y-2 text-[15px] leading-[24px]">
              {[
                "Un site web à moins de 2000 €",
                "Aucune dépendance à une plateforme fermée",
                "Être propriétaire à 100 % de ton site",
                "Pouvoir le faire évoluer",
                "Pouvoir investir demain sur ta visibilité",
                "Un site rapide, responsive et optimisé selon les bonnes pratiques du web",
                "Aucun engagement, uniquement de la maintenance",
                "Garder la main sur chaque détail plutôt que de déléguer",
                "Obtenir un site qui inspire confiance à tous tes clients",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-green-500">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://calendly.com/jwlm"
              target="_blank"
              rel="noopener"
              className="mt-6 inline-block rounded-full bg-[#c9846f] px-8 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
            >
              Je réserve mon appel
            </a>
          </div>
        </ScrollReveal>

        <h2 className="mt-16 font-heading text-3xl font-bold leading-[1.15] md:text-[46px] md:leading-[1.15] text-black">
          Cette offre
          <br />
          n&apos;est <span className="text-[#c9846f]">pas faite pour toi</span> si
          tu aimerais :
        </h2>
        <ScrollReveal>
          <div className="mx-auto mt-8 max-w-[820px] rounded-2xl bg-black p-8 text-left text-white">
            <ul className="space-y-2 text-[15px] leading-[24px]">
              {[
                "Un outil qui t'apporte de nouveaux clients",
                "Investir sur 12 mois pour construire un vrai levier d'acquisition, pas juste un site vitrine",
                "Déléguer entièrement, sans passer ton temps à coordonner plusieurs prestataires",
                "Orchestrer par ta réactivité ton site, tu valides vite, tu ne laisses pas traîner un projet pendant des mois",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-red-500">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="/tarifs"
              className="mt-6 inline-block rounded-full bg-[#c9846f] px-8 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
            >
              Je crée mon site visible
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* Les 5 étapes de ton site web */}
      <section className="mx-auto max-w-[1100px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl font-bold leading-[1.15] md:text-[46px] md:leading-[1.15] text-black">
          Les 5 <span className="text-[#c9846f]">étapes</span>
          <br />
          de ton site web
        </h2>
        <div className="relative mt-10">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-black/20 md:block" />
          <div className="grid gap-8 md:grid-cols-2 md:gap-x-16 md:gap-y-10">
            {/* Row 1: card 1 | image 1 */}
            <ScrollReveal delay={0} className="flex justify-center md:justify-end">
              <StepCard
                n={1}
                icon="binoculars"
                title="Découverte de ton projet"
                text="Nous échangeons ensemble par téléphone ou visioconférence."
              />
            </ScrollReveal>
            <ScrollReveal delay={100} className="flex justify-center md:justify-start">
              <Image
                src="/images/jwl-etapes-1.png"
                alt="JWL Marketing"
                width={220}
                height={220}
                className="h-auto w-[180px] -rotate-6 object-contain"
              />
            </ScrollReveal>

            {/* Row 2: image 2 | card 2 */}
            <ScrollReveal delay={150} className="flex justify-center md:justify-end">
              <Image
                src="/images/jwl-etapes-2.png"
                alt="JWL Marketing"
                width={220}
                height={220}
                className="h-auto w-[180px] rotate-6 object-contain"
              />
            </ScrollReveal>
            <ScrollReveal delay={200} className="flex justify-center md:justify-start">
              <StepCard
                n={2}
                icon="pencil"
                title="Conception de la maquette du site"
                text="Je conçois une maquette basée sur les bonnes pratiques de vente et d'expérience utilisateur."
              />
            </ScrollReveal>

            {/* Row 3: card 3 | image 3 */}
            <ScrollReveal delay={250} className="flex justify-center md:justify-end">
              <StepCard
                n={3}
                icon="eye"
                title="Intégration de tes contenus et de tes visuels"
                text="Tu m'envoies les éléments nécessaires à la création de ton site (photos, textes, logo, etc.)."
              />
            </ScrollReveal>
            <ScrollReveal delay={300} className="flex justify-center md:justify-start">
              <Image
                src="/images/jwl-etapes-3.png"
                alt="JWL Marketing"
                width={220}
                height={220}
                className="h-auto w-[180px] rotate-6 object-contain"
              />
            </ScrollReveal>

            {/* Row 4: image 4 | card 4 */}
            <ScrollReveal delay={350} className="flex justify-center md:justify-end">
              <Image
                src="/images/jwl-etapes-4.png"
                alt="JWL Marketing"
                width={220}
                height={220}
                className="h-auto w-[180px] -rotate-6 object-contain"
              />
            </ScrollReveal>
            <ScrollReveal delay={400} className="flex justify-center md:justify-start">
              <StepCard
                n={4}
                icon="plane"
                title="Mise en ligne de ton site"
                text="Je configure l'hébergement et la mise en ligne."
              />
            </ScrollReveal>
          </div>
        </div>

        {/* Step 5: centrée, pleine largeur */}
        <ScrollReveal delay={450} className="mt-10 flex flex-col items-center">
          <StepCard
            n={5}
            icon="key"
            title="Remise des accès et autonomie"
            text="Je te transmets tous tes accès, tu es libre et autonome."
          />
          <Image
            src="/images/jwl-etapes-5-parachute.png"
            alt="JWL Marketing"
            width={280}
            height={280}
            className="mt-6 h-auto w-[220px] object-contain"
          />
        </ScrollReveal>
      </section>

      {/* Tous les mois je veille à la maintenance */}
      <section className="mx-auto max-w-[1300px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl font-bold leading-[1.15] md:text-[46px] md:leading-[1.15] text-black">
          <span className="font-medium">Tous les mois je veille</span>
          <br />
          <span className="font-medium">à la </span>
          <span className="text-[#c9846f]">maintenance</span>
          <span className="font-medium"> de ton site web</span>
        </h2>
        <div className="mx-auto mt-10 grid max-w-[1050px] gap-6 md:grid-cols-2 md:items-center">
          <div className="space-y-4 text-left">
            {[
              {
                title: "Maintenance",
                text: "Vérification du bon fonctionnement du site.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14.7 6.3a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0L10 5l3 3 1.7-1.7Z" />
                    <path d="M9 6 2.5 12.5a2.1 2.1 0 0 0 0 3l0 0a2.1 2.1 0 0 0 3 0L12 9" />
                    <circle cx="18.5" cy="18.5" r="3.5" />
                    <path d="M18.5 15.5v1M18.5 20v1M21.5 18.5h-1M16 18.5h-1M20.6 16.4l-.7.7M17.1 19.9l-.7.7M20.6 20.6l-.7-.7M17.1 17.1l-.7-.7" />
                  </svg>
                ),
              },
              {
                title: "Sauvegarde",
                text: "Sauvegardes régulières de ton site.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6.5 18a4 4 0 0 1-.8-7.9 5.5 5.5 0 0 1 10.7-2A4.5 4.5 0 0 1 17.5 18h-11Z" />
                    <path d="M9.5 12.5 12 10l2.5 2.5M12 10v8" />
                  </svg>
                ),
              },
              {
                title: "Sécurité",
                text: "Surveillance et sécurisation de ton site.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
                    <path d="M9 12.2l2 2 4-4.2" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 120}>
                <div className="flex items-center gap-5 rounded-2xl bg-[#141414] p-6 text-white">
                  <div className="h-10 w-10 flex-shrink-0 text-[#c9846f]">{item.icon}</div>
                  <div>
                    <p className="font-heading text-xl text-[#c9846f]">{item.title}</p>
                    <p className="mt-1 text-sm leading-[21px] text-white/80">{item.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={360}>
            <Image
              src="/images/developpement-site-web.png"
              alt="Suivi et maintenance mensuelle — JWL Marketing"
              width={462}
              height={346}
              className="mx-auto h-auto w-full max-w-[400px] rounded-2xl object-cover"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* 100% propriétaire */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl font-bold leading-[1.15] md:text-[46px] md:leading-[1.15] text-black">
          <span className="text-[#c9846f]">100 % propriétaire de ton site</span>,
          <br />
          <span className="font-medium">
            tu es libre de continuer ou non avec
            <br />
            JWL Marketing
          </span>
        </h2>
        <div className="mx-auto mt-10 grid max-w-[1000px] gap-8 text-left md:grid-cols-2">
          <ScrollReveal>
            <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl bg-[#faf3ea] p-8 text-center">
              <p className="text-[15px] leading-[22px] text-black">
                Une question avant de réserver ? Écris-moi sur WhatsApp, le
                message est déjà préparé pour aller droit au but.
              </p>
              <a
                href="https://wa.me/33783792814?text=Bonjour%20Jodie%2C%20j%27ai%20une%20question%20avant%20de%20r%C3%A9server%20un%20appel%20pour%20la%20cr%C3%A9ation%20de%20mon%20site%20web%C2%A0%3A"
                target="_blank"
                rel="noopener"
                className="inline-block rounded-full bg-[#25D366] px-8 py-[15px] font-semibold text-white transition-colors hover:bg-[#1ebe57]"
              >
                Poser ma question sur WhatsApp
              </a>
              <a
                href="https://calendly.com/jwlm"
                target="_blank"
                rel="noopener"
                className="inline-block rounded-full bg-[#c9846f] px-8 py-[15px] font-semibold text-white transition-colors hover:bg-[#b8735f]"
              >
                Réserver mon appel découverte
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="rounded-2xl border border-[#eee] p-8">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
