import { buildMetadata } from "@/lib/seo";
import SiteHeader from "@/components/SiteHeader";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata = buildMetadata({
  path: "/ressources/kit-reseaux",
  locale: "fr",
  title: "Kit réseaux sociaux | JWL Marketing",
  description:
    "Kit réseaux sociaux : idées de posts, calendrier éditorial et modèles pour publier régulièrement et attirer de vrais clients.",
});

export default function Page() {
  return (
    <div>
      <SiteHeader locale="fr" href="/ressources/kit-reseaux" />
      <PlaceholderPage title="Kit réseaux sociaux" />
    </div>
  );
}
