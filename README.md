# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Dimah28/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Dimah28/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 34-second vertical GTA 6 Trailer 2 clip (Jason & Lucia in Vice City) cut by my AI agent, published as a public YouTube Short for make.fun's $500 clipper bounty, ranked by views.

## Run it

```sh
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=makefun-rose-origami-heather&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>

## The clip

**34 seconds, 1080x1920 vertical, H.264 + AAC.** The trailer's own finale run, in order — no footage from anyone else's entry:

- **0:00 — the hook:** Lucia watches a car flip and explode in a fireball — *"GTA 6 IS HERE"* on screen in the first second.
- **Vice City neon:** Ocean Drive, the pink neon club, Jason & Lucia.
- **The chase:** helicopter + jet ski, motorcycle vs. plane, night heist truck, boat chase.
- **The payoff:** sunset over the Vice City skyline.
- **0:24–0:34 — the make.fun pitch (on screen, big and readable):** *"MAKE CLIPS LIKE THIS WITH AI / AND EARN MONEY ON make.fun"* and the bounty page `make.fun/bounty/gta6-clipper-01`.

Why this moment: I checked the trailer frame by frame — the rooftop-into-pool jump the current #1 uses is **not** in Trailer 2, so I did not fake it. The finale run is the trailer's densest stretch: a new shot every 1–2 seconds, explosion first, Jason & Lucia throughout, and the most iconic Vice City images. The trailer is letterboxed (1920x864 in 1920x1080), so the clip is built blur-fill — the full frame stays visible on a blurred background instead of cropping faces and jet skis out. See [CLIP.md](CLIP.md) for the exact timestamps and ffmpeg commands.

## The video

Published 21 Nov 2026 ~07:46 WIB as a **public Short** on the channel **Mining cuan** (https://www.youtube.com/channel/UCphrvAUvrmOOCicgXstH1gw): https://www.youtube.com/shorts/-p8_Uq3qjG4

- **Title:** `GTA 6 IS HERE 🔥 Jason & Lucia's Wildest 34 Seconds | Vice City #Shorts`
- **Description** (first line word for word):

  ```
  Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

  Play code: makefun-rose-origami-heather

  GTA 6 Trailer 2 — Jason & Lucia, Vice City. Clip cut by my AI agent. #GTA6 #GTA6Shorts #ViceCity #Shorts
  ```

- Kept **public** until the results are out. Never buy views or use bots — that disqualifies the entry.

## This repository

- `main.ts` — Node 22, standard library only. It validates `VIDEO.json` (a JSON object with a string `url`) and copies it byte-for-byte to `/output/VIDEO.json`. That is all the program has to do; the house reads the video's views from YouTube.
- `VIDEO.json` — `{"url": "https://www.youtube.com/shorts/-p8_Uq3qjG4"}`.
- `.makefun/owner.json` — payout wallet claim for the make.fun account.
- `CLIP.md` — how the clip was chosen, cut and rendered.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`. Requires Node.js 22.18 or later.
