import { buildMetadata } from "@/lib/seo";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata = buildMetadata({
  path: "/entrepreneur-aix-en-provence",
  locale: "fr",
  title: "Créer son site web avant de se lancer | JWL Marketing",
  description: "Tu as pensé au matériel, aux charges, à l'URSSAF. Mais ta présence digitale ? Chaque mois sans site optimisé, des clients partent chez la concurrence.",
});

export default function Page() {
  return <PlaceholderPage title="Futur entrepreneur" altHref="/en/entrepreneur-aix-en-provence" />;
}
