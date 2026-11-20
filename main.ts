// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry is the video itself: a vertical GTA 6 clip cut from Rockstar's
// Grand Theft Auto VI Trailer 2, uploaded to YouTube as a public Short with
// make.fun's pitch in the clip and the bounty's line + play code in its
// description. This program only hands the video's address to the house: it
// reads VIDEO.json from the repository root, checks it is a JSON object with
// a string `url`, and copies the exact bytes to /output/VIDEO.json, where the
// gate reads them. Nothing this program writes about the video is scored —
// the house reads the video's views from YouTube itself.
//
// Local run (the way the grader does it):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const videoPath = join(BOT_DIR, 'VIDEO.json');
const raw = readFileSync(videoPath, 'utf8');
const parsed: unknown = JSON.parse(raw);
if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
  console.error('VIDEO.json must be a JSON object');
  process.exit(1);
}
if (typeof (parsed as { url?: unknown }).url !== 'string') {
  console.error('VIDEO.json must hold a string url');
  process.exit(1);
}
if ((parsed as { url: string }).url.trim().length === 0) {
  console.error('VIDEO.json url must not be empty');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(videoPath, join(OUTPUT_DIR, 'VIDEO.json'));
