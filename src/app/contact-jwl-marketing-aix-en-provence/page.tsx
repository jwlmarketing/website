import { buildMetadata } from "@/lib/seo";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata = buildMetadata({
  path: "/contact-jwl-marketing-aix-en-provence",
  locale: "fr",
  title: "Contact | JWL Marketing",
  description: "Contacte JWL Marketing pour ton projet SEO et visibilité digitale à Aix-en-Provence et partout en France.",
});

export default function Page() {
  return <PlaceholderPage title="Contact" altHref="/en/contact-jwl-marketing-aix-en-provence" />;
}
