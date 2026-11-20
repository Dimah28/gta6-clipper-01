# How the clip was made

All of this was done in the recorded agent session that built this entry,
with commands run there — nothing was cut by hand in an editor.

## Source

Rockstar's **Grand Theft Auto VI Trailer 2**, official YouTube upload
`https://www.youtube.com/watch?v=VQRLujxTm3c`, downloaded in the session
with yt-dlp (`python3 -m yt_dlp -f "bv*[height<=1080][ext=mp4]+ba[ext=m4a]/b"
--merge-output-format mp4`). 1920x1080, 166.8 s, AV1 + AAC.
No footage from any other entrant was used.

## Choosing the moment

I extracted contact sheets of the whole trailer (every 5 s, then every 1 s
for 115–160 s, then 3 fps for 116–131 s and 2 fps for 139–157 s) and looked
at them before cutting anything.

- The rooftop-into-a-pool jump the current #1 entry uses is **not in
  Trailer 2** — I checked the full trailer at 1 s granularity and did not
  find it, so the clip does not claim or fake that moment.
- The strongest verified stretch is the trailer's finale, 117.6–156.0 s:
  a new shot every 1–2 s, opening on a car explosion, Jason & Lucia
  throughout, Vice City neon, then the jet-ski / motorcycle-vs-plane /
  boat chase, ending on the sunset skyline. That is the hook: explosion
  in the first second, a recognisable face or stunt in every cut after it.
- The slow at-home scene (about 130–138 s, Lucia and Jason on the couch)
  was skipped — it kills Shorts retention.
- The trailer is letterboxed: `cropdetect` reports the picture as
  1920x864 at y=108 inside the 1920x1080 frame. A straight centre-crop to
  vertical kept the letterbox bars and cut the jet ski and the plane out
  of frame (checked on the first render), so the final clip is blur-fill:
  the full 1920x864 picture scaled to 1080x486, centred on a blurred,
  darkened copy of itself at 1080x1920. Nothing is cropped out.

## The cut (13 segments, trailer order)

| # | Trailer time | Shot |
|---|--------------|------|
| 1 | 117.6–119.0 | Lucia + car explosion (hook) |
| 2 | 119.0–120.6 | Manatees jersey + car flip |
| 3 | 120.6–122.6 | Night truck chase |
| 4 | 123.0–124.6 | Jason & Lucia kiss |
| 5 | 124.6–125.7 | Neon club (purple) |
| 6 | 125.7–127.7 | Ocean Drive neon + pink club |
| 7 | 139.0–141.6 | Helicopter + jet ski (Jason & Lucia) |
| 8 | 142.0–143.4 | Motorcycle vs. plane |
| 9 | 143.4–145.4 | Night heist truck |
| 10 | 145.4–147.4 | Jason carries Lucia / hug |
| 11 | 147.4–149.4 | Boat chase + night bike |
| 12 | 149.4–151.0 | Jason & Lucia in the car |
| 13 | 153.0–156.0 | Sunset Vice City skyline |

Montage 24.3 s + 10.0 s pitch = **34.3 s** total.

## Render

`build_clip.sh` (kept with the working files, not in this repo) does it in
two passes with ffmpeg 8.1:

1. Each segment: `-ss`/`-t` trim, then
   `split[a][b];[a]crop=1920:864:0:108,scale=1080:486[fg];[b]crop=1920:864:0:108,scale=1080:1920,gblur=sigma=60,eq=brightness=-0.3[bg];[bg][fg]overlay=(W-w)/2:(H-h)/2,fps=30,format=yuv420p`
   (libx264 crf 18, AAC 160k), joined with the concat demuxer.
   The pitch background is a slow zoom (`zoompan` 1.00→1.08) on the
   blur-fill sunset frame (trailer 154.5), with the sunset audio
   (153.0–156.0) looped and faded out.
2. Text overlays with `drawtext` (DejaVu Sans Bold, white with black box,
   `make.fun` in yellow), all inside the safe area, clear of YouTube's
   bottom/right buttons:
   - 0.2–3.0 s: `GTA 6 IS HERE` (y=200)
   - 5.0–6.6 s: `JASON + LUCIA` (y=200)
   - 7.7–9.7 s: `VICE CITY` (y=200)
   - 24.5–27.5 s: `MAKE CLIPS` / `LIKE THIS WITH AI`
   - 27.5–30.5 s: `AND EARN MONEY` / `ON make.fun`
   - 30.5–34.0 s: `make.fun` (170 pt) + `make.fun/bounty/gta6-clipper-01`
   plus a 0.4 s fade-in and a 0.5 s fade-out. Audio is the trailer's own
   audio throughout. No voiceover: no TTS tool is installed on this
   machine, and the rules allow the pitch as text on screen.

## Visual check

Frames were extracted and looked at at t = 1, 6, 8.5, 11, 14, 26, 29,
32 s. The first render (centre-crop) failed the check — letterbox bars
top and bottom, jet ski cut off — and was rebuilt blur-fill; the second
render passes: hook text and explosion fill the frame, Jason & Lucia,
the jet ski, the bike-vs-plane and the sunset are fully visible, and
every pitch line is big and readable on a phone.

Final file: `gta6-clipper-01-final.mp4` — 1080x1920, 34.33 s, H.264 +
AAC, ~18 MB, `+faststart`.

## Upload (not done by the agent)

The clip is handed over for upload to the channel **Mining cuan**
(https://youtube.com/@airdropcrypto673). Title, description line and
play code are in the README. After upload, `VIDEO.json` gets the real
Short URL and that commit is the one to submit — at most 5 submissions
a day, 10 in all, last submission before the deadline is final.
