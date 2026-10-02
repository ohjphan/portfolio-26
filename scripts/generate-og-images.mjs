/**
 * Compose page OG images: full collage background, Faculty Glyphic title/URL + JP mark.
 * Requires scripts/fonts/FacultyGlyphic-Regular.ttf (OFL).
 * Run: npm run og:generate
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createCanvas, GlobalFonts, loadImage } from '@napi-rs/canvas';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const outDir = path.join(root, 'public/images/og');
const bgDir = path.join(outDir, 'backgrounds');
const markPath = path.join(root, 'public/images/jessica-mark.png');
const fontPath = path.join(__dirname, 'fonts/FacultyGlyphic-Regular.ttf');

const W = 1200;
const H = 630;
const MARK = 84;
const MARK_INSET = 34;
/** Sit in the open right panel of the original collages — clear of artwork */
const TEXT_X = 655;
const TITLE_SIZE = 52;
const URL_SIZE = 30;
const TITLE_Y = 298;
const URL_GAP = 16;
const INK = '#2c2c2c';
const COBALT = '#2458a8';

const pages = [
  {
    id: 'talking',
    title: 'Jessica is talking',
    url: 'jessica.is/talking',
  },
  {
    id: 'creating',
    title: 'Jessica is creating',
    url: 'jessica.is/creating',
  },
  {
    id: 'jessica',
    title: 'Jessica is Jessica',
    url: 'jessica.is/jessica',
  },
  {
    id: 'writing',
    title: 'Jessica is writing',
    url: 'jessica.is/writing',
  },
  {
    id: 'open-to-collaborating',
    titleLines: ['Dear people', 'building something,'],
    url: 'jessica.is/open-to-collaborating',
  },
];

if (!fs.existsSync(fontPath)) {
  throw new Error(`Missing Faculty Glyphic font at ${fontPath}`);
}

GlobalFonts.registerFromPath(fontPath, 'Faculty Glyphic');

/** Cover the canvas, anchored to the left so the open right panel stays intact. */
function drawCoverLeft(ctx, image, destW, destH) {
  const scale = Math.max(destW / image.width, destH / image.height);
  const srcW = destW / scale;
  const srcH = destH / scale;
  const sx = 0;
  const sy = (image.height - srcH) / 2;
  ctx.drawImage(image, sx, sy, srcW, srcH, 0, 0, destW, destH);
}

async function composePage(page) {
  const bgPath = path.join(bgDir, `${page.id}.jpg`);
  if (!fs.existsSync(bgPath)) {
    throw new Error(`Missing background: ${bgPath}`);
  }

  const [bg, mark] = await Promise.all([loadImage(bgPath), loadImage(markPath)]);
  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext('2d');

  drawCoverLeft(ctx, bg, W, H);

  ctx.drawImage(mark, W - MARK - MARK_INSET, MARK_INSET, MARK, MARK);

  const titleLines = page.titleLines ?? [page.title];
  const lineHeight = TITLE_SIZE * 1.15;
  const titleBlockHeight = lineHeight * (titleLines.length - 1);
  const firstLineY = TITLE_Y - titleBlockHeight / 2;

  ctx.fillStyle = INK;
  ctx.font = `${TITLE_SIZE}px "Faculty Glyphic"`;
  ctx.textBaseline = 'alphabetic';
  titleLines.forEach((line, index) => {
    ctx.fillText(line, TEXT_X, firstLineY + index * lineHeight);
  });

  const lastLine = titleLines[titleLines.length - 1];
  const titleMetrics = ctx.measureText(lastLine);
  const titleBottom =
    firstLineY +
    titleBlockHeight +
    (titleMetrics.actualBoundingBoxDescent || 0);

  ctx.fillStyle = COBALT;
  ctx.font = `${URL_SIZE}px "Faculty Glyphic"`;
  ctx.fillText(page.url, TEXT_X, titleBottom + URL_GAP + URL_SIZE * 0.85);

  const outPath = path.join(outDir, `${page.id}.png`);
  fs.writeFileSync(outPath, canvas.toBuffer('image/png'));
  console.log(`wrote ${path.relative(root, outPath)}`);
}

for (const page of pages) {
  await composePage(page);
}
console.log('done');
