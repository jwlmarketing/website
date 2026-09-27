import { buildMetadata } from "@/lib/seo";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata = buildMetadata({
  path: "/audit-seo-aix-en-provence",
  locale: "fr",
  title: "Audit SEO & Stratégie : Réveille ton site web | JWL MARKETING",
  description: "Ton site fait du surplace ? Découvre ce qui bloque ton trafic et tes ventes grâce à un audit SEO stratégique. À distance ou en région PACA.",
});

export default function Page() {
  return <PlaceholderPage title="Audit SEO & Stratégie" altHref="/en/audit-seo-aix-en-provence" />;
}
