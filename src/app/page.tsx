import Image from "next/image";
import Link from "next/link";
import HeroBadge from "@/components/HeroBadge";
import ProofCard from "@/components/ProofCard";
import SectionHeading from "@/components/SectionHeading";
import GoogleColors from "@/components/GoogleColors";
import FaqAccordion from "@/components/FaqAccordion";
import { HOME_FAQ } from "@/data/homeFaq";
import { REVIEWS } from "@/data/reviews";
import ReviewCard from "@/components/ReviewCard";
import { PROOF_CARDS } from "@/data/proofCards";

const GUARANTEES = [
  {
    title: "Transparence & Résultats",
    text: "Mon discours s'appuie toujours sur des chiffres concrets, issus des outils Google. Pas de promesse en l'air : chaque résultat est appuyé par des données que je te transmets.",
    points: [
      "Chiffres issus de Google Analytics et Search Console",
      "Compte-rendu clair envoyé après chaque mission",
    ],
  },
  {
    title: "Efficacité",
    text: "Je travaille avec rigueur, mission après mission. Chaque action est pensée pour avoir un impact réel sur ta visibilité.",
    points: [
      "Méthode structurée, rien laissé au hasard",
      "Chaque action a un objectif précis",
    ],
  },
  {
    title: "Disponibilité",
    text: "Je te réponds et je t'envoie mon avancée directement sur WhatsApp. Pas besoin d'attendre un rendez-vous pour savoir où tu en es.",
    points: [
      "Réponses et suivi via WhatsApp",
      "Tu sais toujours où en est ton projet",
    ],
  },
  {
    title: "Délivrable",
    text: "Chaque contenu, chaque livrable, t'est transmis directement. Tu sais exactement ce qui a été fait pour ton site.",
    points: [
      "Chaque rédaction SEO t'est envoyée",
      "Aucune étape laissée dans le flou",
    ],
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero — reconstruit à l'identique (padding, tailles, couleurs exactes du site actuel) */}
      <div className="flex w-full flex-col items-center justify-between gap-10 bg-white px-[5%] py-[60px] md:flex-row">
        <div className="max-w-[600px] flex-1">
          <h1 className="m-0 mb-1 mt-2.5 font-heading text-[48px] font-semibold leading-[1.25] text-black">
            Je transforme{" "}
            <span className="text-gold">ton site web</span> en outil qui
            attire des clients.
          </h1>

          <div className="my-4 mb-6 flex items-center gap-2">
            <div className="h-0.5 w-[46px] bg-gold" />
            <span className="text-base text-gold">✦</span>
          </div>

          <p className="text-base leading-[1.6] text-[#333]">
            Résultats mesurables, Aix-en-Provence. Transforme ta présence
            digitale en commercial terrain 24h/24, sur{" "}
            <span className="font-semibold">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </span>
            .
          </p>

          <div className="mt-5 flex flex-wrap gap-[15px]">
            <Link
              href="/contact-jwl-marketing-aix-en-provence"
              className="inline-block rounded-[5px] border-2 border-gold bg-gold px-10 py-[15px] font-medium text-white transition-colors hover:border-[#b8952f] hover:bg-[#b8952f]"
            >
              AUDIT GRATUIT
            </Link>
          </div>
        </div>

        <div className="relative flex flex-[1.2_1_0%] items-center justify-end">
          <Image
            src="/images/hero-jwl-marketing.webp"
            alt="JWL Marketing Aix-en-Provence"
            width={1536}
            height={1024}
            priority
            className="h-auto w-[90%] scale-105 object-contain"
          />
          <HeroBadge />
        </div>
      </div>

      <div className="border-y border-neutral-100 bg-black py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-10 px-6">
          {[
            { src: "/images/logo-inovea.png", alt: "Groupe INOVEA" },
            { src: "/images/logo-webdifference.png", alt: "Web Difference - Tristan" },
            { src: "/images/logo-entrepreneurielles.png", alt: "Entrepreneuri'elles" },
            { src: "/images/logo-dynamitz.png", alt: "Nathan Dynamitz" },
          ].map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={65}
              className="h-12 w-auto object-contain opacity-90"
            />
          ))}
        </div>
      </div>

      {/* Intro — valeurs exactes: h2 38px Playfair 600 noir, sous-titre 18px #555, corps 15px/25.5px #1a1a1a Georgia, max-width 640px */}
      <section className="mx-auto max-w-[640px] px-6 py-20 text-center">
        <h2 className="font-heading text-[38px] font-semibold leading-tight text-black">
          Et si ton prochain client te trouvait sur Google ?
        </h2>
        <p className="mt-4 text-lg text-[#555]">
          Un site web qui travaille pour ton entreprise 24h/24 afin de
          générer de nouveaux clients
        </p>

        <div className="relative mx-auto mt-8 aspect-video w-full max-w-[846px] overflow-hidden rounded-lg">
          <iframe
            src="https://www.youtube.com/embed/-btM09DQ4zg"
            title="JWL Marketing"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>

        <div className="mt-8 space-y-5 text-left text-[15px] leading-[25.5px] text-[#1a1a1a]">
          <p className="font-heading text-xl font-semibold text-black">
            Le plus difficile, ce n&apos;est pas d&apos;être trouvé. C&apos;est
            d&apos;être choisi.
          </p>
          <p className="italic text-[#555]">
            Le trafic flatte l&apos;égo, le chiffre d&apos;affaires paie les
            factures.
          </p>
          <p>
            Beaucoup d&apos;entreprises suivent leurs visites, leurs clics ou
            leurs impressions. Moi, je regarde une seule chose : combien de
            prospects deviennent tes clients. Un bon référencement ne se
            mesure pas uniquement au trafic, mais aux résultats qu&apos;il
            génère. C&apos;est pourquoi chaque stratégie est suivie, analysée
            et ajustée mois après mois afin de développer durablement ta
            visibilité et ton chiffre d&apos;affaires.
          </p>
          <p>
            Aujourd&apos;hui, ton premier rendez-vous avec un prospect
            commence sur Google. Avant de te contacter, il recherche ton
            entreprise, consulte ton site internet et compare plusieurs
            professionnels. En quelques secondes, il décide si tu inspires
            confiance ou s&apos;il préfère poursuivre ses recherches.
          </p>
          <p>
            Ton site internet est bien plus qu&apos;une simple vitrine. Il
            représente ton entreprise, valorise ton savoir-faire et montre
            pourquoi un prospect devrait te choisir plutôt qu&apos;un
            concurrent. Il doit rassurer, convaincre et donner envie de
            passer à l&apos;action.
          </p>
          <p>
            Chez JWL Marketing, je crée des sites internet pensés pour être
            visibles sur Google, offrir une expérience fluide à tes visiteurs
            et transformer cette visibilité en demandes de devis, appels et
            nouveaux clients. Je conçois des sites web pensés pour développer
            ton activité. Chaque page est construite avec une stratégie SEO
            et une logique commerciale afin d&apos;attirer des visiteurs
            qualifiés et de les transformer en prospects.
          </p>
          <p>
            Résultat : ton site devient un véritable levier de visibilité,
            d&apos;acquisition et de croissance pour ton entreprise.
          </p>
        </div>
      </section>

      {/* Attire de nouveaux clients — section entièrement manquante dans la 1re passe, ajoutée après comparaison directe */}
      <section className="px-6 py-10 text-center">
        <a
          href="/referencement-google-aix-en-provence"
          className="inline-block rounded-sm bg-gold px-[22px] py-3 text-base text-white"
        >
          Attire de nouveaux clients.
        </a>

        <SectionHeading
          title="Chaque jour"
          subtext="Ensemble, créons un positionnement que tes clients retiendront."
        >
          <span className="text-gold"> sans stratégie.</span> Ce sont{" "}
          <span className="text-gold">des clients </span> que tu perds.
        </SectionHeading>

        <div className="mx-auto grid max-w-[900px] items-center gap-8 md:grid-cols-[1fr_260px]">
          <div className="rounded border-[1.5px] border-gold bg-white p-10 text-left">
            <p className="mb-[22px] text-[15px] leading-[1.7] text-[#1a1a1a]">
              <strong className="text-gold">
                Boulangerie, cabinet comptable, agence immobilière, profession
                libérale
              </strong>
              … Peu importe ton secteur, la concurrence est là. Et souvent,
              elle propose exactement la même chose que toi. Ce qui fait la
              différence, ce n&apos;est pas ton service. C&apos;est la
              manière dont tu es perçu. Un positionnement flou, une offre
              trop large, un message qui ne parle pas à la bonne personne, et
              le visiteur part chez un concurrent.
            </p>
            <p className="mb-[22px] text-[15px] leading-[1.7] text-[#1a1a1a]">
              À l&apos;inverse,{" "}
              <strong className="text-gold">
                un message clair et une image cohérente attire naturellement
                les bons clients.
              </strong>{" "}
              C&apos;est ce déclic que je construis avec toi.
            </p>
            <div className="mb-[22px] h-px bg-[#e6ddd2]" />
            <p className="text-[15px] leading-[1.7] text-[#1a1a1a]">
              <strong className="text-gold">
                J&apos;interviens auprès des TPE et PME en région PACA et à
                distance partout en France
              </strong>
              : Paris, Lyon, Bordeaux, Lille et au-delà.{" "}
              <strong className="text-gold">
                Je t&apos;aide à clarifier ton positionnement, à identifier ce
                qui te différencie vraiment
              </strong>{" "}
              et à construire une présence digitale qui parle à tes clients,
              pas seulement à toi.
            </p>
          </div>
          <Image
            src="/images/positionnement-marketing-digital.png"
            alt="Positionnement marketing digital JWL Marketing"
            width={682}
            height={1024}
            className="mx-auto h-auto w-full max-w-[260px] rounded"
          />
        </div>
      </section>

      {/* Ma promesse — section complète manquante, ajoutée après comparaison directe avec le fichier HTML fourni */}
      <section className="px-6 py-16 text-center">
        <a
          href="/site-internet-aix-en-provence"
          className="inline-block rounded-sm bg-gold px-[22px] py-3 text-base text-white"
        >
          Créer ton site Web SEO
        </a>

        <SectionHeading
          kicker="Ma promesse"
          title="Je fais de ton site web"
          accent="un outil qui vend pour toi."
          subtext="Sans stratégie, ton site reste invisible. Transforme ta visibilité en véritable levier de clients."
        />

        <div className="mx-auto grid max-w-[1100px] items-center gap-8 text-left md:grid-cols-[260px_1fr]">
          <Image
            src="/images/consultant-marketing-digital.webp"
            alt="strategie-marketing-digital-aix"
            width={1200}
            height={1400}
            className="mx-auto h-auto w-full max-w-[260px] rounded-2xl object-cover"
          />
          <div className="rounded border-[1.5px] border-gold bg-white p-10">
            <p className="mb-[22px] text-[15px] leading-[1.7] text-[#1a1a1a]">
              Le problème peut venir de ton positionnement, mais aussi de la
              manière dont tu communiques dessus. En effet, ton offre peut
              être pertinente, tes tarifs cohérents, tes services de qualité,
              et pourtant, tes clients ne te trouvent pas. Aujourd&apos;hui,
              tout passe par Google.{" "}
              <strong>
                Quand un prospect a un besoin, il cherche, compare et choisit
                rapidement.
              </strong>{" "}
              Si tu n&apos;apparais pas au bon moment, tu laisses la place à
              tes concurrents. Et même avec un site existant, sans les bons
              outils, tu navigues à l&apos;aveugle.{" "}
              <strong className="text-gold">
                Tu ne sais pas combien de personnes visitent ton site, ce
                qu&apos;elles regardent ni pourquoi elles ne te contactent
                pas.
              </strong>
            </p>
            <div className="mb-[22px] h-px bg-[#e6ddd2]" />
            <p className="mb-[22px] text-[15px] leading-[1.7] text-[#1a1a1a]">
              C&apos;est exactement là que j&apos;interviens.{" "}
              <strong>
                Un consultant SEO, c&apos;est faire appel à une personne qui
                parle Google, qui comprend sa technique et qui, à travers le
                code et les règles de Google, adapte ton site pour qu&apos;il
                soit compris.
              </strong>{" "}
              Mais ne t&apos;y trompe pas : les développeurs développent un
              site web avec leur langage.{" "}
              <strong className="text-gold">
                Le consultant SEO crée, pilote ou revoit l&apos;architecture
                et l&apos;écriture du site avec le langage de Google.
              </strong>{" "}
              Ce sont deux langues différentes.
            </p>
            <p className="text-[15px] leading-[1.7] text-[#1a1a1a]">
              Selon ta situation, je te propose soit la création d&apos;un
              site web optimisé dès le départ, soit une refonte complète de
              ton site existant, en revoyant toute l&apos;ossature pour que
              Google comprenne ton activité et te positionne face à tes
              prospects.
            </p>
          </div>
        </div>
      </section>

      {/* Analyse — section complète manquante, ajoutée après comparaison directe. Boîte encadrée avec gras doré + divider, comme le pattern "positionnement" */}
      <section className="bg-neutral-50 px-6 py-16 text-center">
        <SectionHeading kicker="Analyse" title="J'identifie les intentions de recherches sur">
          {" "}
          <GoogleColors />
        </SectionHeading>
        <div className="mx-auto grid max-w-[1100px] items-center gap-10 text-left md:grid-cols-2">
          <div className="rounded border-[1.5px] border-gold bg-white p-10">
            <p className="mb-[22px] text-[15px] leading-[1.7] text-[#1a1a1a]">
              <strong className="text-gold">
                Voici une projection réelle basée sur les données d&apos;un
                site.
              </strong>{" "}
              Ce type de suivi permet de comprendre ce qui fonctionne,
              d&apos;ajuster et d&apos;améliorer les résultats dans le temps.
            </p>
            <p className="mb-[22px] text-[15px] leading-[1.7] text-[#1a1a1a]">
              <strong className="text-gold">
                L&apos;objectif est de générer des leads, puis de les
                transformer en clients.
              </strong>{" "}
              Pour cela, je m&apos;appuie sur un système Google complet : ton
              site web, ta visibilité sur Google, ta fiche Google Business
              Profile et des outils d&apos;analyse comme Google Analytics et
              Google Search Console.
            </p>
            <div className="mb-[22px] h-px bg-[#e6ddd2]" />
            <p className="mb-[22px] text-[15px] leading-[1.7] text-[#1a1a1a]">
              <strong className="text-gold">
                Ces outils permettent de comprendre ce qui fonctionne,
                d&apos;identifier les points de blocage et d&apos;ajuster ta
                stratégie dans le temps.
              </strong>{" "}
              Car un site performant ne se devine pas, il se mesure.
            </p>
            <p className="text-[15px] leading-[1.7] text-[#1a1a1a]">
              <strong className="text-gold">
                C&apos;est grâce à ce suivi régulier que l&apos;on peut
                améliorer tes résultats, renforcer ta visibilité et faire
                évoluer ton site
              </strong>{" "}
              pour qu&apos;il devienne un véritable levier de développement.
            </p>
          </div>
          <Image
            src="/images/resultat-google-site-internet.webp"
            alt="Résultat Google — site internet JWL Marketing"
            width={1200}
            height={800}
            className="h-auto w-full rounded-2xl object-cover"
          />
        </div>

        <Image
          src="/images/site-web-referencement-seo.png"
          alt="Projection intervention JWL Marketing — visibilité et clics"
          width={1024}
          height={768}
          className="mx-auto mt-10 h-auto w-full max-w-[700px]"
        />

        <a
          href="https://www.jwl-marketing.fr/consultant-seo-aix-en-provence"
          className="mt-10 inline-block rounded-[5px] border-2 border-gold bg-gold px-10 py-[15px] font-medium text-white transition-colors hover:border-[#b8952f] hover:bg-[#b8952f]"
        >
          Découvre mon univers
        </a>
      </section>

      {/* Résultats clients — cartes .jwl-proof-card exactes */}
      <section className="bg-transparent px-5 py-[50px]" style={{ fontFamily: '"DM Sans", Arial, sans-serif' }}>
        <SectionHeading
          title="La preuve par les"
          accent="chiffres."
          subtext={
            <>
              Des résultats concrets, mesurés avec <GoogleColors /> Analytics
              et <GoogleColors /> Search Console.
            </>
          }
        />
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-start justify-center gap-6">
          {PROOF_CARDS.map((card) => (
            <ProofCard key={card.badge} data={card} />
          ))}
        </div>
        <p className="mx-auto mt-[30px] max-w-[640px] text-center text-xs leading-relaxed text-[#999]">
          Chiffres issus de Google Search Console et Google Business Profile,
          données juillet 2026.
        </p>
      </section>

      {/* Garanties — .guarantees-section: kicker + h2 encadré, photo 40% + grille 2x2 de cartes sombres */}
      <section className="box-border bg-transparent px-[5%] py-20" style={{ fontFamily: "Poppins, sans-serif" }}>
        <SectionHeading
          kicker="Mes garanties"
          title="Je te propose"
          accent="une stratégie marketing personnalisée"
        />
        <div className="mx-auto flex max-w-[1200px] flex-col items-stretch gap-10 md:flex-row">
          <div className="flex items-center md:basis-[40%]">
            <Image
              src="/images/jodie-marketing-digital-seo.png"
              alt="Jodie Lapaillerie - JWL Marketing"
              width={642}
              height={862}
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
          <div className="grid flex-1 grid-cols-1 gap-[22px] sm:grid-cols-2">
            {GUARANTEES.map((g, i) => (
              <div
                key={g.title}
                className="rounded-2xl border border-[#2a2a2a] bg-[#141414] p-7 transition-all hover:-translate-y-1.5 hover:border-gold"
              >
                <span className="relative mb-3.5 inline-block pl-[18px] text-xs font-semibold uppercase tracking-wide text-gold before:absolute before:left-0 before:top-1/2 before:h-0.5 before:w-3 before:-translate-y-1/2 before:bg-gold before:content-['']">
                  Garantie {i + 1}
                </span>
                <h3 className="mb-3.5 font-heading text-[19px] font-semibold text-white">
                  {g.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-[#bbb]">{g.text}</p>
                <ul className="space-y-2">
                  {g.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-[#ddd]">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/[0.18] text-[11px] font-bold text-gold">
                        ✓
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages — 8 vrais avis Google récupérés (widget Trustindex reconstruit en composant statique) */}
      <section className="bg-neutral-50 px-6 py-16">
        <SectionHeading title="Ils" accent="encaissent du cash avec JWL Marketing" />
        <div className="mx-auto flex max-w-[1200px] gap-6 overflow-x-auto px-2 pb-4">
          {REVIEWS.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>
      </section>

      {/* CTA de clôture — kicker + h2 encadré + bouton, section distincte des garanties (erreur corrigée) */}
      <section className="px-6 py-16 text-center">
        <SectionHeading kicker="Une collaboration" title="Et un partenariat" accent="gagnant-gagnant" />
        <Link
          href="/contact-jwl-marketing-aix-en-provence"
          className="inline-block rounded-[5px] border-2 border-gold bg-gold px-10 py-[15px] font-medium text-white transition-colors hover:border-[#b8952f] hover:bg-[#b8952f]"
        >
          Demande ton offre
        </Link>
      </section>

      {/* FAQ — vraies réponses complètes récupérées du site (accordéon Elementor natif) */}
      <section className="px-6 py-20">
        <SectionHeading
          kicker="Questions"
          title="FAQ :"
          accent="Foire Aux Questions"
          subtext="Retrouve les réponses aux questions les plus fréquentes sur le Marketing Digital"
        />
        <FaqAccordion items={HOME_FAQ} />
      </section>
    </div>
  );
}
