const QUESTIONS = [
  "J'ai une boutique sur le cours Mirabeau, pourquoi faire du SEO ?",
  "Comment adapter une stratégie SEO à une zone d'activité comme le pôle d'activité de la Duranne ?",
  "Dans combien de temps le SEO m'apportera t-il des clients ?",
  "Pourquoi prendre un consultant SEO à Aix-en-Provence plutôt qu'une agence ?",
];

export default function Faq() {
  return (
    <div className="rounded-2xl bg-black px-6 py-14 text-center md:px-12">
      <h2 className="font-heading text-4xl font-bold text-[#c9846f] underline decoration-2 underline-offset-8">
        FAQ
      </h2>
      <div className="mx-auto mt-10 grid max-w-[1200px] gap-5 md:grid-cols-2">
        {QUESTIONS.map((q) => (
          <div
            key={q}
            className="flex min-h-[80px] items-center justify-center rounded-full bg-white px-8 py-4 text-[15px] font-medium text-black"
          >
            {q}
          </div>
        ))}
      </div>
    </div>
  );
}
