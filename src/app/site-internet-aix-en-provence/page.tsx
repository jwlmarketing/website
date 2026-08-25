import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Création site internet Aix-en-Provence | JWL Marketing",
  description:
    "Découvre la puissance d'un site web conçu par une experte commerciale. Structure saine, rédaction SEO-GEO et cité par l'IA. France entière.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <PlaceholderPage title="Création site internet" />;
}
