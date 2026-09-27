import { buildMetadata } from "@/lib/seo";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata = buildMetadata({
  path: "/developpement-commercial-aix-en-provence",
  locale: "en",
  title: "Sales Development: Stand out | JWL MARKETING",
  description: "Tired of slashing your prices? Discover a web sales strategy based on 10 years of client expertise. Available throughout France.",
});

export default function Page() {
  return (
    <PlaceholderPage
      title="Sales Development"
      locale="en"
      altHref="/developpement-commercial-aix-en-provence"
    />
  );
}
