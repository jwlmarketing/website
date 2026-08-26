import type { Metadata } from "next";
import NewsletterCta from "@/components/NewsletterCta";

export const metadata: Metadata = {
  title: "Newsletter | JWL Marketing",
  description:
    "Inscris-toi à la newsletter JWL Marketing pour recevoir des conseils SEO et visibilité digitale.",
};

export default function NewsletterPage() {
  return (
    <div className="px-5 py-16 md:py-24">
      <NewsletterCta />
    </div>
  );
}
