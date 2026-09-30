import fs from "fs";
import path from "path";
import { createCanvas } from "@napi-rs/canvas";

// Rendu de la 1ère page d'un PDF en image JPEG, côté serveur, sans dépendance
// système (pdfjs-dist en pur JS + @napi-rs/canvas en binaire préconstruit).
export async function renderPdfFirstPageThumbnail(
  pdfPath: string,
  outPath: string,
  maxWidth = 900
): Promise<void> {
  const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
  // Worker requis par pdf.js même côté serveur : on pointe vers le fichier réel du package.
  pdfjs.GlobalWorkerOptions.workerSrc = path.join(
    process.cwd(),
    "node_modules/pdfjs-dist/legacy/build/pdf.worker.mjs"
  );

  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const doc = await pdfjs.getDocument({ data }).promise;
  const page = await doc.getPage(1);

  const baseViewport = page.getViewport({ scale: 1 });
  const scale = maxWidth / baseViewport.width;
  const viewport = page.getViewport({ scale });

  const canvas = createCanvas(Math.round(viewport.width), Math.round(viewport.height));
  const ctx = canvas.getContext("2d");

  await page.render({
    // @napi-rs/canvas implements the subset of the Canvas/CanvasRenderingContext2D API pdf.js needs.
    canvas: canvas as unknown as HTMLCanvasElement,
    canvasContext: ctx as unknown as CanvasRenderingContext2D,
    viewport,
  }).promise;

  const buf = canvas.toBuffer("image/jpeg", 85);
  fs.writeFileSync(outPath, buf);
}
