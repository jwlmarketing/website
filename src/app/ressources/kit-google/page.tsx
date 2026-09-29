import { buildMetadata } from "@/lib/seo";
import SiteHeader from "@/components/SiteHeader";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata = buildMetadata({
  path: "/ressources/kit-google",
  locale: "fr",
  title: "Kit Google Business Profile | JWL Marketing",
  description:
    "Kit Google Business Profile : checklist, modèles et vidéos pour optimiser ta fiche, gagner en visibilité locale et recevoir",
});

export default function Page() {
  return (
    <div>
      <SiteHeader locale="fr" href="/ressources/kit-google" />
      <PlaceholderPage title="Kit Google Business Profile" />
    </div>
  );
}
