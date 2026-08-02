export type HeroBlock = {
  type: "hero";
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  imageUrl?: string;
};

export type HeadingBlock = {
  type: "heading";
  kicker?: string;
  title: string;
  accent?: string;
  subtext?: string;
};

export type TextBlock = {
  type: "text";
  text: string; // paragraphs separated by blank lines
};

export type ImageBlock = {
  type: "image";
  url: string;
  alt?: string;
  caption?: string;
};

export type CtaBlock = {
  type: "cta";
  text?: string;
  buttonText: string;
  buttonLink: string;
};

export type FaqItem = { q: string; a: string };
export type FaqBlock = {
  type: "faq";
  items: FaqItem[];
};

export type CardItem = { title: string; text: string };
export type CardsBlock = {
  type: "cards";
  items: CardItem[];
};

export type Block =
  | HeroBlock
  | HeadingBlock
  | TextBlock
  | ImageBlock
  | CtaBlock
  | FaqBlock
  | CardsBlock;

export const BLOCK_LABELS: Record<Block["type"], string> = {
  hero: "En-tête (Hero)",
  heading: "Titre de section",
  text: "Texte",
  image: "Image",
  cta: "Bouton d'appel à l'action",
  faq: "FAQ",
  cards: "Cartes / colonnes",
};

export function emptyBlock(type: Block["type"]): Block {
  switch (type) {
    case "hero":
      return { type: "hero", title: "" };
    case "heading":
      return { type: "heading", title: "" };
    case "text":
      return { type: "text", text: "" };
    case "image":
      return { type: "image", url: "" };
    case "cta":
      return { type: "cta", buttonText: "En savoir plus", buttonLink: "/contact-jwl-marketing-aix-en-provence" };
    case "faq":
      return { type: "faq", items: [{ q: "", a: "" }] };
    case "cards":
      return { type: "cards", items: [{ title: "", text: "" }] };
  }
}
