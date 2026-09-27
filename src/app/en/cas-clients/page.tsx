import { buildMetadata } from "@/lib/seo";
import SiteHeader from "@/components/SiteHeader";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata = buildMetadata({
  path: "/cas-clients",
  locale: "en",
  title: "Client Case Studies | JWL MARKETING",
  description: "Discover the results my clients achieved with their digital strategy: website, SEO and Google visibility.",
});

export default function Page() {
  return (
    <div>
      <SiteHeader locale="en" href="/cas-clients" />
      <PlaceholderPage title="Client Case Studies" locale="en" altHref="/cas-clients" />
    </div>
  );
}
