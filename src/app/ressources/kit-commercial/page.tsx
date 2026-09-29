import { buildMetadata } from "@/lib/seo";
import SiteHeader from "@/components/SiteHeader";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata = buildMetadata({
  path: "/ressources/kit-commercial",
  locale: "fr",
  title: "Kit développement commercial | JWL Marketing",
  description:
    "Kit développement commercial : scripts, modèles et méthode pour prospecter, relancer et transformer tes contacts en clients.",
});

export default function Page() {
  return (
    <div>
      <SiteHeader locale="fr" href="/ressources/kit-commercial" />
      <PlaceholderPage title="Kit développement commercial" />
    </div>
  );
}
