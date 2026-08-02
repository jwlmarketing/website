import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PriceRow from "@/components/PriceRow";
import ConcretBox from "@/components/ConcretBox";

export const metadata: Metadata = {
  title: "Tarifs | JWL Marketing",
  description:
    "Les offres d'accompagnement de JWL Marketing : audits, fiche Google Business Profile, sites web, pilotage SEO, formation.",
};

const NEEDS = [
  {
    title: "Vous ne savez pas où vous en êtes ?",
    text: "Quelle que soit votre taille — micro-entreprise, indépendant ou PME — on part toujours d'un état des lieux avant d'agir.",
    cta: "Découvrir les Audits",
  },
  {
    title: "Vous démarrez ou lancez votre activité ?",
    text: "Micro-entrepreneur, indépendant, artisan qui se lance : vous avez besoin d'un site qui inspire confiance dès le premier clic.",
    cta: "Construire votre stratégie digitale",
  },
  {
    title: "Vous avez déjà un site mais peu de visibilité ?",
    text: "TPE ou PME déjà en ligne, mais invisible sur Google : il vous faut un accompagnement régulier, pas juste un site.",
    cta: "Booster mon référencement",
  },
  {
    title: "Vous ne trouvez pas assez de clients ?",
    text: "Indépendant ou PME avec une offre encore floue : avant le SEO, c'est votre positionnement qu'il faut clarifier.",
    cta: "Me démarquer de la concurrence",
  },
];

export default function Tarifs() {
  return (
    <div>
      {/* Hero */}
      <div className="mx-auto flex max-w-[1200px] flex-col items-end justify-center gap-10 bg-white px-[5vw] py-[30px] md:flex-row" style={{ fontFamily: "'DM Sans', Arial, sans-serif" }}>
        <div className="max-w-[520px] flex-1">
          <p className="text-base text-[#333]">Construisons ensemble ta visibilité.</p>
          <h1 className="mt-2 font-heading text-4xl font-semibold leading-[1.25] text-black">
            Les offres d&apos;accompagnement <span className="text-gold">de JWL Marketing.</span>
          </h1>
          <div className="my-5 flex items-center gap-2">
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
      </div>

      <div className="bg-[#0d0d0d] py-6">
        <p className="mb-4 text-center text-[18px] font-bold text-gold">
          Ils me font confiance !
        </p>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-10 px-6">
          {[
            { src: "/images/logo-inovea.png", alt: "Groupe INOVEA" },
            { src: "/images/logo-webdifference.png", alt: "Web Difference" },
            { src: "/images/logo-entrepreneurielles.png", alt: "Entrepreneuri'elles" },
            { src: "/images/logo-dynamitz.png", alt: "Dynamitz" },
          ].map((logo) => (
            <Image key={logo.src} src={logo.src} alt={logo.alt} width={140} height={65} className="h-12 w-auto object-contain opacity-90" />
          ))}
        </div>
      </div>

      {/* Besoin */}
      <section className="bg-[#F7F4EF] px-6 py-16">
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="font-heading text-3xl font-semibold text-black">
            Quel est votre besoin aujourd&apos;hui ?
          </h2>
          <p className="mt-3 text-[#6b6862]">
            Que vous soyez micro-entrepreneur, indépendant ou PME, une seule
            question compte : où en êtes-vous aujourd&apos;hui ? Trouvez
            votre situation ci-dessous.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-[1100px] gap-5 md:grid-cols-4">
          {NEEDS.map((n) => (
            <div key={n.title} className="rounded-md border border-gold bg-white p-7 transition-transform hover:-translate-y-1">
              <h3 className="font-heading text-lg font-semibold leading-snug text-gold">
                {n.title}
              </h3>
              <p className="mt-3 text-sm text-[#6b6862]">{n.text}</p>
              <div className="mt-4 border-t border-[#F0E6CC] pt-3.5">
                <span className="text-[13.5px] font-bold text-black">{n.cta}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Étape 1 — Audits */}
      <section className="px-6 py-16">
        <SectionHeading kicker="Les" title="audits" />
        <p className="mx-auto -mt-8 mb-10 max-w-[600px] text-center text-sm italic text-[#333]">
          Étape 1 : Tout commence par la compréhension de ton marché.
        </p>
        <div className="mx-auto max-w-[900px]">
          <PriceRow
            title="Audit Marketing digitale"
            desc="Ton entreprise inspire-t-elle confiance dès le premier regard ? Fais un état des lieux de ton branding, de ta communication et de ta présence digitale"
            price="Gratuit"
            from={false}
            free
          />
          <PriceRow
            title="Audit fiche Google My Business profile"
            desc="On regarde si ta fiche Google Business Profile existe, si elle est complète et bien optimisée. Tu repars avec les points concrets à changer."
            note="Avec l'Audit SEO & IA en plus : les réponses et tips SEO avec les mots-clés trouvés sont inclus."
            price="250 €"
          />
          <PriceRow
            title="Audit de positionnement"
            desc="Ton offre, ton marché, tes concurrents. On identifie clairement ce qui coince, sans proposer de solution stratégique à ce stade."
            price="390 €"
          />
          <PriceRow
            title="Audit de positionnement + différenciation"
            desc="Tout l'audit, plus 2 à 3 pistes concrètes de différenciation réfléchies pour ton activité et ton marché local. Tu choisis celle qui te ressemble."
            price="890 €"
          />
          <PriceRow
            title="Audit SEO & IA"
            desc="Structure technique, contenu et popularité, plus un vrai diagnostic de ta visibilité dans les réponses IA (ChatGPT, Perplexity, Gemini)."
            note="Suivi d'une commande de site web : 190 € déduits du prix du site."
            price="690 €"
          />
        </div>
        <ConcretBox
          items={[
            "<strong>Les intentions de recherche</strong> identifiées sur ton marché.",
            "<strong>Les mots-clés</strong> à utiliser pour ta communication.",
            "Une lecture claire de <strong>comment tes concurrents communiquent</strong> sur le terrain.",
            "<strong>Le pourcentage de compréhension</strong> de ton site par Google.",
            "<strong>Comment l'IA te comprend</strong> aujourd'hui : tes services, tes produits, ta stratégie locale ou nationale.",
            "<strong>Ta note de compréhension Google</strong>, comparée à celle de tes 3 premiers concurrents.",
          ]}
          title="Tu repars avec un rapport PDF"
        />
      </section>

      {/* Étape 2 — GMB */}
      <section className="bg-[#F7F4EF] px-6 py-16">
        <SectionHeading kicker="Étape 2 : Le cœur de l'optimisation et de ton SEO" title="Ta fiche" accent="Google My Business Profile" />
        <div className="mx-auto max-w-[900px]">
          <PriceRow
            title="Création de la fiche"
            desc="Paramétrage complet : catégories, horaires, description, photos."
            price="250 €"
          />
          <PriceRow
            title="Optimisation d'une fiche existante"
            desc="En plus de l'Audit, j'apporte moi-même les corrections : catégories, mots-clés, cohérence, photos."
            price="290 €"
          />
          <PriceRow
            title="Suivi mensuel"
            desc="Réponses aux avis, publications régulières, veille sur la fiche."
            price="190 € / mois"
          />
          <PriceRow
            title="Formation à la gestion autonome"
            desc="Tu apprends à publier, répondre aux avis et optimiser ta fiche toi-même."
            price="390 €"
          />
        </div>
        <ConcretBox
          title="Avec le suivi mensuel, tu repars avec"
          items={[
            "Chaque mois, un <strong>PDF récapitulatif</strong> de ce qui a été fait le mois précédent.",
            "Disponible directement sur <strong>ton espace client JWL</strong>, accessible aussi depuis ton smartphone.",
            "Tous les <strong>3 mois, un point visuel</strong> pour faire le bilan ensemble et ajuster si besoin.",
          ]}
        />
      </section>

      {/* Étape 3 — Sites */}
      <section className="px-6 py-16">
        <SectionHeading kicker="Étape 3 : Ta boutique" title="Ton site" accent="web" />
        <p className="mx-auto -mt-8 mb-10 max-w-[700px] text-center text-sm text-[#555]">
          Créer ton site avec JWL Marketing, c&apos;est rester pleinement
          propriétaire de ton projet. Ton nom de domaine, ton hébergement, ton
          site et l&apos;ensemble de tes accès t&apos;appartiennent et sont
          centralisés dans ton espace client sécurisé. À tout moment, tu peux
          continuer l&apos;aventure avec JWL Marketing ou confier ton site à
          un autre prestataire.
        </p>

        <div className="mx-auto max-w-[900px] space-y-10">
          {[
            {
              name: "Site One Page",
              sansTitle: "Site One Page",
              sansPrice: "1 500 €",
              sansDesc: "Landing page unique, structure commerciale, formulaire de contact. Balises et meta posées proprement — comprises par Google, mais sans ciblage géographique ni intention de recherche précise.",
              sansPoints: ["Structure technique propre", "Balises et meta posées", "Pas de ciblage géographique"],
              avecTitle: "Site One Page + Stratégie géolocalisée",
              avecPrice: "1 500 € + 380 € / ville",
              avecDesc: "La même page, avec une zone d'intervention en footer et un ciblage sur plusieurs villes ou territoires — idéal pour un consultant, thérapeute ou artisan qui se déplace sur plusieurs zones.",
              avecPoints: ["Zone d'intervention ciblée", "Plusieurs villes ou territoires", "Structure pensée pour ranker localement"],
            },
            {
              name: "Site Business",
              sansTitle: "Site Business",
              sansPrice: "1 850 €",
              sansDesc: "Accueil, Services, Tarifs, Contact. Balises title et meta description remplies simplement (nom de ton activité + ville) — compris par Google, mais sans recherche de mots-clés derrière.",
              sansPoints: ["Structure technique propre", "Balises title et meta description basiques", "Pas de recherche de mots-clés"],
              avecTitle: "Site Business + SEO",
              avecPrice: "2 200 €",
              avecDesc: "Le même site, avec 1 page optimisée SEO incluse (Accueil ou Services, selon ta stratégie) — meta description et title rédigés après recherche de mots-clés.",
              avecPoints: ["1 page SEO incluse (au prix groupé)", "Recherche de mots-clés sur cette page", "Pages supplémentaires à la carte : 475 €/page"],
            },
            {
              name: "E-commerce Essentiel",
              sansTitle: "E-commerce Essentiel",
              sansPrice: "2 200 €",
              sansDesc: "Boutique WooCommerce, jusqu'à 10 produits, paiement en ligne. Balises title et meta description basiques sur chaque fiche — compris par Google, sans stratégie de positionnement.",
              sansPoints: ["Structure technique propre", "Fiches produits basiques", "Pas de ciblage géographique"],
              avecTitle: "E-commerce Essentiel + Stratégie géolocalisée",
              avecPrice: "2 200 € + 380 € / ville",
              avecDesc: "La même boutique, avec un ciblage sur plusieurs villes ou zones — pertinent si ta boutique a un ancrage local (retrait, livraison zone, artisan).",
              avecPoints: ["Zone d'intervention ciblée", "Plusieurs villes ou territoires", "Structure pensée pour ranker localement"],
            },
            {
              name: "E-commerce Sur-Mesure",
              sansTitle: "E-commerce Sur-Mesure",
              sansPrice: "5 000 €",
              sansDesc: "Développement sur-mesure avec un développeur dédié, pour une boutique plus poussée techniquement. Fiches produits basiques, aucune stratégie de positionnement.",
              sansPoints: ["Structure technique propre", "Fiches produits basiques", "Pas de ciblage géographique"],
              avecTitle: "E-commerce Sur-Mesure + Stratégie géolocalisée",
              avecPrice: "5 000 € + 380 € / ville",
              avecDesc: "La même boutique sur-mesure, avec un ciblage sur plusieurs villes ou zones si ton activité a un ancrage local.",
              avecPoints: ["Zone d'intervention ciblée", "Plusieurs villes ou territoires", "Structure pensée pour ranker localement"],
            },
          ].map((tier) => (
            <div key={tier.name}>
              <h3 className="mb-4 font-heading text-xl font-semibold text-black">{tier.name}</h3>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-md border border-gold bg-white p-6">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#888]">Sans SEO</p>
                  <h4 className="mt-1 font-heading text-lg font-bold text-gold">{tier.sansTitle}</h4>
                  <p className="mt-1 text-xs font-bold uppercase text-[#C97B63]">À partir de</p>
                  <p className="font-heading text-xl font-semibold text-black">{tier.sansPrice}</p>
                  <p className="mt-3 text-sm text-[#6b6862]">{tier.sansDesc}</p>
                  <ul className="mt-3 space-y-1 text-sm text-[#444]">
                    {tier.sansPoints.map((p) => <li key={p}>• {p}</li>)}
                  </ul>
                </div>
                <div className="rounded-md border border-gold bg-white p-6">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#C97B63]">
                    Avec SEO — ⚠ Nécessite un audit de positionnement au préalable
                  </p>
                  <h4 className="mt-1 font-heading text-lg font-bold text-gold">{tier.avecTitle}</h4>
                  <p className="mt-1 text-xs font-bold uppercase text-[#C97B63]">À partir de</p>
                  <p className="font-heading text-xl font-semibold text-black">{tier.avecPrice}</p>
                  <p className="mt-3 text-sm text-[#6b6862]">{tier.avecDesc}</p>
                  <ul className="mt-3 space-y-1 text-sm text-[#444]">
                    {tier.avecPoints.map((p) => <li key={p}>• {p}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          <PriceRow
            title="Blog professionnel personnalisé"
            desc="Pour toute structure qui veut construire sa visibilité sur la durée, sans dépendre de la pub."
            note="+ Formation en option : à partir de 790 €, pour écrire tes propres articles SEO en toute autonomie (+ 150 €/page si correction nécessaire)."
            price="1 500 €"
          />
          <PriceRow
            title="Page SEO service"
            desc="Rédaction optimisée sur une intention de recherche précise."
            price="475 € / page"
          />
          <PriceRow
            title="Fiche produit optimisée"
            desc="Rédaction claire, compréhensible par Google (catégorie, usage, contexte) — sans ciblage d'intention de recherche précise."
            price="380 € / fiche"
          />
          <PriceRow
            title="Brief SEO / Cahier des charges rédactionnel"
            desc="Tu as déjà un service technique en interne ? Je fournis les directives complètes (mots-clés, structure, recommandations), ton équipe implémente."
            price="320 € / page"
          />
        </div>

        <p className="mx-auto mt-6 max-w-[700px] text-center text-xs leading-relaxed text-[#888]">
          Visuels non fournis par toi : génération par IA facturée à partir de
          45 €/photo (à l&apos;unité), ou en lot dégressif à partir de
          32 €/photo pour 10 visuels et plus. Stratégie géolocalisée (One
          Page ou E-commerce) : le tarif se calcule à 380 €/ville ciblée.
          Exemple : 8 villes × 380 € = 3 040 €.
        </p>

        <ConcretBox
          items={[
            "Ton <strong>espace client JWL</strong>, accessible aussi depuis ton smartphone.",
            "La <strong>date de renouvellement</strong> de ton hébergeur et de ton nom de domaine, toujours visible.",
            "Tous tes <strong>accès à l'hébergeur</strong> (OVH) et à ton <strong>espace WordPress</strong>.",
            "Un site <strong>100 % fonctionnel</strong>, même sans licence Elementor Pro active.",
            "Un <strong>certificat de qualité JWL Marketing</strong>.",
          ]}
          note="hébergeur et nom de domaine sont à ta charge directe, à ton rythme de paiement. La maintenance (bugs, mises à jour) n'est pas incluse et se facture à part si besoin."
        />
      </section>

      {/* Étape 4 — Pilotage SEO mensuel */}
      <section className="bg-[#F7F4EF] px-6 py-16">
        <SectionHeading kicker="Étape 4 : Reste visible" title="Améliore ton positionnement" accent="dans le temps" />
        <div className="mx-auto grid max-w-[1000px] gap-6 md:grid-cols-3">
          {[
            {
              num: "01",
              title: "Pilotage SEO",
              sub: "Souvent adapté aux petites structures qui démarrent",
              price: "675 €/mois",
              items: ["Reporting mensuel", "Optimisations techniques", "Suivi Search Console", "Suivi Analytics", "Réunion mensuelle"],
            },
            {
              num: "02",
              title: "Croissance SEO",
              sub: "Souvent adapté aux structures en croissance",
              price: "895 €/mois",
              items: ["Tout le Pilotage SEO", "Gestion de la fiche Google Entreprise", "2 publications sur la fiche Google Entreprise / mois", "Optimisations complémentaires"],
            },
            {
              num: "03",
              title: "Performance SEO",
              sub: "Souvent adapté aux PME avec plusieurs équipes",
              price: "1 290 €/mois",
              items: ["Tout Croissance SEO", "1 article de blog SEO / mois", "Stratégie éditoriale", "Accompagnement renforcé"],
            },
          ].map((p) => (
            <div key={p.num} className="rounded-md border border-gold bg-white p-7">
              <span className="font-heading text-3xl font-bold text-gold/30">{p.num}</span>
              <h3 className="mt-2 font-heading text-xl font-semibold text-black">{p.title}</h3>
              <p className="mt-1 text-xs text-[#888]">{p.sub}</p>
              <p className="mt-3 text-xs font-bold uppercase text-[#C97B63]">À partir de</p>
              <p className="font-heading text-2xl font-semibold text-black">{p.price}</p>
              <p className="mt-1 text-[11px] text-[#888]">Tarif ajusté selon la taille de ton entreprise</p>
              <ul className="mt-4 space-y-1.5 text-sm text-[#444]">
                {p.items.map((i) => <li key={i}>• {i}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-[700px] text-center text-xs text-[#888]">
          Toutes les formules sont engagées sur 12 mois, renouvelables par
          tacite reconduction. Tu peux changer de formule à chaque échéance.
        </p>
        <ConcretBox
          items={[
            "<strong>1h de visio par mois</strong>, selon ta disponibilité et tes questions.",
            "Un <strong>PDF envoyé en début de mois</strong>, basé sur des données chiffrées et des graphiques, expliqué clairement.",
            "Tous les <strong>3 mois</strong>, on renforce ou on ajuste la stratégie selon les résultats.",
            "Jusqu'à <strong>3 pages ajoutées ou optimisées</strong> par trimestre, incluses dans l'abonnement.",
          ]}
          title="Avec ton accompagnement mensuel, tu repars avec"
          note="toute demande en dehors du suivi stratégique, un audit spécifique ou une envie ponctuelle, se facture à part."
        />
      </section>

      {/* Étape 5 — Formation */}
      <section className="px-6 py-16">
        <SectionHeading kicker="Étape 5 : Ton équipe grandit avec toi" title="Formation et" accent="développement commercial" />
        <div className="mx-auto grid max-w-[1100px] gap-6 md:grid-cols-3">
          {[
            {
              title: "Formation Rédaction SEO",
              price: "À partir de 950 €",
              desc: "Pour les auto-entrepreneurs, indépendants et entreprises qui veulent rédiger leurs propres contenus et devenir autonomes sur leur blog, avec les bons réflexes SEO.",
              items: ["Structure Hn et intention de recherche", "Mots-clés et longue traîne", "Méthode de rédaction pas à pas", "Exercices sur ta propre activité"],
            },
            {
              title: "Coaching & formation commerciale",
              price: "À partir de 690 €",
              badge: "Nouvelle offre",
              desc: "Une matinée sur place pour écouter ton commercial en situation, identifier ce qui bloque, et transmettre une méthode de vente concrète.",
              items: ["Écoute terrain d'une matinée", "Diagnostic des points de blocage", "Ajustement de l'argumentaire existant", "Conseils actionnables immédiats", "Formation en groupe possible pour TPE/PME"],
            },
            {
              title: "Aide au recrutement commercial",
              price: "À partir de 1 800 €",
              badge: "Nouvelle offre",
              desc: "Tu cherches un commercial en freelance mais tu ne sais pas rédiger l'annonce ni définir le poste ? Je construis tout, de zéro.",
              items: ["Rédaction de l'annonce", "Choix de la plateforme de diffusion", "Définition du profil de poste et des objectifs", "Création de l'argumentaire commercial complet", "Présélection et analyse de 10 profils maximum"],
            },
          ].map((o) => (
            <div key={o.title} className="rounded-md border border-gold bg-white p-7">
              {o.badge && (
                <span className="mb-2 inline-block rounded-full bg-gold/15 px-3 py-1 text-[11px] font-bold uppercase text-gold">
                  {o.badge}
                </span>
              )}
              <h3 className="font-heading text-lg font-semibold text-black">{o.title}</h3>
              <p className="mt-2 font-heading text-lg font-semibold text-gold">{o.price}</p>
              <p className="mt-3 text-sm text-[#6b6862]">{o.desc}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-[#444]">
                {o.items.map((i) => <li key={i}>• {i}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-[700px] text-center text-xs text-[#888]">
          La différence entre les deux : le Coaching ajuste un argumentaire
          déjà testé sur le terrain. L&apos;Aide au recrutement le construit
          entièrement, avant même que le commercial existe.
        </p>
        <ConcretBox
          items={[
            "Une <strong>méthode écrite</strong>, pas juste un échange oral vite oublié.",
            "Des <strong>outils réutilisables</strong> : trame d'annonce, argumentaire, exercices selon l'offre.",
            "Des <strong>conseils actionnables</strong> dès le lendemain, adaptés à ta situation réelle.",
          ]}
        />

        <div className="mt-14 text-center">
          <Link
            href="/contact-jwl-marketing-aix-en-provence"
            className="inline-block rounded-[5px] border-2 border-gold bg-gold px-10 py-[15px] font-medium text-white transition-colors hover:border-[#b8952f] hover:bg-[#b8952f]"
          >
            Demande ton devis personnalisé
          </Link>
        </div>
      </section>
    </div>
  );
}
