/**
 * public/melofy-logo.jpg (JPEG) → public/melofy-logo.png (RGBA, beyaz = şeffaf).
 * Çalıştır: node scripts/jpeg-to-transparent-png.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import jpeg from "jpeg-js";
import { PNG } from "pngjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "public");
const inputJpg = path.join(root, "melofy-logo.jpg");
const outputPng = path.join(root, "melofy-logo.png");

const rawJpeg = fs.readFileSync(inputJpg);
const decoded = jpeg.decode(rawJpeg, { useTArray: true, formatAsRGBA: true });
const { width, height, data } = decoded;

const png = new PNG({ width, height });
const out = png.data;

for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const maxc = Math.max(r, g, b);
  const minc = Math.min(r, g, b);
  const lum = (r + g + b) / 3;
  const chroma = maxc - minc;
  let a = 255;

  // Tamamen beyaz/açık nötr bölge → şeffaf
  if (r > 244 && g > 244 && b > 244) {
    a = 0;
  } else if (chroma < 24 && lum > 230) {
    a = 0;
  } else if (chroma < 28 && lum > 200) {
    // Beyaz–renk geçişindeki yumuşak halo: kademeli alfa
    const t = (lum - 200) / 30;
    a = Math.round(255 * (1 - Math.min(1, t) * 0.96));
  }

  out[i] = r;
  out[i + 1] = g;
  out[i + 2] = b;
  out[i + 3] = a;
}

fs.writeFileSync(outputPng, PNG.sync.write(png, { colorType: 6 }));
console.log("OK:", outputPng, `(${width}x${height})`);
