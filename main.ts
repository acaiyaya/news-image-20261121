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

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(out, 'entry.png'));
