// English version not yet translated — reuses the French content for now.
import { buildMetadata } from "@/lib/seo";

export { default } from "@/app/politique-de-confidentialite/page";

// TODO (contenu, Jodie) : titre/description encore en français, à traduire.
export const metadata = buildMetadata({
  path: "/politique-de-confidentialite",
  locale: "en",
  title: "Politique de confidentialité | JWL Marketing",
  description: "TODO: ajouter une meta description (<=155 caracteres)",
});
