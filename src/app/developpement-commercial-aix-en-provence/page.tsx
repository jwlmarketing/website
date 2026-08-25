import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Développement Commercial : Démarque toi | JWL MARKETING",
  description:
    "Marre de brader tes prix ? Découvre une stratégie commerciale web basée sur 10 ans d'expertise clients. Partout en France.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <PlaceholderPage title="Développement Commercial" />;
}
