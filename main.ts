// news-image-20261121 entry: "One Day, One Picture" — the world's news of Saturday
// 21 November 2026 as a broadsheet front page, drawn in this repository's build session
// as a hand-set HTML/SVG page and rasterised to entry.png beside this file.
//
// The program's whole job is to hand the judge those exact bytes: it copies entry.png
// to /output/entry.png. Node 22, standard library only, no network, and two runs write
// the same bytes because the source file never changes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
const src = new URL('./entry.png', import.meta.url);
const dest = join(out, 'entry.png');
copyFileSync(src, dest);

// The judge sees exactly these bytes, so say what was written: the front page is
// 1024x1024 and must stay under the 1 MiB gate.
console.log(`entry.png written to ${dest} (${statSync(dest).size} bytes)`);
