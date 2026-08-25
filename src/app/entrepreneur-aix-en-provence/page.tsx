import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title:
    "Futur entrepreneur : tu anticipes tes dépenses, mais pas ton site web | JWL Marketing",
  description:
    "Tu as pensé au matériel, aux charges, à l'URSSAF. Mais ta présence digitale ? Chaque mois sans site optimisé, ce sont des clients qui partent chez tes concurrents.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <PlaceholderPage title="Futur entrepreneur" />;
}
