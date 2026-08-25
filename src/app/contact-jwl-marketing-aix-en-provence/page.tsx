import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Contact | JWL Marketing",
  description:
    "Contacte JWL Marketing pour ton projet SEO et visibilité digitale à Aix-en-Provence et partout en France.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <PlaceholderPage title="Contact" />;
}
