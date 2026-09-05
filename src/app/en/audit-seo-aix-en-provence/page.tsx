import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "SEO Audit & Strategy: Wake up your website | JWL MARKETING",
  description:
    "Is your website stuck? Find out what's blocking your traffic and sales with a strategic SEO audit. Remote or in the PACA region.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <PlaceholderPage
      title="SEO Audit & Strategy"
      locale="en"
      altHref="/audit-seo-aix-en-provence"
    />
  );
}
