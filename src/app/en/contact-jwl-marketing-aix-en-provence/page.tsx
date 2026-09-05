import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Contact | JWL Marketing",
  description:
    "Contact JWL Marketing for your SEO and digital visibility project in Aix-en-Provence and throughout France.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Contact"
      locale="en"
      altHref="/contact-jwl-marketing-aix-en-provence"
    />
  );
}
