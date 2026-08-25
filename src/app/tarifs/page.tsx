import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Tarifs | JWL Marketing",
  description:
    "Grille tarifaire des prestations JWL Marketing : audit SEO, fiche Google Business Profile, site web et accompagnement.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <PlaceholderPage title="Tarifs" />;
}
