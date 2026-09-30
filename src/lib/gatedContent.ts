import fs from "fs";
import path from "path";
import crypto from "crypto";

const DATA_FILE = path.join(process.cwd(), "content/gated-content.json");
export const GATED_UPLOAD_DIR = path.join(process.cwd(), "content/uploads/gated");
export const GATED_CHUNK_DIR = path.join(process.cwd(), "content/uploads/.gated-chunks");

export type GatedDocument = {
  id: string;
  pageSlug: string;
  category: string;
  title: string;
  fileName: string;
  code?: string;
};

type GatedData = {
  pageCodes: Record<string, string>;
  documents: GatedDocument[];
};

const DEFAULT_DATA: GatedData = { pageCodes: {}, documents: [] };

function readData(): GatedData {
  if (!fs.existsSync(DATA_FILE)) return DEFAULT_DATA;
  try {
    const raw = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
    return { pageCodes: raw.pageCodes || {}, documents: raw.documents || [] };
  } catch {
    return DEFAULT_DATA;
  }
}

function writeData(data: GatedData) {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2) + "\n", "utf8");
}

export function getPageCode(pageSlug: string): string {
  return readData().pageCodes[pageSlug] || "";
}

export function setPageCode(pageSlug: string, code: string) {
  const data = readData();
  data.pageCodes[pageSlug] = code.trim();
  writeData(data);
}

export function verifyPageCode(pageSlug: string, code: string): boolean {
  const expected = getPageCode(pageSlug);
  return !!expected && expected === code.trim();
}

export function listDocuments(pageSlug?: string): GatedDocument[] {
  const docs = readData().documents;
  return pageSlug ? docs.filter((d) => d.pageSlug === pageSlug) : docs;
}

export function getDocument(id: string): GatedDocument | undefined {
  return readData().documents.find((d) => d.id === id);
}

export function addDocument(doc: Omit<GatedDocument, "id">): GatedDocument {
  const data = readData();
  const created: GatedDocument = { ...doc, id: crypto.randomUUID() };
  data.documents.push(created);
  writeData(data);
  return created;
}

export function deleteDocument(id: string) {
  const data = readData();
  const doc = data.documents.find((d) => d.id === id);
  data.documents = data.documents.filter((d) => d.id !== id);
  writeData(data);
  if (doc) {
    const file = path.join(GATED_UPLOAD_DIR, doc.fileName);
    if (fs.existsSync(file)) fs.unlinkSync(file);
  }
}

export function verifyDocumentCode(id: string, code: string): GatedDocument | null {
  const doc = getDocument(id);
  if (!doc) return null;
  if (!doc.code) return doc;
  return doc.code === code.trim() ? doc : null;
}

export type PublicGatedDocument = Omit<GatedDocument, "code"> & { locked: boolean };

export function listPublicDocuments(pageSlug: string): PublicGatedDocument[] {
  return listDocuments(pageSlug).map(({ code, ...rest }) => ({
    ...rest,
    locked: !!code,
  }));
}
