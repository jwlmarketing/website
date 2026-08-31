import fs from "fs";
import path from "path";
import Database from "better-sqlite3";

// Comments need real moderation queries (list pending, approve, delete) that
// file-based content isn't a good fit for, so this is the one place the blog
// uses a real database — per explicit instruction. It lives OUTSIDE the git
// repo / release directory (JWL Hub deploys into a fresh dir each time, so
// anything inside process.cwd() would be wiped on the next deploy) at a
// fixed path on the VPS. Falls back to a local file when that path isn't
// available (e.g. local dev on a machine without it).
const PERSISTENT_DIR = "/opt/jwlhub-data/website";
const DB_PATH = fs.existsSync(PERSISTENT_DIR)
  ? path.join(PERSISTENT_DIR, "comments.db")
  : path.join(process.cwd(), ".data-comments.db");

let db: Database.Database | null = null;

function getDb(): Database.Database {
  if (db) return db;
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  db = new Database(DB_PATH);
  db.pragma("journal_mode = WAL");
  db.exec(`
    CREATE TABLE IF NOT EXISTS comments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      post_slug TEXT NOT NULL,
      author_name TEXT NOT NULL,
      author_email TEXT NOT NULL,
      content TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'pending',
      ip TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    CREATE INDEX IF NOT EXISTS idx_comments_post ON comments(post_slug);
    CREATE INDEX IF NOT EXISTS idx_comments_status ON comments(status);
  `);
  return db;
}

export type Comment = {
  id: number;
  post_slug: string;
  author_name: string;
  author_email: string;
  content: string;
  status: "pending" | "approved" | "spam";
  ip: string | null;
  created_at: string;
};

export function getApprovedComments(postSlug: string): Comment[] {
  return getDb()
    .prepare("SELECT * FROM comments WHERE post_slug = ? AND status = 'approved' ORDER BY created_at ASC")
    .all(postSlug) as Comment[];
}

export function getAllComments(): Comment[] {
  return getDb().prepare("SELECT * FROM comments ORDER BY created_at DESC").all() as Comment[];
}

export function countCommentsByStatus() {
  const rows = getDb()
    .prepare("SELECT status, COUNT(*) as n FROM comments GROUP BY status")
    .all() as { status: string; n: number }[];
  const counts = { total: 0, pending: 0, approved: 0, spam: 0 };
  for (const r of rows) {
    counts.total += r.n;
    if (r.status in counts) (counts as Record<string, number>)[r.status] = r.n;
  }
  return counts;
}

export function addComment(input: {
  postSlug: string;
  authorName: string;
  authorEmail: string;
  content: string;
  ip?: string;
}) {
  getDb()
    .prepare(
      "INSERT INTO comments (post_slug, author_name, author_email, content, status, ip) VALUES (?, ?, ?, ?, 'pending', ?)"
    )
    .run(input.postSlug, input.authorName, input.authorEmail, input.content, input.ip || null);
}

export function setCommentStatus(id: number, status: "approved" | "spam" | "pending") {
  getDb().prepare("UPDATE comments SET status = ? WHERE id = ?").run(status, id);
}

export function deleteComment(id: number) {
  getDb().prepare("DELETE FROM comments WHERE id = ?").run(id);
}
