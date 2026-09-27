import { buildMetadata } from "@/lib/seo";
import SiteHeader from "@/components/SiteHeader";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata = buildMetadata({
  path: "/cas-clients",
  locale: "fr",
  title: "Cas clients | JWL MARKETING",
  description: "Découvre les résultats obtenus par mes clients grâce à leur stratégie digitale : site web, SEO et visibilité Google.",
});

export default function Page() {
  return (
    <div>
      <SiteHeader locale="fr" href="/en/cas-clients" />
      <PlaceholderPage title="Cas clients" altHref="/en/cas-clients" />
    </div>
  );
}
