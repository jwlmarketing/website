import { buildMetadata } from "@/lib/seo";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata = buildMetadata({
  path: "/consultant-freelance-seo-toulouse-jwl-marketing",
  locale: "fr",
  title: "Consultante Freelance SEO Toulouse | JWL Marketing",
  description: "Consultante Freelance SEO à Toulouse. Je transforme ta visibilité Google en acquisition client. 10 ans de commerce B2B. Audit gratuit.",
});

export default function Page() {
  return <PlaceholderPage title="Consultante Freelance SEO Toulouse" altHref="/en/consultant-freelance-seo-toulouse-jwl-marketing" />;
}
