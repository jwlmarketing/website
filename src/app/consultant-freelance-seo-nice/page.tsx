import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Consultante Freelance SEO Nice | JWL Marketing",
  description:
    "Consultante Freelance SEO à Nice. Je transforme ta visibilité Google en acquisition client. 10 ans de commerce B2B. Audit gratuit.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <PlaceholderPage title="Consultante Freelance SEO Nice" />;
}
