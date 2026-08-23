import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Consultante Freelance SEO Paris | JWL Marketing",
  description:
    "Consultante Freelance SEO. Je transforme ta visibilité Google en acquisition client sur Paris. 10 ans de commerce B2B. Audit gratuit.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <PlaceholderPage title="Consultante Freelance SEO Paris" />;
}
