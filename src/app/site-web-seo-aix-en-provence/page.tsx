import Image from "next/image";
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
      <div className="flex w-full flex-col items-center justify-between gap-10 bg-white px-[6%] py-[60px] lg:flex-row lg:px-[9%]">
        <div className="max-w-[680px] flex-1">
          <h1 className="font-heading text-4xl font-bold leading-[1.1] lg:text-[54px] lg:leading-[1.1] text-black">
            <span className="text-[#c9846f]">JWL Booster</span>
            <span className="font-medium"> : Un site</span>
            <br />
            <span className="font-medium">web SEO avec plus de</span>
            <br />
            <span className="font-medium">trafic et de clients</span>
          </h1>
          <p className="mt-6 text-base leading-[1.6] text-black">
            Pour les entreprises qui ont déjà une offre claire. En 90 jours,
            je pose la stratégie, l&apos;arborescence du site, les pages et
            le tracking google. Ensuite, je pilote mensuellement ton site
            sur-mesure pensé ton référencement, et je t&apos;accompagne sur
            12 mois pour en faire un vrai levier d&apos;acquisition.
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[15px] font-medium text-black">
            {[
              "1 seule interlocutrice",
              "1 site web qui se transforme en outil",
              "100 % sur mesure",
              "100 % propriétaire de ton outil",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold text-xs text-white">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="rounded-full bg-[#c9846f] px-6 py-[15px] font-semibold text-white">
              À partir de 875 €
            </span>
            <a
              href="https://calendly.com/jwlm"
              target="_blank"
              rel="noopener"
              className="inline-block rounded-full bg-gold px-8 py-[15px] text-center font-semibold text-white transition-colors hover:bg-[#b8952f]"
            >
              Faire de mon site un outil qui attire les clients
            </a>
          </div>
        </div>
        <Image
          src="/images/hero-site-web-seo-duo.png"
          alt="Jodie Lapaillerie — Site web SEO JWL Marketing"
          width={612}
          height={752}
          priority
          className="h-auto w-full max-w-[460px] object-contain"
        />
      </div>
    </div>
  );
}
