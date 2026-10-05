import { buildMetadata } from "@/lib/seo";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata = buildMetadata({
  path: "/contact",
  locale: "en",
  title: "Contact | JWL Marketing",
  description: "Contact JWL Marketing for your SEO and digital visibility project in Aix-en-Provence and throughout France.",
});

export default function Page() {
  return (
    <PlaceholderPage
      title="Contact"
      locale="en"
      altHref="/contact"
    />
  );
}
