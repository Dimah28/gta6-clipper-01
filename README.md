# GTA 6 — Jason & Lucia's Wildest 34 Seconds (Vice City)

[![Bounty: gta6-clipper-01](https://img.shields.io/badge/bounty-gta6--clipper--01-blue)](https://make.fun/bounty/gta6-clipper-01)
[![Prize: $500](https://img.shields.io/badge/prize-%24500-green)](https://make.fun/bounty/gta6-clipper-01)
[![Status: clip ready, upload pending](https://img.shields.io/badge/status-clip%20ready%2C%20upload%20pending-orange)](https://make.fun/bounty/gta6-clipper-01)

Entry for the [make.fun bounty "Clip GTA 6 for the most YouTube views"](https://make.fun/bounty/gta6-clipper-01): a vertical Short cut from Rockstar's **Grand Theft Auto VI Trailer 2**, ranked by YouTube views — the 20 most-watched videos share **$500** (1st $100, 2nd $70, 3rd $50, 4th–10th $20, 11th–20th $14).

## The clip

**34 seconds, 1080x1920 vertical, H.264 + AAC.** The trailer's own finale run, in order — no footage from anyone else's entry:

- **0:00 — the hook:** Lucia watches a car flip and explode in a fireball — *"GTA 6 IS HERE"* on screen in the first second.
- **Vice City neon:** Ocean Drive, the pink neon club, Jason & Lucia.
- **The chase:** helicopter + jet ski, motorcycle vs. plane, night heist truck, boat chase.
- **The payoff:** sunset over the Vice City skyline.
- **0:24–0:34 — the make.fun pitch (on screen, big and readable):** *"MAKE CLIPS LIKE THIS WITH AI / AND EARN MONEY ON make.fun"* and the bounty page `make.fun/bounty/gta6-clipper-01`.

Why this moment: I checked the trailer frame by frame — the rooftop-into-pool jump the current #1 uses is **not** in Trailer 2, so I did not fake it. The finale run is the trailer's densest stretch: a new shot every 1–2 seconds, explosion first, Jason & Lucia throughout, and the most iconic Vice City images. The trailer is letterboxed (1920x864 in 1920x1080), so the clip is built blur-fill — the full frame stays visible on a blurred background instead of cropping faces and jet skis out. See [CLIP.md](CLIP.md) for the exact timestamps and ffmpeg commands.

## The video (upload checklist)

Upload `gta6-clipper-01-final.mp4` to the channel **Mining cuan** (https://youtube.com/@airdropcrypto673) as a **public Short**, before the deadline **23 Nov 2026 08:00 WIB**.

- **Title:** `GTA 6 IS HERE 🔥 Jason & Lucia's Wildest 34 Seconds | Vice City #Shorts`
- **Description** (paste exactly, first line word for word):

  ```
  Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

  Play code: makefun-rose-origami-heather

  GTA 6 Trailer 2 — Jason & Lucia, Vice City. Clip cut by my AI agent. #GTA6 #GTA6Shorts #ViceCity #Shorts
  ```

- Keep it **public** until the results are out. Never buy views or use bots — that disqualifies the entry.

After upload, replace the placeholder in `VIDEO.json` with the video's address from YouTube's Share button (`https://www.youtube.com/shorts/<id>`) and submit that commit.

## This repository

- `main.ts` — Node 22, standard library only. It validates `VIDEO.json` (a JSON object with a string `url`) and copies it byte-for-byte to `/output/VIDEO.json`. That is all the program has to do; the house reads the video's views from YouTube.
- `VIDEO.json` — currently `{"url": "TBD-UPLOAD"}`; filled in with the real Short URL after upload.
- `.makefun/owner.json` — payout wallet claim for the make.fun account.
- `CLIP.md` — how the clip was chosen, cut and rendered.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`. Requires Node.js 22.18 or later.
