import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Aides à la digitalisation | JWL MARKETING",
  description:
    "Découvre les dispositifs d'aide à la digitalisation et les avantages fiscaux possibles pour financer la création de ton site web.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <div>
      <SiteHeader locale="fr" href="/en/aides-digitalisation" />
      <PlaceholderPage title="Aides à la digitalisation" altHref="/en/aides-digitalisation" />
    </div>
  );
}
