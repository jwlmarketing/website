import { buildMetadata } from "@/lib/seo";
import SiteHeader from "@/components/SiteHeader";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata = buildMetadata({
  path: "/ressources/kit-visibilite",
  locale: "fr",
  title: "Kit visibilité | JWL Marketing",
  description:
    "Kit visibilité : les bases du SEO et du référencement naturel pour apparaître sur Google et attirer des clients sans budget pub.",
});

export default function Page() {
  return (
    <div>
      <SiteHeader locale="fr" href="/ressources/kit-visibilite" />
      <PlaceholderPage title="Kit visibilité" />
    </div>
  );
}
