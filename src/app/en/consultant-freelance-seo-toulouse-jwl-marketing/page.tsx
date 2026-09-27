import { buildMetadata } from "@/lib/seo";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata = buildMetadata({
  path: "/consultant-freelance-seo-toulouse-jwl-marketing",
  locale: "en",
  title: "Freelance SEO Consultant Toulouse | JWL Marketing",
  description: "Freelance SEO Consultant in Toulouse. I turn your Google visibility into client acquisition. 10 years of B2B sales experience. Free audit.",
});

export default function Page() {
  return (
    <PlaceholderPage
      title="Freelance SEO Consultant Toulouse"
      locale="en"
      altHref="/consultant-freelance-seo-toulouse-jwl-marketing"
    />
  );
}
