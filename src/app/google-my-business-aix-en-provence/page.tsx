import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Optimisation Fiche Google Business Profile | JWL MARKETING",
  description:
    "Ta fiche Google my business est à l'abandon ? Reprends le contrôle de ta visibilité locale. Avec moi et partout en France.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <PlaceholderPage title="Optimisation Fiche Google Business Profile" />;
}
