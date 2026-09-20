import fs from "fs";
import path from "path";
import type { Block } from "@/lib/blocks/types";

const DIR = path.join(process.cwd(), "content/realisations");
const INDEX_SLUG = "_index";

export type RealisationStatus = "draft" | "published";

export type RealisationPage = {
  slug: string;
  title: string;
  coverImage?: string;
  showInCarousel: boolean;
  metaTitle?: string;
  metaDescription?: string;
  status: RealisationStatus;
  blocks: Block[];
  updatedAt: string;
};

function ensureDir() {
  if (!fs.existsSync(DIR)) fs.mkdirSync(DIR, { recursive: true });
}

function fileFor(slug: string) {
  return path.join(DIR, `${slug}.json`);
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function readOne(slug: string): RealisationPage | null {
  const file = fileFor(slug);
  if (!fs.existsSync(file)) return null;
  const raw = JSON.parse(fs.readFileSync(file, "utf8")) as Omit<RealisationPage, "slug" | "updatedAt">;
  const stat = fs.statSync(file);
  return {
    slug,
    title: raw.title || "",
    coverImage: raw.coverImage || "",
    showInCarousel: raw.showInCarousel !== false,
    metaTitle: raw.metaTitle || "",
    metaDescription: raw.metaDescription || "",
    status: raw.status || "draft",
    blocks: raw.blocks || [],
    updatedAt: stat.mtime.toISOString(),
  };
}

export function getIndexPage(): RealisationPage {
  return (
    readOne(INDEX_SLUG) || {
      slug: INDEX_SLUG,
      title: "Mes réalisations",
      status: "published",
      showInCarousel: true,
      blocks: [],
      updatedAt: new Date().toISOString(),
    }
  );
}

export function getAllCaseStudies(): RealisationPage[] {
  ensureDir();
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".json") && f !== `${INDEX_SLUG}.json`)
    .map((f) => readOne(f.replace(/\.json$/, "")))
    .filter((p): p is RealisationPage => p !== null)
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}

export function getCaseStudy(slug: string): RealisationPage | null {
  if (slug === INDEX_SLUG) return null;
  return readOne(slug);
}

export function listPublishedCaseStudies(): RealisationPage[] {
  return getAllCaseStudies().filter((p) => p.status === "published");
}

export function listCarouselCaseStudies(): RealisationPage[] {
  return listPublishedCaseStudies().filter((p) => p.showInCarousel);
}

export function saveIndexPage(input: {
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  blocks: Block[];
}) {
  ensureDir();
  const data = {
    title: input.title,
    metaTitle: input.metaTitle || "",
    metaDescription: input.metaDescription || "",
    status: "published" as const,
    blocks: input.blocks,
  };
  fs.writeFileSync(fileFor(INDEX_SLUG), JSON.stringify(data, null, 2) + "\n", "utf8");
}

export function saveCaseStudy(input: {
  originalSlug?: string;
  title: string;
  slug?: string;
  coverImage?: string;
  showInCarousel: boolean;
  metaTitle?: string;
  metaDescription?: string;
  status: RealisationStatus;
  blocks: Block[];
}): string {
  ensureDir();
  const slug = slugify(input.slug || input.title);
  if (!slug || slug === INDEX_SLUG) {
    throw new Error("Slug invalide");
  }
  const data = {
    title: input.title,
    coverImage: input.coverImage || "",
    showInCarousel: input.showInCarousel,
    metaTitle: input.metaTitle || "",
    metaDescription: input.metaDescription || "",
    status: input.status,
    blocks: input.blocks,
  };
  fs.writeFileSync(fileFor(slug), JSON.stringify(data, null, 2) + "\n", "utf8");

  if (input.originalSlug && input.originalSlug !== slug) {
    const oldFile = fileFor(input.originalSlug);
    if (fs.existsSync(oldFile)) fs.unlinkSync(oldFile);
  }
  return slug;
}

export function deleteCaseStudy(slug: string) {
  const file = fileFor(slug);
  if (fs.existsSync(file)) fs.unlinkSync(file);
}
