import { buildMetadata } from "@/lib/seo";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata = buildMetadata({
  path: "/tarifs",
  locale: "en",
  title: "Pricing | JWL Marketing",
  description: "JWL Marketing pricing: SEO audit, Google Business Profile listing, website and support packages.",
});

export default function Page() {
  return <PlaceholderPage title="Pricing" locale="en" altHref="/tarifs" />;
}
