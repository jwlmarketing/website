import { buildMetadata } from "@/lib/seo";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata = buildMetadata({
  path: "/tarifs",
  locale: "fr",
  title: "Tarifs | JWL Marketing",
  description: "Grille tarifaire des prestations JWL Marketing : audit SEO, fiche Google Business Profile, site web et accompagnement.",
});

export default function Page() {
  return <PlaceholderPage title="Tarifs" altHref="/en/tarifs" />;
}
