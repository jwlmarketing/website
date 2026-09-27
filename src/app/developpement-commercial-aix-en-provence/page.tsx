import { buildMetadata } from "@/lib/seo";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata = buildMetadata({
  path: "/developpement-commercial-aix-en-provence",
  locale: "fr",
  title: "Développement Commercial : Démarque toi | JWL MARKETING",
  description: "Marre de brader tes prix ? Découvre une stratégie commerciale web basée sur 10 ans d'expertise clients. Partout en France.",
});

export default function Page() {
  return <PlaceholderPage title="Développement Commercial" altHref="/en/developpement-commercial-aix-en-provence" />;
}
