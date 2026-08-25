import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Audit SEO & Stratégie : Réveille ton site web | JWL MARKETING",
  description:
    "Ton site fait du surplace ? Découvre ce qui bloque ton trafic et tes ventes grâce à un audit SEO stratégique. À distance ou en région PACA.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <PlaceholderPage title="Audit SEO & Stratégie" />;
}
