import { buildMetadata } from "@/lib/seo";
import SiteHeader from "@/components/SiteHeader";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata = buildMetadata({
  path: "/aides-digitalisation",
  locale: "fr",
  title: "Aides à la digitalisation | JWL MARKETING",
  description: "Découvre les dispositifs d'aide à la digitalisation et les avantages fiscaux possibles pour financer la création de ton site web.",
});

export default function Page() {
  return (
    <div>
      <SiteHeader locale="fr" href="/en/aides-digitalisation" />
      <PlaceholderPage title="Aides à la digitalisation" altHref="/en/aides-digitalisation" />
    </div>
  );
}
