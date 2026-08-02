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

export type HtmlBlock = {
  type: "html";
  html: string;
};

export type GalleryImage = { url: string; alt?: string };
export type GalleryBlock = {
  type: "gallery";
  title?: string;
  images: GalleryImage[];
  columns: 2 | 3 | 4;
};

export type VideoBlock = {
  type: "video";
  youtubeId: string;
  title?: string;
};

export type TestimonialItem = { name: string; text: string; role?: string; avatarUrl?: string };
export type TestimonialsBlock = {
  type: "testimonials";
  title?: string;
  items: TestimonialItem[];
};

export type IconListBlock = {
  type: "iconList";
  title?: string;
  items: string[];
};

export type StatItem = { value: string; label: string };
export type StatsBlock = {
  type: "stats";
  items: StatItem[];
};

export type SpacerBlock = {
  type: "spacer";
  height: "small" | "medium" | "large";
};

export type Block =
  | HeroBlock
  | HeadingBlock
  | TextBlock
  | ImageBlock
  | CtaBlock
  | FaqBlock
  | CardsBlock
  | HtmlBlock
  | GalleryBlock
  | VideoBlock
  | TestimonialsBlock
  | IconListBlock
  | StatsBlock
  | SpacerBlock;

export const BLOCK_LABELS: Record<Block["type"], string> = {
  hero: "En-tête (Hero)",
  heading: "Titre de section",
  text: "Texte",
  image: "Image",
  cta: "Bouton d'appel à l'action",
  faq: "FAQ",
  cards: "Cartes / colonnes",
  html: "HTML personnalisé",
  gallery: "Galerie photo",
  video: "Vidéo YouTube",
  testimonials: "Témoignages / avis",
  iconList: "Liste à coche",
  stats: "Chiffres clés",
  spacer: "Espacement",
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
    case "html":
      return { type: "html", html: "" };
    case "gallery":
      return { type: "gallery", images: [{ url: "" }], columns: 3 };
    case "video":
      return { type: "video", youtubeId: "" };
    case "testimonials":
      return { type: "testimonials", items: [{ name: "", text: "" }] };
    case "iconList":
      return { type: "iconList", items: [""] };
    case "stats":
      return { type: "stats", items: [{ value: "", label: "" }] };
    case "spacer":
      return { type: "spacer", height: "medium" };
  }
}
