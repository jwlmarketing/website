import { buildMetadata } from "@/lib/seo";
import SiteHeader from "@/components/SiteHeader";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata = buildMetadata({
  path: "/ressources/ateliers",
  locale: "fr",
  title: "Ateliers marketing digital | JWL Marketing",
  description:
    "Ateliers marketing digital : Google Business Profile, SEO, GEO, IA, réseaux sociaux.",
});

export default function Page() {
  return (
    <div>
      <SiteHeader locale="fr" href="/ressources/ateliers" />
      <PlaceholderPage title="Ateliers marketing digital" />
    </div>
  );
}
