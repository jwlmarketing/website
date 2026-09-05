import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Pricing | JWL Marketing",
  description:
    "JWL Marketing pricing: SEO audit, Google Business Profile listing, website and support packages.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <PlaceholderPage title="Pricing" locale="en" altHref="/tarifs" />;
}
