import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Digitalisation grants | JWL MARKETING",
  description:
    "Discover the grants and tax benefits available to help fund your website creation.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <div>
      <SiteHeader locale="en" href="/aides-digitalisation" />
      <PlaceholderPage title="Digitalisation grants" locale="en" altHref="/aides-digitalisation" />
    </div>
  );
}
