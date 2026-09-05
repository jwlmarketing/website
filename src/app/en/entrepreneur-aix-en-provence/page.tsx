import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title:
    "Future entrepreneur: you plan your expenses, but not your website | JWL Marketing",
  description:
    "You've thought about equipment, costs, admin. But your digital presence? Every month without an optimized website, clients go to your competitors.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Future entrepreneur"
      locale="en"
      altHref="/entrepreneur-aix-en-provence"
    />
  );
}
