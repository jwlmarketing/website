import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Mes réalisations | JWL MARKETING",
  description:
    "Découvre les sites web et projets digitaux réalisés par JWL Marketing pour ses clients à Aix-en-Provence et partout en France.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <div>
      <SiteHeader locale="fr" href="/en/realisations" />
      <PlaceholderPage title="Mes réalisations" altHref="/en/realisations" />
    </div>
  );
}
