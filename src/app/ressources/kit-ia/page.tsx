import { buildMetadata } from "@/lib/seo";
import SiteHeader from "@/components/SiteHeader";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata = buildMetadata({
  path: "/ressources/kit-ia",
  locale: "fr",
  title: "Kit IA et GEO | JWL Marketing",
  description:
    "Kit IA et GEO : prompts prêts à l'emploi et méthode pour gagner du temps et être cité par ChatGPT, Google et les",
});

export default function Page() {
  return (
    <div>
      <SiteHeader locale="fr" href="/ressources/kit-ia" />
      <PlaceholderPage title="Kit IA et GEO" />
    </div>
  );
}
