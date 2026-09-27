import { buildMetadata } from "@/lib/seo";
import SiteHeader from "@/components/SiteHeader";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata = buildMetadata({
  path: "/aides-digitalisation",
  locale: "en",
  title: "Digitalisation grants | JWL MARKETING",
  description: "Discover the grants and tax benefits available to help fund your website creation.",
});

export default function Page() {
  return (
    <div>
      <SiteHeader locale="en" href="/aides-digitalisation" />
      <PlaceholderPage title="Digitalisation grants" locale="en" altHref="/aides-digitalisation" />
    </div>
  );
}
