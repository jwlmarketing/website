import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import categoriesJson from "../../content/categories.json";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type BlogCategory = {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  color: string;
  order: number;
};

export type BlogStatus = "draft" | "published";

export type BlogFrontmatter = {
  title: string;
  slug: string;
  excerpt?: string;
  category?: string; // category slug
  tags?: string[];
  coverImage?: string;
  coverAlt?: string;
  status: BlogStatus;
  publishedAt?: string; // ISO date
  seoTitle?: string;
  seoDescription?: string;
};

export type BlogPost = BlogFrontmatter & {
  content: string; // raw markdown
  html: string; // rendered html
  updatedAt: string;
  category: BlogCategory | null;
};

export const CATEGORIES: BlogCategory[] = categoriesJson as BlogCategory[];

function ensureDir() {
  if (!fs.existsSync(BLOG_DIR)) fs.mkdirSync(BLOG_DIR, { recursive: true });
}

function fileSlugs(): string[] {
  ensureDir();
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

function readOne(slug: string): BlogPost | null {
  const file = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const fm = data as BlogFrontmatter;
  const stat = fs.statSync(file);
  const category = CATEGORIES.find((c) => c.slug === fm.category) || null;
  return {
    ...fm,
    slug: fm.slug || slug,
    tags: fm.tags || [],
    status: fm.status || "draft",
    content,
    html: marked.parse(content, { async: false }) as string,
    updatedAt: stat.mtime.toISOString(),
    category,
  };
}

export function getAllPosts(): BlogPost[] {
  return fileSlugs()
    .map((s) => readOne(s))
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => (b.publishedAt || b.updatedAt).localeCompare(a.publishedAt || a.updatedAt));
}

export function getPost(slug: string): BlogPost | null {
  return readOne(slug);
}

export async function listPublishedPosts(opts: { page: number; perPage: number; cat?: string }) {
  const now = new Date().toISOString();
  let posts = getAllPosts().filter((p) => p.status === "published" && (!p.publishedAt || p.publishedAt <= now));
  if (opts.cat) posts = posts.filter((p) => p.category?.slug === opts.cat);
  const total = posts.length;
  const start = (opts.page - 1) * opts.perPage;
  const paged = posts.slice(start, start + opts.perPage).map((p) => ({
    id: p.slug,
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt || null,
    content: { html: p.html },
    coverImage: p.coverImage || null,
    coverAlt: p.coverAlt || null,
    category: p.category,
    publishedAt: p.publishedAt || null,
  }));
  return { posts: paged, total, categories: CATEGORIES.sort((a, b) => a.order - b.order) };
}

export async function getPostBySlug(slug: string) {
  const post = getPost(slug);
  if (!post) return { post: null, related: [] };
  const now = new Date().toISOString();
  const related = getAllPosts()
    .filter(
      (p) =>
        p.slug !== slug &&
        p.status === "published" &&
        (!p.publishedAt || p.publishedAt <= now) &&
        p.category?.slug === post.category?.slug
    )
    .slice(0, 3)
    .map((p) => ({ id: p.slug, slug: p.slug, title: p.title }));

  return {
    post: {
      id: post.slug,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt || null,
      content: { html: post.html },
      coverImage: post.coverImage || null,
      coverAlt: post.coverAlt || null,
      status: post.status,
      category: post.category,
      tags: (post.tags || []).map((t) => ({ id: t, name: t, slug: t })),
      metaTitle: post.seoTitle || null,
      metaDesc: post.seoDescription || null,
      canonicalUrl: null,
      ogImage: post.coverImage || null,
      noIndex: false,
      publishedAt: post.publishedAt || null,
      updatedAt: post.updatedAt,
    },
    related,
  };
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function savePost(input: {
  originalSlug?: string; // when editing and slug changes
  title: string;
  slug?: string;
  excerpt?: string;
  category?: string;
  tags?: string;
  coverImage?: string;
  coverAlt?: string;
  status: BlogStatus;
  publishedAt?: string;
  seoTitle?: string;
  seoDescription?: string;
  content: string;
}): string {
  ensureDir();
  const slug = slugify(input.slug || input.title);
  const fm: BlogFrontmatter = {
    title: input.title,
    slug,
    excerpt: input.excerpt || "",
    category: input.category || "",
    tags: (input.tags || "")
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean),
    coverImage: input.coverImage || "",
    coverAlt: input.coverAlt || "",
    status: input.status,
    publishedAt: input.status === "published" ? input.publishedAt || new Date().toISOString() : input.publishedAt || "",
    seoTitle: input.seoTitle || "",
    seoDescription: input.seoDescription || "",
  };
  const file = matter.stringify(input.content, fm);
  fs.writeFileSync(path.join(BLOG_DIR, `${slug}.mdx`), file, "utf8");

  if (input.originalSlug && input.originalSlug !== slug) {
    const oldFile = path.join(BLOG_DIR, `${input.originalSlug}.mdx`);
    if (fs.existsSync(oldFile)) fs.unlinkSync(oldFile);
  }
  return slug;
}

export function deletePost(slug: string) {
  const file = path.join(BLOG_DIR, `${slug}.mdx`);
  if (fs.existsSync(file)) fs.unlinkSync(file);
}
