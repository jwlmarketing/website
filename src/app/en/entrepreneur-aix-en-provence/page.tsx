import { buildMetadata } from "@/lib/seo";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata = buildMetadata({
  path: "/entrepreneur-aix-en-provence",
  locale: "en",
  title: "Future entrepreneur: you plan your expenses, but not your website | JWL Marketing",
  description: "You've thought about equipment, costs, admin. But your digital presence? Every month without an optimized website, clients go to your competitors.",
});

export default function Page() {
  return (
    <PlaceholderPage
      title="Future entrepreneur"
      locale="en"
      altHref="/entrepreneur-aix-en-provence"
    />
  );
}
