// Relay client for the JWL o2switch CMS/contact/blog API.
// Vercel serverless functions cannot reach o2switch MySQL directly over
// the network (outbound MySQL port times out in production), so every
// read/write goes through an HTTPS/HTTP fetch() to a PHP script hosted
// on o2switch itself, which talks to MySQL over localhost.
const RELAY_URL = "http://lajo1183.odns.fr/jwl-cms-api.php";
const RELAY_SECRET = process.env.O2SWITCH_RELAY_SECRET || "";

export type CmsCategory = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  color: string;
  metaTitle: string | null;
  metaDesc: string | null;
  order: number;
  visible: boolean;
};

export type CmsTag = { id: string; name: string; slug: string };

export type CmsPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: unknown;
  coverImage: string | null;
  coverAlt: string | null;
  status: "draft" | "published" | "scheduled" | "trash";
  isFeatured: boolean;
  allowComments: boolean;
  viewCount: number;
  categoryId: string | null;
  category: CmsCategory | null;
  tags: CmsTag[];
  metaTitle: string | null;
  metaDesc: string | null;
  seoKeywords: string | null;
  canonicalUrl: string | null;
  ogImage: string | null;
  noIndex: boolean;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CmsPage = {
  id: string;
  slug: string;
  title: string;
  metaTitle: string | null;
  metaDesc: string | null;
  content: unknown;
  published: boolean;
  groupId: string | null;
  order: number;
  createdAt: string;
  updatedAt: string;
};

async function relayGet<T>(action: string, params: Record<string, string | number> = {}): Promise<T> {
  const qs = new URLSearchParams({ action, ...Object.fromEntries(Object.entries(params).map(([k, v]) => [k, String(v)])) });
  const res = await fetch(`${RELAY_URL}?${qs.toString()}`, {
    headers: { "X-NL-Secret": RELAY_SECRET },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`CMS relay error (${action}): ${res.status}`);
  return res.json();
}

async function relayPost<T>(action: string, data: Record<string, string>): Promise<T> {
  const res = await fetch(`${RELAY_URL}?action=${action}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "X-NL-Secret": RELAY_SECRET,
    },
    body: new URLSearchParams(data),
  });
  const json = await res.json();
  if (!res.ok) {
    const err = new Error(json?.error || `CMS relay error (${action}): ${res.status}`) as Error & { status?: number };
    err.status = res.status;
    throw err;
  }
  return json;
}

export async function listPublishedPosts(opts: { page: number; perPage: number; cat?: string }) {
  return relayGet<{ posts: CmsPost[]; total: number; categories: CmsCategory[] }>("post_list", {
    page: opts.page,
    perPage: opts.perPage,
    ...(opts.cat ? { cat: opts.cat } : {}),
  });
}

export async function getPostBySlug(slug: string) {
  return relayGet<{ post: CmsPost | null; related: CmsPost[] }>("post_get", { slug });
}

export async function getPageBySlug(slug: string) {
  return relayGet<{ page: CmsPage | null }>("page_get", { slug });
}

export async function listPublishedPages() {
  return relayGet<{ pages: CmsPage[] }>("page_list_published");
}

export async function listPublishedPostsForLlms(limit = 200) {
  return relayGet<{ posts: CmsPost[] }>("post_list_published", { limit });
}

export async function createContactSubmission(data: {
  name: string;
  activity?: string | null;
  phone?: string | null;
  email: string;
  website?: string | null;
  message: string;
}) {
  return relayPost<{ success: boolean; error?: string }>("contact_create", {
    name: data.name,
    activity: data.activity ?? "",
    phone: data.phone ?? "",
    email: data.email,
    website: data.website ?? "",
    message: data.message,
  });
}
