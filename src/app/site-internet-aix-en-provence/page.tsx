import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import GoogleColors from "@/components/GoogleColors";
import ScrollReveal from "@/components/ScrollReveal";
import TypewriterText from "@/components/TypewriterText";
import Lightbox from "@/components/Lightbox";
import ProofCards from "@/components/ProofCards";

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

export default function Page() {
  return (
    <div>
      {/* Logo + compte, au-dessus du hero */}
      <div className="flex w-full items-center justify-between px-[5%] pt-20">
        <Link href="/">
          <Image
            src="/images/logo-jwl-marketing.png"
            alt="JWL Marketing"
            width={966}
            height={187}
            className="h-[36px] w-auto"
          />
        </Link>
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

      {/* Hero */}
      <div className="flex w-full flex-col items-center justify-between gap-10 bg-white px-[5%] py-[60px] lg:flex-row">
        <div className="max-w-[600px] flex-1">
          <h1 className="font-heading text-4xl leading-[1.05] lg:text-[54px] lg:leading-[1.05] text-black">
            <span className="font-medium">Création de site web</span>
            <br />
            <span className="italic text-[#c9846f]">qui travaille pour toi</span>
            <br />
            <span className="italic text-[#c9846f]">
              pendant que tu travailles
            </span>
          </h1>
          <p className="mt-6 text-base leading-[1.6] text-black">
            Auto-entrepreneurs, micro-entreprises, TPE, PME et dirigeants :
            développe ta visibilité sur Google et attire des prospects
            qualifiés toute l&apos;année.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="tel:0783792814"
              className="inline-block rounded-full bg-[#c9846f] px-8 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
            >
              07 83 79 28 14
            </a>
            <span className="rounded-full bg-[#faf3ea] px-5 py-[15px] text-sm font-semibold text-black">
              + de 20 projets depuis 2025
            </span>
          </div>
        </div>
        <Image
          src="/images/creation-site-web-hero.webp"
          alt="Jodie Lapaillerie — Création de site web JWL Marketing"
          width={712}
          height={582}
          priority
          className="h-auto w-full max-w-[500px] object-contain"
        />
      </div>

      {/* Ton prochain client est sur Google */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
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
      <section className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Ma Méthode</span>
          <br />
          <span className="font-medium">
            Fais de ton site web une machine à clients.
          </span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <ScrollReveal delay={0}>
            <Image
              src="/images/creation-site-web-methode.png"
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
              src="/images/creation-site-web-sur-mesure.png"
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
              src="/images/creation-site-web-methode.png"
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
      <section className="mx-auto max-w-[900px] px-6 py-10">
        <h2 className="text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
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
            src="/images/creation-site-web-mockups-devices.png"
            alt="Site web responsive sur tous les écrans — JWL Marketing"
            width={842}
            height={348}
            className="mx-auto mt-8 h-auto w-full max-w-[420px] object-contain"
          />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <p className="mx-auto mt-6 max-w-[640px] text-center text-[17px] leading-[28px] text-[#1a1a1a]">
            Ton site n&apos;a pas besoin d&apos;être complet dès le premier
            jour, les données nous montrent ensuite ce qu&apos;il faut
            renforcé et les contenus à créer. Comme ça ton site grandit
            petit à petit avec ton entreprise.
          </p>
        </ScrollReveal>
      </section>

      {/* En escalier : 3 etapes */}
      <section className="mx-auto max-w-[900px] px-6 py-10">
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
            src="/images/creation-site-web-certificat.png"
            alt="Preuve d'antériorité horodatée — Copyright01"
            width={414}
            height={600}
            className="mx-auto mt-8 h-auto w-full max-w-[280px]"
          />
        </ScrollReveal>
      </section>

      {/* Tous les mois je veille */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Tous les mois je veille</span>
          <br />
          <span className="font-medium">
            à faire évoluer ta position sur <GoogleColors />
          </span>
        </h2>
        <ScrollReveal>
          <Image
            src="/images/creation-site-web-veille-google.png"
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
        <p className="mx-auto mt-8 max-w-[800px] text-[17px] leading-[28px] text-[#1a1a1a]">
          Selon ton accompagnement je peux soit te guider sur les ajustements
          à faire soit les faire pour toi. Et si tu rédiges tes articles de
          blog toi même après la formation en rédaction SEO, je t&apos;indique
          les sujets et les optimisations à travailler.
        </p>
      </section>

      {/* J'optimise ta strategie */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
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
              src="/images/creation-site-web-strategie-graph1.png"
              alt="Search Console — sans stratégie SEO"
              width={640}
              height={352}
              className="mt-3 h-auto w-full max-w-[380px] rounded-2xl border border-[#eee] object-cover"
            />
            <p className="mt-3 text-sm text-[#1a1a1a]">
              Quand tu n&apos;as pas de stratégie.
            </p>
            <p className="mt-2 text-sm italic text-[#7c5fd6]">
              Google ne te propose pas aux internautes
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
              src="/images/creation-site-web-strategie-graph2.png"
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
              Ta courbe monte car Google te comprend
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
            src="/images/creation-site-web-strategie-graph3.png"
            alt="Search Console — stratégie SEO investie"
            width={618}
            height={314}
            className="mt-3 h-auto w-full rounded-2xl border border-[#eee] object-cover"
          />
        </ScrollReveal>
        <div className="mx-auto mt-10 max-w-[800px] space-y-4 text-left text-[17px] leading-[28px] text-[#1a1a1a]">
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
      <section className="mx-auto max-w-[1000px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px]">
          <span className="italic text-[#c9846f]">Quel budget prévoir ?</span>
        </h2>
        <p className="mt-2 text-[15px] text-[#555]">Pour créer ou optimiser ton site ?</p>

        <div className="mx-auto mt-10 flex flex-col gap-8 md:flex-row">
          <div className="relative flex flex-1 flex-col rounded-md bg-[#141414] p-8 pt-14 text-left text-white">
            <span className="absolute -top-6 left-6 flex h-[76px] w-[76px] -rotate-6 items-center justify-center rounded-full bg-gold text-center text-[13px] leading-tight text-white shadow-md">
              À partir
              <br />
              de 1990€
            </span>
            <h3 className="font-heading text-xl underline decoration-gold underline-offset-4">
              JWL Business
            </h3>
            <p className="mt-2 italic text-white/90">« Je construis un site web sur mesure. »</p>
            <p className="mt-4 text-sm uppercase tracking-wide text-gold">Inclus :</p>
            <ul className="mt-2 space-y-1.5 text-sm text-white/85">
              {[
                "Audit stratégique",
                "Positionnement commercial",
                "Architecture des pages",
                "Développement sur mesure",
                "Mise en ligne sur Vercel",
                "Optimisation technique",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-gold">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm uppercase tracking-wide text-gold">
              Ce qui fait la différence :
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-[#c9846f]">
              {[
                "Site rapide",
                "Sans abonnement",
                "Sans paiement annuel d'un hébergeur",
                "Évolutif",
                "Certificat de propriété délivré au client (agréé juridiquement)",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-gold">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex flex-1 flex-col rounded-md bg-[#141414] p-8 pt-14 text-left text-white">
            <span className="absolute -top-6 left-6 flex h-[76px] w-[76px] -rotate-6 items-center justify-center rounded-full bg-gold text-center text-[13px] leading-tight text-white shadow-md">
              À partir
              <br />
              de 4500€
            </span>
            <h3 className="font-heading text-xl underline decoration-gold underline-offset-4">
              JWL Visible
            </h3>
            <p className="mt-2 italic text-white/90">« Je développe, je veux des clients. »</p>
            <p className="mt-4 text-sm uppercase tracking-wide text-gold">Inclus :</p>
            <ul className="mt-2 space-y-1.5 text-sm text-white/85">
              {[
                "Site web sur mesure + stratégie SEO",
                "Audit stratégique",
                "Positionnement SEO",
                "Développement du site",
                "Optimisation technique SEO",
                "Rédaction SEO",
                "Google Business Profile",
                "Blog",
                "Stratégie locale, régionale ou nationale",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-gold">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* J'avance a ton rythme */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
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
      <section className="mx-auto max-w-[1100px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Des projets</span>
          <br />
          <span className="font-medium">qui parlent d&apos;eux-même</span>
        </h2>
        <div className="mx-auto mt-8 grid max-w-[900px] gap-6 md:grid-cols-2">
          <ScrollReveal delay={0}>
            <Image
              src="/images/creation-site-web-case-study-limousine.webp"
              alt="Star Limousine Paris — site web créé par JWL Marketing"
              width={1123}
              height={562}
              className="h-auto w-full rounded-2xl border border-[#eee] object-cover"
            />
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <Image
              src="/images/creation-site-web-case-study-search-console.png"
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
        <h3 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <TypewriterText
            className="italic text-[#c9846f]"
            text="Ton projet mérite plus qu'un simple site web"
          />
        </h3>
        <p className="mt-3 font-heading text-3xl leading-tight md:text-[54px] text-black">
          Je crée des sites pensés pour être trouvés, compris et contactés.
        </p>
        <ScrollReveal>
          <p className="mx-auto mt-6 max-w-[700px] text-[17px] leading-[28px] text-[#1a1a1a]">
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
