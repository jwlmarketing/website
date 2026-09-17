import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Site web SEO à Aix-en-Provence | JWL Marketing",
  description:
    "Site web SEO avec accompagnement sur 12 mois. Optimisation continue, visibilité Google et stratégie digitale pour développer votre activité.",
};

export default function Page() {
  return (
    <div>
      <SiteHeader locale="fr" href="/site-web-seo-aix-en-provence" />

      {/* Hero */}
      <div className="flex w-full flex-col items-start justify-between gap-10 bg-white px-[6%] pb-[60px] pt-[90px] lg:px-[9%]">
        <div className="max-w-[900px]">
          <p className="font-heading text-2xl font-bold italic text-[#c9846f]">
            JWL Booster
          </p>
          <h1 className="mt-2 font-heading text-4xl font-extrabold leading-[1.05] text-black lg:text-[56px] lg:leading-[1.05]">
            Un site web SEO avec plus de trafic et de clients.
          </h1>
          <p className="mt-6 text-2xl leading-[1.5] text-black">
            Pour les entreprises qui ont déjà une offre claire. En 90 jours,
            je pose la stratégie, l&apos;arborescence du site, les pages et
            le tracking google. Ensuite, je pilote mensuellement ton site
            sur-mesure pensé ton référencement, et je t&apos;accompagne sur
            12 mois pour en faire un vrai levier d&apos;acquisition.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://calendly.com/jwlm"
              target="_blank"
              rel="noopener"
              className="inline-block rounded-full bg-[#c9846f] px-8 py-[15px] font-semibold text-white transition-colors hover:bg-[#b8735f]"
            >
              Je réserve mon appel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
