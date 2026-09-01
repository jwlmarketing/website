import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import GoogleColors from "@/components/GoogleColors";

export const metadata: Metadata = {
  title: "Optimisation Fiche Google Business Profile | JWL MARKETING",
  description:
    "Ta fiche Google my business est à l'abandon ? Reprends le contrôle de ta visibilité locale. Avec moi et partout en France.",
};

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
          <h1 className="font-heading text-4xl leading-[1.05] lg:text-[60px] lg:leading-[0.95] text-black">
            <span className="font-medium">Fiche Google My Business Profile</span>
            <br />
            <span className="italic text-[#c9846f]">Attire des clients</span>
            <br />
            <span className="italic text-[#c9846f]">près de chez toi</span>
          </h1>
          <p className="mt-6 text-base leading-[1.6] text-black">
            Transforme les recherches locales en appels, visites et demandes
            de devis
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="tel:0783792814"
              className="inline-block rounded-full bg-[#c9846f] px-8 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
            >
              07 83 79 28 14
            </a>
            <a
              href="mailto:service@jwl-marketing.fr"
              className="inline-block rounded-full bg-[#faf3ea] px-8 py-[15px] text-sm font-semibold text-black transition-colors hover:bg-[#f0e5d6]"
            >
              Audit gratuit de ta fiche
            </a>
          </div>
        </div>
        <Image
          src="/images/hero-gmb.webp"
          alt="Optimisation fiche Google My Business Profile — JWL Marketing"
          width={1536}
          height={1024}
          priority
          className="h-auto w-full max-w-[640px] rounded-2xl object-cover"
        />
      </div>

      {/* Pourquoi tes concurrents apparaissent avant toi */}
      <section className="mx-auto max-w-[1100px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">
            Pourquoi tes concurrents apparaissent avant toi
          </span>{" "}
          <span className="font-medium">
            sur <GoogleColors /> ?
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-[900px] text-left text-[17px] leading-[28px] text-[#1a1a1a]">
          Une fiche Google optimisée ne suffit pas toujours pour atteindre la
          première place. Google prend aussi en compte l&apos;ancienneté de
          ton entreprise, la régularité de ton activité, tes avis, tes photos
          et les mises à jour de ta fiche. Plus ton profil est actif et
          inspire confiance dans le temps, plus Google aura tendance à le
          mettre en avant dans les résultats locaux.
        </p>
      </section>

      {/* Avant de te choisir */}
      <section className="mx-auto max-w-[1100px] px-6 py-10">
        <h2 className="text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Avant de te choisir,</span>{" "}
          <span className="font-medium">tes prospects vérifient qui tu es</span>
        </h2>
        <div className="mt-10 grid items-center gap-8 md:grid-cols-2">
          <Image
            src="/images/qui-suis-je-gmb-card.png"
            alt="Fiche Google Business Profile JWL Marketing"
            width={1410}
            height={950}
            className="h-auto w-full rounded-2xl border border-[#eee] object-cover"
          />
          <div className="text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              Aujourd&apos;hui, tes futurs clients ne prennent plus une
              décision sans se renseigner. Avant de t&apos;appeler, de
              demander un devis ou de pousser la porte de ton entreprise, ils
              consultent ta fiche Google. Ils regardent tes avis, tes photos,
              tes réalisations et les informations que tu partages.
            </p>
            <p className="mt-4">
              Une fiche Google complète et active rassure. Elle montre que
              ton entreprise est sérieuse, accessible et digne de confiance.
              Dans de nombreux cas, c&apos;est cette première impression qui
              fait la différence entre un prospect qui te contacte et un
              prospect qui choisit un concurrent.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a
            href="mailto:service@jwl-marketing.fr"
            className="inline-block rounded-full bg-[#c9846f] px-8 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
          >
            En savoir plus
          </a>
        </div>
      </section>

      {/* Comment JWL Marketing optimise ta fiche */}
      <section className="mx-auto max-w-[1100px] px-6 py-10">
        <h2 className="text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Comment JWL Marketing</span>
          <br />
          <span className="font-medium">
            optimise ta fiche Google Business Profile
          </span>
        </h2>
        <div className="mt-10 grid items-center gap-8 md:grid-cols-2">
          <div className="text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              Ta fiche Google est souvent le premier contact entre ton
              entreprise et tes futurs clients. Une fiche incomplète, mal
              renseignée ou peu active peut limiter ta visibilité locale. À
              l&apos;inverse, une fiche optimisée aide Google à mieux
              comprendre ton activité et renforce la confiance des personnes
              qui te découvrent.
            </p>
            <p className="mt-4">
              Chez JWL Marketing, j&apos;optimise chaque élément de ta fiche :
              catégories, services, description, photos, publications, avis
              et informations stratégiques. L&apos;objectif est simple :
              améliorer ta visibilité locale, attirer des prospects qualifiés
              et transformer les recherches Google en appels, visites ou
              demandes de devis. Parce qu&apos;une fiche Google ne doit pas
              seulement être présente. Elle doit travailler pour ton
              entreprise.
            </p>
          </div>
          <Image
            src="/images/gmb-google-recherche-solution.webp"
            alt="Quelle est la meilleure solution pour moi ? — recherche Google"
            width={613}
            height={613}
            className="mx-auto h-auto w-full max-w-[320px] rounded-2xl object-cover"
          />
        </div>
      </section>

      {/* Les 3 piliers */}
      <section className="mx-auto max-w-[900px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Les 3 piliers</span>
          <br />
          <span className="font-medium">
            qui font remonter une fiche <GoogleColors />
          </span>
        </h2>
        <Image
          src="/images/google-rue-commercante.webp"
          alt="Google est une rue commerçante — sois visible, sois crédible, sois choisi"
          width={886}
          height={623}
          className="mx-auto mt-10 h-auto w-full rounded-2xl border border-[#eee] object-cover"
        />
      </section>

      {/* Optimisation des informations */}
      <section className="mx-auto max-w-[1100px] px-6 py-10">
        <h2 className="text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">
            Optimisation de tes informations
          </span>
          <br />
          <span className="font-medium">Pour attirer plus que des visites.</span>
        </h2>
        <div className="mt-10 grid items-center gap-8 md:grid-cols-2">
          <Image
            src="/images/creation-site-web-veille-google.png"
            alt="Optimisation des informations Google Business Profile"
            width={462}
            height={346}
            className="mx-auto h-auto w-full max-w-[320px] rounded-2xl border border-[#eee] object-cover"
          />
          <p className="text-[17px] leading-[28px] text-[#1a1a1a]">
            Horaires, adresse, numéro de téléphone, site web, catégories et
            description : chaque information renseignée sur ta fiche joue un
            rôle dans ta visibilité locale. Je vérifie et optimise chaque
            détail pour que ta fiche transforme un simple passage sur Google
            en véritable prise de contact.
          </p>
        </div>
      </section>

      {/* Gestion des avis */}
      <section className="mx-auto max-w-[1100px] px-6 py-10">
        <h2 className="text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Gestion de tes avis Google</span>
          <br />
          <span className="font-medium">
            pour ajouter une dimension humaine à ta présence.
          </span>
        </h2>
        <div className="mt-10 grid items-center gap-8 md:grid-cols-2">
          <p className="text-[17px] leading-[28px] text-[#1a1a1a]">
            Pour Google, exister ne suffit pas. Il faut le prouver. Les avis
            montrent que de vrais clients font appel à toi. Les réponses
            prouvent que ton entreprise est active. Les dates, les
            interactions et la régularité des avis confirment que ton
            activité est bien réelle.{" "}
            <span className="font-bold">
              Dans le digital, Google cherche constamment des preuves du
              monde réel avant de recommander une entreprise.
            </span>
          </p>
          <Image
            src="/images/gestion-avis-google.png"
            alt="Gestion des avis Google — JWL Marketing"
            width={705}
            height={480}
            className="mx-auto h-auto w-full max-w-[420px] rounded-2xl border border-[#eee] object-cover"
          />
        </div>
      </section>

      {/* Mise à jour des photos */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Mise à jour de tes Photos</span>
          <br />
          <span className="font-medium">
            pour renforcer la confiance de ton futur client.
          </span>
        </h2>
        <Image
          src="/images/mise-a-jour-photos-cards.webp"
          alt="Où êtes-vous ? Votre produit phare. Vos autres offres."
          width={1600}
          height={618}
          className="mx-auto mt-10 h-auto w-full rounded-2xl"
        />
      </section>

      {/* Rédaction d'articles */}
      <section className="mx-auto max-w-[1100px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Rédaction d&apos;articles</span>
          <br />
          <span className="font-medium">pour prouver à Google que tu es actif</span>
        </h2>
        <p className="mx-auto mt-6 max-w-[900px] text-left text-[17px] leading-[28px] text-[#1a1a1a]">
          Publier régulièrement du contenu montre à Google que ton entreprise
          est vivante. J&apos;écris pour toi des articles optimisés,
          construits autour des recherches réelles de tes futurs clients,
          pour renforcer ta visibilité locale sur la durée.
        </p>
      </section>

      {/* Résultats */}
      <section className="mx-auto max-w-[1100px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Résultats</span>
          <br />
          <span className="font-medium">
            <GoogleColors /> et l&apos;IA peuvent te proposer
          </span>
        </h2>
      </section>

      {/* Appels ciblés */}
      <section className="mx-auto max-w-[1100px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Tu génèreras des appels ciblés</span>
          <br />
          <span className="font-medium">
            avec des personnes qui comprendront ton activité
          </span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[#eee] p-8 text-left">
            <p className="text-4xl font-bold text-black">75</p>
            <p className="mt-1 text-sm text-[#1a1a1a]">
              Appels effectués depuis la fiche de votre établissement
            </p>
          </div>
          <div className="rounded-2xl border border-[#eee] p-8 text-left">
            <p className="text-4xl font-bold text-black">138</p>
            <p className="mt-1 text-sm text-[#1a1a1a]">
              Clics vers le site Web effectués depuis la fiche de votre
              établissement
            </p>
          </div>
        </div>
      </section>

      {/* N'attends plus */}
      <section className="mx-auto max-w-[900px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          N&apos;attends plus que tes futurs clients te trouvent.
        </h2>
      </section>

      {/* CTA de clôture */}
      <section className="bg-white px-6 py-16 text-center">
        <h3 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">
            Soit actif, développe ta visibilité locale
          </span>
          <br />
          <span className="font-medium">sans dépendre de la publicité</span>
        </h3>
        <a
          href="https://calendly.com/jwlm"
          target="_blank"
          rel="noopener"
          className="mt-8 inline-block rounded-full bg-[#c9846f] px-10 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
        >
          Parce que tu mérites le meilleur
        </a>
      </section>
    </div>
  );
}
