import Link from "next/link";

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

const FAQS = [
  "Comment trouver des clients ?",
  "Comment attirer des clients sur le long terme ?",
  "Pourquoi je n'ai pas de clients malgré mon site web ?",
  "Comment générer des leads facilement ?",
  "Peut-on trouver des clients sans commercial ?",
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-gold">✦</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Je transforme <span className="text-gold">ton site web</span> en
              outil qui attire des clients.
            </h1>
            <p className="mt-6 max-w-md text-neutral-600">
              Résultats mesurables, Aix-en-Provence. Transforme ta présence
              digitale en commercial terrain 24h/24, sur{" "}
              <span className="font-semibold">Google</span>.
            </p>
            <Link
              href="/contact-jwl-marketing-aix-en-provence"
              className="mt-8 inline-block rounded-full bg-gold px-8 py-3.5 text-sm font-semibold tracking-wide text-black"
            >
              AUDIT GRATUIT
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="flex h-72 w-72 items-center justify-center rounded-full bg-gradient-to-br from-amber-100 via-sky-100 to-rose-100 text-center text-sm text-neutral-500">
              Photo Jodie — JWL Marketing
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-neutral-100 bg-neutral-50 py-6">
        <p className="text-center text-xs uppercase tracking-wide text-neutral-400">
          Web Différence · Entrepreneuri&apos;elles · Dynamitz · Inovea
        </p>
      </div>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-center text-3xl font-semibold">
          Et si ton prochain client te trouvait sur Google ?
        </h2>
        <p className="mt-4 text-center text-lg text-neutral-600">
          Un site web qui travaille pour ton entreprise 24h/24 afin de
          générer de nouveaux clients
        </p>
        <div className="mt-8 space-y-5 text-neutral-700">
          <p>
            Beaucoup d&apos;entreprises suivent leurs visites, leurs clics ou
            leurs impressions. Moi, je regarde une seule chose : combien de
            prospects deviennent tes clients. Un bon référencement ne se
            mesure pas uniquement au trafic, mais aux résultats qu&apos;il
            génère.
          </p>
          <p>
            Aujourd&apos;hui, ton premier rendez-vous avec un prospect
            commence sur Google. Avant de te contacter, il recherche ton
            entreprise, consulte ton site internet et compare plusieurs
            professionnels.
          </p>
          <p>
            Chez JWL Marketing, je crée des sites internet pensés pour être
            visibles sur Google, offrir une expérience fluide à tes visiteurs
            et transformer cette visibilité en demandes de devis, appels et
            nouveaux clients.
          </p>
        </div>
      </section>

      {/* Résultats clients */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-semibold">
            Des résultats concrets
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                cat: "Assistance informatique",
                stat: "3 468",
                label: "vues de la fiche Google en 6 mois",
                sub: "63 appels en 6 mois",
                client: "Proxiclic Provence — Digne-les-Bains (04)",
              },
              {
                cat: "Gestion de patrimoine",
                stat: "1 350",
                label: "vues de la fiche Google en 4 mois",
                sub: "7 appels clients en 4 mois",
                client: "Groupe INOVEA — Aix-en-Provence (13)",
              },
              {
                cat: "Refonte stratégie de marque",
                stat: "En cours",
                label: "Site récemment lancé",
                sub: "Indicateurs pas encore assez complets",
                client: "Bout de Poils — Sèvres (91)",
              },
            ].map((r) => (
              <div
                key={r.client}
                className="rounded-2xl border border-neutral-100 bg-white p-6"
              >
                <p className="text-xs uppercase tracking-wide text-gold">
                  {r.cat}
                </p>
                <p className="mt-3 text-3xl font-semibold">{r.stat}</p>
                <p className="text-sm text-neutral-500">{r.label}</p>
                <p className="mt-1 text-sm font-medium">{r.sub}</p>
                <p className="mt-4 text-sm text-neutral-600">{r.client}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-neutral-400">
            Chiffres issus de Google Search Console et Google Business
            Profile, données juillet 2026.
          </p>
        </div>
      </section>

      {/* Garanties */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-semibold">
          Une collaboration, un partenariat gagnant-gagnant
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {GUARANTEES.map((g, i) => (
            <div key={g.title} className="rounded-2xl border border-neutral-100 p-8">
              <p className="text-xs uppercase tracking-wide text-gold">
                Garantie {i + 1}
              </p>
              <h3 className="mt-2 text-xl font-semibold">{g.title}</h3>
              <p className="mt-3 text-sm text-neutral-600">{g.text}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {g.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-gold">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/contact-jwl-marketing-aix-en-provence"
            className="inline-block rounded-full bg-black px-8 py-3.5 text-sm font-semibold text-white"
          >
            Demande ton offre
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-center text-xs uppercase tracking-wide text-gold">
            Questions
          </p>
          <h2 className="mt-2 text-center text-3xl font-semibold">
            FAQ : Foire Aux Questions
          </h2>
          <p className="mt-3 text-center text-sm text-neutral-500">
            Retrouve les réponses aux questions les plus fréquentes sur le
            Marketing Digital
          </p>
          <div className="mt-10 divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
            {FAQS.map((q) => (
              <details key={q} className="group p-5">
                <summary className="cursor-pointer list-none font-medium">
                  {q}
                </summary>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
