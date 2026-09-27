import { buildMetadata } from "@/lib/seo";
import SiteHeader from "@/components/SiteHeader";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata = buildMetadata({
  path: "/realisations",
  locale: "en",
  title: "My Work | JWL MARKETING",
  description: "Discover the websites and digital projects delivered by JWL Marketing for clients in Aix-en-Provence and across France.",
});

export default function Page() {
  return (
    <div>
      <SiteHeader locale="en" href="/realisations" />
      <PlaceholderPage title="My Work" locale="en" altHref="/realisations" />
    </div>
  );
}
