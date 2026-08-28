import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import GoogleColors from "@/components/GoogleColors";

export const metadata: Metadata = {
  title: "Création de site web | JWL Marketing",
  description:
    "Création de site web qui travaille pour toi pendant que tu travailles. Auto-entrepreneurs, micro-entreprises, TPE, PME et dirigeants.",
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
            <span className="italic text-[#c9846f]">
              qui travaille pour toi
            </span>
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
          src="/images/jodie-creation-site-web.png"
          alt="Jodie Lapaillerie — Création de site web JWL Marketing"
          width={1244}
          height={1387}
          priority
          className="h-auto w-full max-w-[420px] rounded-2xl object-cover"
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
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[#eee] p-6 text-left">
            <p className="text-[13px] font-semibold uppercase tracking-wide text-[#c9846f]">
              Assistance informatique
            </p>
            <p className="mt-4 text-4xl font-bold text-black">3 468</p>
            <p className="text-sm text-[#666]">vues de la fiche Google en 6 mois</p>
            <p className="text-sm font-semibold text-[#c9846f]">63 appels en 6 mois.</p>
            <p className="mt-4 text-sm font-semibold text-black">
              Proxiclic Provence
              <br />
              Informaticien à Digne-les-Bains (04)
            </p>
          </div>
          <div className="rounded-2xl border border-[#eee] p-6 text-left">
            <p className="text-[13px] font-semibold uppercase tracking-wide text-[#c9846f]">
              Gestion de patrimoine
            </p>
            <p className="mt-4 text-4xl font-bold text-black">1 350</p>
            <p className="text-sm text-[#666]">vues de la fiche Google en 4 mois</p>
            <p className="text-sm font-semibold text-[#c9846f]">7 appels clients en 4 mois.</p>
            <p className="mt-4 text-sm font-semibold text-black">
              Groupe INOVEA
              <br />
              Gestion de patrimoine à Aix-en-Provence (13)
            </p>
          </div>
          <div className="rounded-2xl border border-[#eee] p-6 text-left">
            <p className="text-[13px] font-semibold uppercase tracking-wide text-[#c9846f]">
              Refonte stratégie de marque
            </p>
            <p className="mt-4 text-4xl font-bold text-black">En cours</p>
            <p className="text-sm text-[#666]">
              Site récemment lancé, indicateurs pas encore assez complets
            </p>
            <p className="mt-4 text-sm font-semibold text-black">
              Bout de Poils
              <br />
              anciennement Green Beam Craft — Sèvres (91)
            </p>
          </div>
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
          <div className="border-2 border-gold p-6 text-[15px] leading-[24px] text-[#1a1a1a]">
            Je comprends comment tes clients te recherchent. Étude de ton
            activité, des concurrents et des mots-clés utilisés sur Google.
          </div>
          <div className="border-2 border-gold p-6 text-[15px] leading-[24px] text-[#1a1a1a]">
            Je crée ton site web pensé pour être trouvé. Structure, contenus,
            pages des services et optimisation SEO dès la création.
          </div>
          <div className="border-2 border-gold p-6 text-[15px] leading-[24px] text-[#1a1a1a]">
            J&apos;analyse les données et j&apos;améliore la connexion à
            Google Search Console. Pour comprendre le comportement des
            visiteurs et identifier les opportunités d&apos;amélioration.
          </div>
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
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <p className="text-[17px] leading-[28px] text-[#1a1a1a]">
            Ton site n&apos;a pas besoin d&apos;être complet dès le premier
            jour, les données nous permettront ensuite ce qu&apos;il faut
            renforcer et les contenus à créer. Comme ça ton site grandit
            petit à petit avec ton entreprise.
          </p>
          <Image
            src="/images/site-web-referencement-seo.png"
            alt="Création de site web sur mesure — JWL Marketing"
            width={1200}
            height={860}
            className="h-auto w-full rounded-2xl border border-[#eee] object-cover"
          />
        </div>
      </section>

      {/* En escalier : 3 etapes */}
      <section className="mx-auto max-w-[900px] px-6 py-10">
        <div className="space-y-6">
          <div className="rounded-2xl bg-[#141414] p-8 text-white">
            <h3 className="font-heading text-2xl">
              <span className="italic text-[#c9a84c]">Je créais</span> ton
              site web
            </h3>
            <p className="mt-3 text-[15px] leading-[25.5px] text-white/90">
              Ton site t&apos;appartient. Tu restes propriétaire du nom de
              domaine et du site. Je m&apos;occupe de la migration. Tu as un
              site sous Wix, LoicR ou WordPress ? Je peux le récupérer et te
              faire évoluer sans changement compliqué. Je gère les
              transferts, les redirections et la mise en ligne.
            </p>
          </div>
          <div className="ml-0 rounded-2xl bg-[#141414] p-8 text-white md:ml-12">
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
          </div>
          <div className="ml-0 rounded-2xl bg-[#141414] p-8 text-white md:ml-24">
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
          </div>
        </div>
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
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div>
            <StepNumber n={1} />
            <div className="mt-4 rounded-2xl bg-[#141414] p-6 text-[15px] leading-[24px] text-white/90">
              Je regarde le suivi Search Console Google
            </div>
          </div>
          <div>
            <StepNumber n={2} />
            <div className="mt-4 rounded-2xl bg-[#141414] p-6 text-[15px] leading-[24px] text-white/90">
              J&apos;analyse ce que les internautes tapent sur Google
            </div>
          </div>
          <div>
            <StepNumber n={3} />
            <div className="mt-4 rounded-2xl bg-[#141414] p-6 text-[15px] leading-[24px] text-white/90">
              J&apos;ajuste la stratégie en conséquence
            </div>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-[800px] text-[17px] leading-[28px] text-[#1a1a1a]">
          Selon ton accompagnement je peux te guider sur les ajustements à
          faire ou te les faire pour toi. Et toi qui as une stratégie de
          rédaction SEO, je t&apos;indique les sujets à travailler.
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
        <div className="mx-auto mt-10 max-w-[800px] space-y-4 text-left text-[17px] leading-[28px] text-[#1a1a1a]">
          <p>
            Je vois quand tu n&apos;as pas de stratégie : Google ne propose
            pas aux internautes tes clics qui correspondent à tes clients.
          </p>
          <p>
            Quand tu as une stratégie SEO et aucune stratégie commerciale sur
            ton site web : ta courbe monte sur Google te comprend, mais tu as
            toujours des fuites, clics ne se convertit pas.
          </p>
          <p>
            Ou quand tu as investi sur ta stratégie : Google te propose sur
            des mots-clés. Tu as des clics des internautes.
          </p>
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

      {/* J'avance a ton rythme */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">J&apos;avance à ton rythme</span>
          <br />
          <span className="font-medium">
            Je reste présente quoi qu&apos;il arrive
          </span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-[#141414] p-6 text-[15px] leading-[24px] text-white/90">
            Je te propose une base qui rentre dans ton budget
          </div>
          <div className="rounded-2xl bg-[#141414] p-6 text-[15px] leading-[24px] text-white/90">
            Je te soumets l&apos;idée de te former en rédaction SEO
          </div>
          <div className="rounded-2xl bg-[#141414] p-6 text-[15px] leading-[24px] text-white/90">
            Si tu préfères déléguer, je m&apos;en occupe
          </div>
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
        <Image
          src="/images/qui-suis-je-search-console.png"
          alt="Évolution des impressions et clics — Google Search Console, JWL Marketing"
          width={2000}
          height={1414}
          className="mx-auto mt-8 h-auto w-full max-w-[800px] rounded-2xl border border-[#eee] object-cover"
        />
        <p className="mt-3 text-xs text-[#888]">
          Capture issue d&apos;un compte Google Search Console client. Les
          requêtes et données sensibles ont été masquées.
        </p>
      </section>

      {/* Ton projet merite plus qu'un simple site web */}
      <section className="bg-white px-6 py-16 text-center">
        <h3 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">
            Ton projet mérite plus qu&apos;un simple site web
          </span>
        </h3>
        <p className="mt-3 font-heading text-3xl leading-tight md:text-[54px] text-black">
          Je crée des sites pensés pour être trouvés, compris et contactés.
        </p>
        <p className="mx-auto mt-6 max-w-[700px] text-[17px] leading-[28px] text-[#1a1a1a]">
          Tu restes propriétaire de ton site, de ton nom de domaine et de tes
          données personnelles. Prêt à attirer tes prochains clients ?
        </p>
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
