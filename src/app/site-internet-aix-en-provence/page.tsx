import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import GoogleColors from "@/components/GoogleColors";
import ScrollReveal from "@/components/ScrollReveal";
import TypewriterText from "@/components/TypewriterText";
import Lightbox from "@/components/Lightbox";
import ProofCards from "@/components/ProofCards";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Création de site web | JWL Marketing",
  description:
    "Découvre la puissance d'un site web conçu par une experte commerciale. Structure saine, rédaction SEO-GEO et cité par l'IA. France entière.",
};

function StepNumber({ n }: { n: number }) {
  return (
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold text-2xl font-bold text-white">
      {n}
    </div>
  );
}

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
      <p className="mt-2 font-heading text-lg italic text-[#c9846f]">{title}</p>
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
            <span className="italic text-[#c9846f]">JWL Business</span>
            <span className="font-medium"> : Un site web conçu pour ton</span>
            <br />
            <span className="font-medium">entreprise et inspirer confiance.</span>
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

      {/* Ton prochain client est sur Google */}
      <section className="mx-auto max-w-[1400px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl font-bold leading-[1.15] md:text-[46px] md:leading-[1.15] text-black">
          <span className="italic text-[#c9846f]">
            Ton prochain client est sur <GoogleColors />.
          </span>
          <br />
          <span className="font-medium">Ton site web doit l&apos;être aussi.</span>
        </h2>
        <div className="mt-10">
          <ProofCards />
        </div>
        <p className="mt-8 text-lg text-black">
          Pour que tes prospects te trouvent facilement, même s&apos;ils ne
          te connaissent pas.
        </p>
      </section>

      {/* Ma Méthode */}
      <section className="mx-auto max-w-[1400px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl font-bold leading-[1.15] md:text-[46px] md:leading-[1.15] text-black">
          <span className="italic text-[#c9846f]">Ma Méthode</span>
          <br />
          <span className="font-medium">
            Fais de ton site web une machine à clients.
          </span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <ScrollReveal delay={0}>
            <Image
              src="/images/conception-site-web.png"
              alt="Je comprends comment tes clients te recherchent — JWL Marketing"
              width={466}
              height={346}
              className="h-auto w-full rounded-t-2xl object-cover"
            />
            <div className="rounded-b-2xl bg-[#141414] p-4 text-left text-white">
              <p className="text-[15px] font-semibold leading-[22px]">
                Je comprends comment tes clients te recherchent
              </p>
              <p className="mt-2 text-[14px] leading-[22px] text-white/80">
                Étude de ton activité, de tes concurrents et des mots-clés
                utilisés sur Google.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <Image
              src="/images/site-web-sur-mesure.png"
              alt="Je crée un site web pensé pour être trouvé — JWL Marketing"
              width={466}
              height={344}
              className="h-auto w-full rounded-t-2xl object-cover"
            />
            <div className="rounded-b-2xl bg-[#141414] p-4 text-left text-white">
              <p className="text-[15px] font-semibold leading-[22px]">
                Je crée un site web pensé pour être trouvé
              </p>
              <p className="mt-2 text-[14px] leading-[22px] text-white/80">
                Structure, contenus, pages de services et optimisation SEO dès
                la création.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <Image
              src="/images/conception-site-web.png"
              alt="J'analyse les données et j'améliore la connexion à Google Search Console — JWL Marketing"
              width={466}
              height={346}
              className="h-auto w-full rounded-t-2xl object-cover"
            />
            <div className="rounded-b-2xl bg-[#141414] p-4 text-left text-white">
              <p className="text-[15px] font-semibold leading-[22px]">
                J&apos;analyse les données et j&apos;améliore la connexion à
                Google Search Console
              </p>
              <p className="mt-2 text-[14px] leading-[22px] text-white/80">
                Pour comprendre le comportement des visiteurs et identifier
                les opportunités d&apos;amélioration.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Je construis ton site web */}
      <section className="mx-auto max-w-[1100px] px-6 py-10">
        <h2 className="text-center font-heading text-3xl font-bold leading-[1.15] md:text-[46px] md:leading-[1.15] text-black">
          <span className="italic text-[#c9846f]">
            Je construis ton site web
          </span>
          <br />
          <span className="font-medium">
            Codé sur mesure et qui t&apos;appartient
          </span>
        </h2>
        <ScrollReveal>
          <Image
            src="/images/creation-site-vitrine.png"
            alt="Site web responsive sur tous les écrans — JWL Marketing"
            width={842}
            height={348}
            className="mx-auto mt-8 h-auto w-full max-w-[420px] object-contain"
          />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <p className="mx-auto mt-6 max-w-[720px] text-center text-[17px] leading-[28px] text-[#1a1a1a]">
            Ton site n&apos;a pas besoin d&apos;être complet dès le premier
            jour, les données nous montrent ensuite ce qu&apos;il faut
            renforcé et les contenus à créer. Comme ça ton site grandit
            petit à petit avec ton entreprise.
          </p>
        </ScrollReveal>
      </section>

      {/* Les 5 étapes de ton site web */}
      <section className="mx-auto max-w-[1100px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl font-bold leading-[1.15] md:text-[46px] md:leading-[1.15] text-black">
          Les 5 <span className="italic text-[#c9846f]">étapes</span> de ton
          site web
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
          <span className="italic text-[#c9846f]">
            à la maintenance de ton site web
          </span>
        </h2>
        <div className="mx-auto mt-10 grid max-w-[1050px] gap-6 md:grid-cols-2 md:items-center">
          <div className="space-y-4 text-left">
            {[
              {
                title: "Maintenance",
                text: "Vérification du bon fonctionnement du site.",
              },
              {
                title: "Sauvegarde",
                text: "Sauvegardes régulières de ton site.",
              },
              {
                title: "Sécurité",
                text: "Surveillance et sécurisation de ton site.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 120}>
                <div className="rounded-2xl bg-[#141414] p-6 text-white">
                  <p className="text-[15px] font-semibold leading-[22px]">{item.title}</p>
                  <p className="mt-1 text-sm leading-[21px] text-white/80">{item.text}</p>
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

      {/* En escalier : 3 etapes */}
      <section className="mx-auto max-w-[1100px] px-6 py-10">
        <div className="space-y-6">
          <ScrollReveal delay={0} className="mx-auto w-full rounded-2xl bg-[#141414] p-8 text-white">
            <h3 className="font-heading text-2xl">
              <span className="italic text-[#c9a84c]">Je créais ou migre</span>{" "}
              ton site web
            </h3>
            <p className="mt-3 text-[15px] leading-[25.5px] text-white/90">
              Ton site t&apos;appartient. Tu restes propriétaire de ton nom de
              domaine et de ton site. Je m&apos;occupe de la migration. Tu as
              déjà un site Wix, Local.fr ou WordPress ? Je peux le récupérer
              et le faire évoluer. Aucun changement compliqué.
            </p>
          </ScrollReveal>
          <ScrollReveal
            delay={150}
            className="mx-auto w-full max-w-[85%] rounded-2xl bg-[#141414] p-8 text-white"
          >
            <h3 className="font-heading text-2xl">
              J&apos;héberge ton site sur une infrastructure{" "}
              <span className="italic text-[#c9a84c]">
                performante et sécurisée
              </span>
            </h3>
            <p className="mt-3 text-[15px] leading-[25.5px] text-white/90">
              Une maintenance et une sécurité assurées. Je veille aux mises à
              jour, à la sécurité et au bon fonctionnement de ton site.
            </p>
          </ScrollReveal>
          <ScrollReveal
            delay={300}
            className="mx-auto w-full max-w-[70%] rounded-2xl bg-[#141414] p-8 text-white"
          >
            <h3 className="font-heading text-2xl">
              À la fin de la mission tu reçevras une{" "}
              <span className="italic text-[#c9a84c]">
                certification juridique
              </span>
            </h3>
            <p className="mt-3 text-[15px] leading-[25.5px] text-white/90">
              Le code, les contenus et les accès sont transmis à la fin du
              projet sur ton espace personnel. Si tu choisis de ne pas
              poursuivre l&apos;aventure avec un autre prestataire après ta
              création, JWL Marketing ne pourra être tenu responsable des
              modifications, dysfonctionnements ou évolutions apportées au
              site. Un document de cession de droits sera donné pour
              formaliser juridiquement cette propriété.
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={450}>
          <Image
            src="/images/creation-site-personnalise.png"
            alt="Preuve d'antériorité horodatée — Copyright01"
            width={414}
            height={600}
            className="mx-auto mt-8 h-auto w-full max-w-[280px]"
          />
        </ScrollReveal>
      </section>

      {/* Tous les mois je veille */}
      <section className="mx-auto max-w-[1400px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl font-bold leading-[1.15] md:text-[46px] md:leading-[1.15] text-black">
          <span className="italic text-[#c9846f]">Tous les mois je veille</span>
          <br />
          <span className="font-medium">
            à faire évoluer ta position sur <GoogleColors />
          </span>
        </h2>
        <ScrollReveal>
          <Image
            src="/images/developpement-site-web.png"
            alt="Suivi et veille Google — JWL Marketing"
            width={462}
            height={346}
            className="mx-auto mt-8 h-auto w-full max-w-[400px] rounded-2xl object-cover"
          />
        </ScrollReveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <ScrollReveal delay={0}>
            <StepNumber n={1} />
            <div className="mt-4 rounded-2xl bg-[#141414] p-6 text-left text-white">
              <p className="text-[15px] font-semibold leading-[22px]">
                Je regarde le suivi Search Console Google
              </p>
              <p className="mt-2 text-sm leading-[21px] text-white/80">
                En claire se que les gens tapent sur google et comment ton
                site ressort.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <StepNumber n={2} />
            <div className="mt-4 rounded-2xl bg-[#141414] p-6 text-left text-white">
              <p className="text-[15px] font-semibold leading-[22px]">
                J&apos;analyse ce que les internautes tapent sur google
              </p>
              <p className="mt-2 text-sm leading-[21px] text-white/80">
                En comment ton site ressort et se qu&apos;on peut améliorer.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <StepNumber n={3} />
            <div className="mt-4 rounded-2xl bg-[#141414] p-6 text-left text-white">
              <p className="text-[15px] font-semibold leading-[22px]">
                J&apos;ajuste ta stratégie en concéquence
              </p>
              <p className="mt-2 text-sm leading-[21px] text-white/80">
                Je fais évoluer tes pages tes contenus.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <p className="mx-auto mt-8 max-w-[940px] text-[17px] leading-[28px] text-[#1a1a1a]">
          Selon ton accompagnement je peux soit te guider sur les ajustements
          à faire soit les faire pour toi. Et si tu rédiges tes articles de
          blog toi même après la formation en rédaction SEO, je t&apos;indique
          les sujets et les optimisations à travailler.
        </p>
      </section>

      {/* J'optimise ta strategie */}
      <section className="mx-auto max-w-[1400px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl font-bold leading-[1.15] md:text-[46px] md:leading-[1.15] text-black">
          <span className="italic text-[#c9846f]">J&apos;optimise ta stratégie</span>
          <br />
          <span className="font-medium">
            Mensuelle avec des données chiffrées et un accompagnement clair
          </span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <ScrollReveal delay={0} className="text-left">
            <p className="text-[17px] leading-[26px] text-[#1a1a1a]">
              Je vois quand <span className="font-bold">tu n&apos;as pas de stratégie</span>
            </p>
            <Lightbox
              src="/images/creation-site-entreprise-graph1.png"
              alt="Search Console — sans stratégie SEO"
              width={640}
              height={352}
              className="mt-3 h-auto w-full max-w-[380px] rounded-2xl border border-[#eee] object-cover"
            />
            <p className="mt-3 text-sm text-[#1a1a1a]">
              Quand tu n&apos;as pas de stratégie.
            </p>
            <p className="mt-2 text-sm italic text-[#7c5fd6]">
              Google{" "}ne te propose pas aux internautes
              <br />
              Tu as des clics qui correspondent à tes clients
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150} className="text-left">
            <p className="text-[17px] leading-[26px] text-[#1a1a1a]">
              Quand <span className="font-bold">tu as une stratégie SEO</span> et
              aucune stratégie commerciale sur ton site web
            </p>
            <Lightbox
              src="/images/creation-site-entreprise-graph2.png"
              alt="Search Console — stratégie SEO sans stratégie commerciale"
              width={638}
              height={356}
              className="mt-3 h-auto w-full max-w-[380px] rounded-2xl border border-[#eee] object-cover"
            />
            <p className="mt-3 text-sm text-[#1a1a1a]">
              Quand tu as une stratégie SEO et aucune stratégie commerciale
              sur ton site web.
            </p>
            <p className="mt-2 text-sm italic text-[#7c5fd6]">
              Ta courbe monte car Google{" "}te comprend
              <br />
              Tu as toujours de faibles clics, tu ne convertis pas
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={300} className="mx-auto mt-8 max-w-[380px] text-left">
          <p className="text-[17px] leading-[26px] text-[#1a1a1a]">
            Ou quand tu as investi sur ta stratégie.
          </p>
          <Lightbox
            src="/images/creation-site-entreprise-graph3.png"
            alt="Search Console — stratégie SEO investie"
            width={618}
            height={314}
            className="mt-3 h-auto w-full rounded-2xl border border-[#eee] object-cover"
          />
          <p className="mt-2 text-sm italic text-[#7c5fd6]">
            Google{" "}te propose sur des mots-clés
            <br />
            Tu as des clics des internautes
          </p>
        </ScrollReveal>
        <div className="mx-auto mt-10 max-w-[940px] space-y-4 text-left text-[17px] leading-[28px] text-[#1a1a1a]">
          <p className="font-semibold text-black">
            L&apos;objectif c&apos;est d&apos;avoir un site qui travaille
            pour toi pendant que tu fais ton métier, que tu prospectes ou que
            tu fais la sieste.
          </p>
        </div>
        <a
          href="/tarifs"
          className="mt-8 inline-block rounded-full bg-[#c9846f] px-8 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
        >
          Découvrir les formules
        </a>
      </section>

      {/* Quel budget prévoir ? */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl font-bold leading-[1.15] md:text-[46px] md:leading-[1.15]">
          <span className="italic text-[#c9846f]">Quel budget prévoir ?</span>
        </h2>
        <p className="mt-2 text-[15px] text-[#555]">Pour créer ou optimiser ton site ?</p>

        <div className="mx-auto mt-10 grid gap-8 md:grid-cols-3">
          {[
            {
              price: "697",
              title: "JWL Start",
              subtitle: "Le Site Web Business",
              quote: "« L'essentiel pour être visible sur Google. »",
            },
            {
              price: "1275",
              title: "JWL Perform",
              subtitle: "Le Site Web Premium",
              quote: "« Je délègue ma visibilité et je me concentre sur mon métier. »",
            },
            {
              price: "1500",
              title: "JWL Master",
              subtitle: null,
              quote: "« Pour les entreprises qui veulent une présence Google gérée de A à Z. »",
            },
          ].map((tier) => (
            <div
              key={tier.title}
              className="relative flex flex-1 flex-col rounded-md bg-[#141414] p-8 pt-14 text-left text-white"
            >
              <span className="absolute -top-6 left-6 flex h-[76px] w-[76px] -rotate-6 items-center justify-center rounded-full bg-gold text-center text-[13px] leading-tight text-white shadow-md">
                {tier.price}€
                <br />
                /mois
              </span>
              <h3 className="font-heading text-xl text-center underline decoration-gold underline-offset-4">
                {tier.title}
              </h3>
              {tier.subtitle && (
                <p className="mt-1 text-center text-sm text-white/60">{tier.subtitle}</p>
              )}
              <p className="mt-3 italic text-white/90">{tier.quote}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JWL Business est fait / pas fait pour toi */}
      <section className="mx-auto max-w-[1400px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl font-bold leading-[1.15] md:text-[46px] md:leading-[1.15] text-black">
          <span className="font-medium">JWL Business est</span>{" "}
          <span className="italic text-[#c9846f]">fait pour toi</span>
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
          Cette offre n&apos;est <span className="italic text-[#c9846f]">pas faite pour toi</span> si
        </h2>
        <ScrollReveal>
          <div className="mx-auto mt-8 max-w-[820px] rounded-2xl bg-black p-8 text-left text-white">
            <p className="text-xs font-semibold uppercase tracking-wide text-white/60">Tu veux</p>
            <ul className="mt-4 space-y-2 text-[15px] leading-[24px]">
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

      {/* J'avance a ton rythme */}
      <section className="mx-auto max-w-[1400px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl font-bold leading-[1.15] md:text-[46px] md:leading-[1.15] text-black">
          <span className="italic text-[#c9846f]">J&apos;avance à ton rythme</span>
          <br />
          <span className="font-medium">
            Je reste présente quoi qu&apos;il arrive
          </span>
        </h2>
        <svg viewBox="0 0 120 120" className="mx-auto mt-8 h-28 w-28 animate-spin">
          <circle cx="60" cy="60" r="52" fill="none" stroke="#d9d9d9" strokeWidth="14" />
          <circle
            cx="60"
            cy="60"
            r="52"
            fill="none"
            stroke="#c9a84c"
            strokeWidth="14"
            strokeDasharray={`${2 * Math.PI * 52 * 0.22} ${2 * Math.PI * 52}`}
            strokeLinecap="round"
          />
        </svg>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <ScrollReveal delay={0} className="rounded-2xl bg-[#141414] p-6 text-left text-white">
            <p className="text-[15px] font-semibold leading-[22px]">
              Je te propose une base qui rentre dans ton budget
            </p>
            <p className="mt-2 text-sm leading-[21px] text-white/80">
              On démarre avec l&apos;essentiel puis on fait grandir avec les
              résultats.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150} className="rounded-2xl bg-[#141414] p-6 text-left text-white">
            <p className="text-[15px] font-semibold leading-[22px]">
              Je te soumets l&apos;idée de te former en rédaction SEO
            </p>
            <p className="mt-2 text-sm leading-[21px] text-white/80">
              Qui mieux que toi peut parler de ton métier ? Tu rédiges les
              articles de ton blog. Je garde un œil sur ce qui est publié.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300} className="rounded-2xl bg-[#141414] p-6 text-left text-white">
            <p className="text-[15px] font-semibold leading-[22px]">
              Si tu préfères déléguer, je m&apos;en occupe
            </p>
            <p className="mt-2 text-sm leading-[21px] text-white/80">
              Je passe à l&apos;action pour toi, de la rédaction à la mise en
              ligne.
            </p>
          </ScrollReveal>
        </div>
        <a
          href="/tarifs"
          className="mt-8 inline-block rounded-full bg-[#c9846f] px-8 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
        >
          Découvrir les formules
        </a>
      </section>

      {/* Des projets qui parlent d'eux-meme */}
      <section className="mx-auto max-w-[1300px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl font-bold leading-[1.15] md:text-[46px] md:leading-[1.15] text-black">
          <span className="italic text-[#c9846f]">Des projets</span>
          <br />
          <span className="font-medium">qui parlent d&apos;eux-même</span>
        </h2>
        <div className="mx-auto mt-8 grid max-w-[1050px] gap-6 md:grid-cols-2">
          <ScrollReveal delay={0}>
            <Image
              src="/images/refonte-site-web.webp"
              alt="Star Limousine Paris — site web créé par JWL Marketing"
              width={1123}
              height={562}
              className="h-auto w-full rounded-2xl border border-[#eee] object-cover"
            />
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <Image
              src="/images/creation-site-professionnel.png"
              alt="Évolution des impressions et clics — Google Search Console, JWL Marketing"
              width={1034}
              height={532}
              className="h-auto w-full rounded-2xl border border-[#eee] object-cover"
            />
          </ScrollReveal>
        </div>
        <p className="mt-3 text-xs text-[#888]">
          Capture issue d&apos;un compte Google Search Console client. Les
          requêtes et données sensibles ont été masquées.
        </p>
      </section>

      {/* Ton projet merite plus qu'un simple site web */}
      <section className="bg-white px-6 py-16 text-center">
        <h3 className="font-heading text-3xl font-bold leading-[1.15] md:text-[46px] md:leading-[1.15] text-black">
          <TypewriterText
            className="italic text-[#c9846f]"
            text="Ton projet mérite plus qu'un simple site web"
          />
        </h3>
        <ScrollReveal>
          <p className="mx-auto mt-6 max-w-[820px] text-[17px] leading-[28px] text-[#1a1a1a]">
            Tu restes propriétaire de ton site, de ton nom de domaine et de
            tes données.
            <br />
            Prêt à attirer tes prochains clients ?
          </p>
        </ScrollReveal>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://calendly.com/jwlm"
            target="_blank"
            rel="noopener"
            className="inline-block rounded-full bg-[#c9846f] px-10 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
          >
            Réserve un appel
          </a>
          <a
            href="/tarifs"
            className="inline-block rounded-full border-2 border-[#c9846f] px-10 py-[15px] font-medium text-[#c9846f] transition-colors hover:bg-[#faf3ea]"
          >
            Découvrir
          </a>
        </div>
      </section>
    </div>
  );
}
