# For You ❤️

A private, one-page proposal site. Pure HTML, CSS and vanilla JavaScript —
no build step, no framework, no server, no database.

To see it: open `index.html` in any browser.
The password is **goldfish** (any capitalisation works).

---

## The folder

```
index.html          the page
style.css           all styling
script.js           all behaviour — your content lives at the top of this file
assets/
  music.mp3         placeholder song (swap for your own)
  photo1–6.png      placeholder photos (swap for yours)
  cat1–5.svg        the cats
  heart.svg
  ring.svg
```

---

## What to change

Open **`script.js`**. Everything you need is in the CONFIG block at the very
top, in ten clearly numbered sections. You shouldn't need to touch anything
below the line that says *"ENGINE — you can stop editing here"*.

| # | What | Where |
|---|------|-------|
| 1 | Password, hint, wrong-guess nudges | `SECRET_PASSWORD`, `PASSWORD_HINT`, `WRONG_NUDGES` |
| 2 | The date you started | `RELATIONSHIP_START` |
| 3 | The seven chapters in the sky | `MEMORIES` |
| 4 | The photographs + their song | `GALLERY`, `GALLERY_MUSIC_SRC` |
| 5 | The five hidden letters | `LETTERS`, `LETTER_PROGRESS` |
| 6 | Quiz questions | `QUIZ` |
| 7 | Cat captions and placement | `CATS` |
| 8 | The "our future" cards | `FUTURE` |
| 9 | The song | `MUSIC_SRC` |
| 10 | The ten NO-button replies | `NO_REPLIES` |

**Photos** — drop yours into `assets/` and list them in `GALLERY`:

```js
const GALLERY = [
  "assets/us-at-chirp.jpg",
  "assets/jammu.jpg",
  ...
];
```

Six or seven is the sweet spot. The grid sizes repeat every seven pictures, so
any number lays out properly — you don't set sizes yourself, only the order.

**Extensions don't have to match.** If a photo isn't found, the page
automatically retries the same name with `.jpeg`, `.jpg`, `.png`, `.webp` and
their uppercase forms. You can even leave the extension off entirely —
`"assets/photo1"` works. If every attempt fails, that slot shows a striped box
naming the file it couldn't find, and the browser console explains what it
tried. (Windows hides extensions by default, which is why this trips people up:
File Explorer's Type column is the reliable place to check.)

**The two songs** — both placeholders are original pieces I wrote for this, so
there's nothing to license, but you'll want your own:

- `assets/gallery.mp3` plays under the photographs and fades out when she
  reaches the quiz. This is the one to make personal.
- `assets/music.mp3` starts the moment she says yes.

Keep the filenames or change `GALLERY_MUSIC_SRC` / `MUSIC_SRC` in `script.js`.
If `music.mp3` is ever missing the page synthesises a soft arpeggio so the
moment still has sound.

**The last line** — "Tu khush, Mai khush" is in `index.html`, near the bottom,
in the `finale` block.

**The chapters in the sky** — each entry has `x`/`y` for desktop and optional
`mx`/`my` for phones (the panel turns portrait below 860px). They're numbered
1–7 on screen and the connecting line always runs in chapter order, however she
taps them — so the constellation always traces the story correctly.

**Page title** — in `index.html`, near the top.

**Fonts** — the three `<link>` tags in `index.html` load Cormorant Garamond,
Jost and Caveat from Google Fonts. Delete them for a fully offline site; the
CSS falls back to elegant system serifs automatically.

---

## Hosting it

Any static host works. Drag the whole folder onto **Netlify Drop**, or:

```bash
# GitHub Pages
git init && git add . && git commit -m "for her"
# push, then enable Pages on the main branch

# Vercel
npx vercel --prod

# Wasmer
wasmer deploy
```

The password is client-side only — it keeps the page private from a casual
visitor, not from anyone who opens developer tools. That's the right level of
security for this, but don't put anything in it you'd mind a stranger reading.

---

## How it flows

1. **Gate** — password, floating hearts, glass card, and a goldfish who
   swims past. Each wrong guess brings her closer, faster, and makes the
   nudge underneath plainer, until the fourth one simply gives the answer.
   The door is meant to be a greeting, not a test.
2. **Hello** — "Hi My Love ❤️", then Continue
3. **Dusk** — live counter of days, hours, minutes, seconds
4. **The sky** — seven numbered chapters; tapping them draws the constellation
5. **Photographs** — no captions, just pictures, with the song underneath
6. **Quiz** — five questions (the song fades out here)
7. **The question** — YES, or the ten-step NO gauntlet
8. **After** — rings interlock, confetti, petals, fireworks, the future board
9. **The finale** — "Tu khush, Mai khush", revealed when she scrolls to the end

Five envelopes are hidden across sections 3–7. The counter bottom-left tracks
how many she's found.

---

## Details worth knowing

- Everything animates on `transform` and `opacity` only, so it stays at 60fps.
- Particles run on one canvas, capped, and the loop stops when idle.
- `prefers-reduced-motion` is respected — the page still works, it just calms down.
- Keyboard accessible throughout; Escape closes any open card.
- The NO button dodges the mouse for a few clicks, never on keyboard focus, and
  always stays on screen. After ten tries it gives up and turns into a YES.
- The gallery song needs a prior click to start (browser rule). She's already
  clicked Unlock by then so it normally just plays; if a browser still refuses,
  a small "play the song" pill appears rather than failing silently.
