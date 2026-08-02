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

export type DividerBlock = {
  type: "divider";
};

export type IconBoxItem = { icon?: string; title: string; text: string };
export type IconBoxBlock = {
  type: "iconBox";
  items: IconBoxItem[];
};

export type RatingBlock = {
  type: "rating";
  value: number; // 1-5
  label?: string;
};

export type TabItem = { label: string; content: string };
export type TabsBlock = {
  type: "tabs";
  items: TabItem[];
};

export type AccordionItem = { title: string; content: string };
export type AccordionBlock = {
  type: "accordion";
  items: AccordionItem[];
};

export type BlockquoteBlock = {
  type: "blockquote";
  quote: string;
  author?: string;
};

export type AlertBlock = {
  type: "alert";
  style: "info" | "success" | "warning";
  text: string;
};

export type ProgressItem = { label: string; percent: number };
export type ProgressBlock = {
  type: "progress";
  items: ProgressItem[];
};

export type PriceListItem = { name: string; price: string; description?: string };
export type PriceListBlock = {
  type: "priceList";
  title?: string;
  items: PriceListItem[];
};

export type GoogleMapBlock = {
  type: "googleMap";
  embedUrl: string;
};

export type SocialItem = { platform: string; url: string };
export type SocialIconsBlock = {
  type: "socialIcons";
  items: SocialItem[];
};

export type ButtonBlock = {
  type: "button";
  text: string;
  link: string;
  align: "left" | "center" | "right";
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
  | SpacerBlock
  | DividerBlock
  | IconBoxBlock
  | RatingBlock
  | TabsBlock
  | AccordionBlock
  | BlockquoteBlock
  | AlertBlock
  | ProgressBlock
  | PriceListBlock
  | GoogleMapBlock
  | SocialIconsBlock
  | ButtonBlock;

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
  divider: "Séparateur",
  iconBox: "Bloc icône + texte",
  rating: "Note en étoiles",
  tabs: "Onglets",
  accordion: "Accordéon générique",
  blockquote: "Citation",
  alert: "Message d'alerte",
  progress: "Barres de progression",
  priceList: "Liste de prix",
  googleMap: "Carte Google Maps",
  socialIcons: "Icônes réseaux sociaux",
  button: "Bouton simple",
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
    case "divider":
      return { type: "divider" };
    case "iconBox":
      return { type: "iconBox", items: [{ title: "", text: "" }] };
    case "rating":
      return { type: "rating", value: 5 };
    case "tabs":
      return { type: "tabs", items: [{ label: "", content: "" }] };
    case "accordion":
      return { type: "accordion", items: [{ title: "", content: "" }] };
    case "blockquote":
      return { type: "blockquote", quote: "" };
    case "alert":
      return { type: "alert", style: "info", text: "" };
    case "progress":
      return { type: "progress", items: [{ label: "", percent: 50 }] };
    case "priceList":
      return { type: "priceList", items: [{ name: "", price: "" }] };
    case "googleMap":
      return { type: "googleMap", embedUrl: "" };
    case "socialIcons":
      return { type: "socialIcons", items: [{ platform: "Instagram", url: "" }] };
    case "button":
      return { type: "button", text: "En savoir plus", link: "/contact-jwl-marketing-aix-en-provence", align: "center" };
  }
}
