import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Sales Development: Stand out | JWL MARKETING",
  description:
    "Tired of slashing your prices? Discover a web sales strategy based on 10 years of client expertise. Available throughout France.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Sales Development"
      locale="en"
      altHref="/developpement-commercial-aix-en-provence"
    />
  );
}
