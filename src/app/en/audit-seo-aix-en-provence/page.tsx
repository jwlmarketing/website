import { buildMetadata } from "@/lib/seo";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata = buildMetadata({
  path: "/audit-seo-aix-en-provence",
  locale: "en",
  title: "SEO Audit & Strategy: Wake up your website | JWL MARKETING",
  description: "Is your website stuck? Find out what's blocking your traffic and sales with a strategic SEO audit. Remote or in the PACA region.",
});

export default function Page() {
  return (
    <PlaceholderPage
      title="SEO Audit & Strategy"
      locale="en"
      altHref="/audit-seo-aix-en-provence"
    />
  );
}
