{/*
  Snippet retiré de la homepage (src/app/page.tsx) le 2026-09-19, à réutiliser
  plus tard sur une autre page. Dépendances : FadeUp, GoogleColors,
  RotatingKeyword (tous déjà importés dans page.tsx à l'origine).
*/}

{/* Quand un client recherche ton métier, apparais-tu ? */}
<section className="px-[5%] py-16 text-center">
  <FadeUp>
    <h2 className="mx-auto max-w-[900px] font-heading text-3xl font-medium leading-[1.25] text-black md:text-[44px] md:leading-[1.3]">
      Quand un client recherche ton métier,{" "}
      <span className="italic text-[#c9846f]">apparais-tu</span>{" "}
      <span className="text-[#c9846f]">?</span>
    </h2>
    <p className="mx-auto mt-3 max-w-[700px] text-base text-[#555] md:text-lg">
      Google{" "}attire l&apos;attention. Ton site crée la confiance. Ta
      stratégie transforme les visiteurs en clients.
    </p>
  </FadeUp>

  <FadeUp delay={0.15} className="mx-auto mt-10 max-w-[900px] rounded-2xl bg-black p-8 md:p-12">
    <div className="mx-auto flex max-w-[700px] flex-col items-center gap-3">
      <span className="text-3xl md:text-4xl">
        <GoogleColors />
      </span>
      <div className="flex w-full items-center gap-2 rounded-full border border-[#e0e0e0] bg-white px-6 py-4 shadow-sm">
        <p className="flex min-w-0 flex-1 items-center gap-1.5 text-left text-sm text-[#333] md:text-base">
          <RotatingKeyword
            className="font-semibold text-[#c9846f]"
            interval={1900}
            words={[
              "électricien",
              "plombier",
              "robe rouge",
              "costume enfant",
              "consultant SEO",
              "avocat",
              "coach sportif",
              "boulangerie",
              "agence immobilière",
              "dentiste",
              "restaurant",
              "fleuriste",
              "garagiste",
              "coiffeur",
              "kinésithérapeute",
              "expert-comptable",
              "photographe",
              "traiteur",
            ]}
          />
          <span className="shrink-0">à</span>
          <RotatingKeyword
            className="truncate"
            showIcon={false}
            interval={1900}
            startDelay={950}
            words={[
              "Aix-en-Provence",
              "Marseille",
              "Nice",
              "Paris",
              "Montpellier",
              "Bordeaux",
              "Toulouse",
              "Lyon",
              "Nantes",
              "Lille",
              "Strasbourg",
              "Grenoble",
            ]}
          />
        </p>
      </div>
    </div>

    <div className="mx-auto mt-10 max-w-[820px] space-y-5 text-left text-[15px] leading-relaxed text-white/85 md:text-base">
      <p>
        <strong className="text-white">
          Aujourd&apos;hui, près de 85 % des consommateurs effectuent une
          recherche en ligne avant de contacter une entreprise.
        </strong>{" "}
        Ils ne connaissent ni ton nom, ni l&apos;existence de ton
        entreprise. Ils recherchent simplement un produit ou un service.
        Si ton entreprise n&apos;apparaît pas dans les résultats,{" "}
        Google{" "}proposera tes concurrents.
      </p>
    </div>
  </FadeUp>
</section>
