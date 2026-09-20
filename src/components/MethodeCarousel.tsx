import Image from "next/image";

const STEPS = [
  {
    image: "/images/conception-site-web.png",
    width: 466,
    height: 346,
    alt: "Je comprends comment tes clients te recherchent — JWL Marketing",
    title: "Je comprends comment tes clients te recherchent",
    text: "Étude de ton activité, de tes concurrents et des mots-clés utilisés sur Google.",
    rotate: "md:-rotate-3",
  },
  {
    image: "/images/site-web-sur-mesure.png",
    width: 466,
    height: 344,
    alt: "Je crée un site web pensé pour être trouvé — JWL Marketing",
    title: "Je crée un site web pensé pour être trouvé",
    text: "Structure, contenus, pages de services et optimisation SEO dès la création.",
    rotate: "md:rotate-0",
  },
  {
    image: "/images/jwl-methode-analyse-search-console.png",
    width: 466,
    height: 346,
    alt: "J'analyse les données et j'améliore la connexion à Google Search Console — JWL Marketing",
    title:
      "J'analyse les données et j'améliore la connexion à Google Search Console",
    text: "Pour comprendre le comportement des visiteurs et identifier les opportunités d'amélioration.",
    rotate: "md:rotate-3",
  },
];

export default function MethodeCarousel() {
  return (
    <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-6 md:flex-row md:justify-center md:gap-0">
      {STEPS.map((step, i) => (
        <div
          key={i}
          className={`group relative flex flex-col overflow-hidden rounded-2xl bg-[#141414] text-white shadow-md transition-all duration-300 ease-out hover:z-30 hover:-translate-y-4 hover:rotate-0 hover:shadow-2xl md:w-[340px] ${step.rotate} ${
            i > 0 ? "md:-ml-10" : ""
          }`}
        >
          <Image
            src={step.image}
            alt={step.alt}
            width={step.width}
            height={step.height}
            className="h-[220px] w-full object-cover"
          />
          <div className="p-4 text-left">
            <p className="text-[15px] font-semibold leading-[22px]">
              {step.title}
            </p>
            <p className="mt-2 text-[14px] leading-[22px] text-white/80">
              {step.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
