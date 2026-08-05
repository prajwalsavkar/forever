# For You ❤️

A private, one-page proposal site. Pure HTML, CSS and vanilla JavaScript —
no build step, no framework, no server, no database.

To see it: open `index.html` in any browser.
The default password is **ourcat**.

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
| 1 | Password and hint | `SECRET_PASSWORD` |
| 2 | The date you started | `RELATIONSHIP_START` |
| 3 | Memory-sky stars | `MEMORIES` |
| 4 | Timeline photos and captions | `TIMELINE` |
| 5 | The five hidden letters | `LETTERS` |
| 6 | Quiz questions | `QUIZ` |
| 7 | Cat captions and placement | `CATS` |
| 8 | The "our future" cards | `FUTURE` |
| 9 | The song | `MUSIC_SRC` |
| 10 | The ten NO-button replies | `NO_REPLIES` |

**Photos** — drop yours into `assets/` and point `TIMELINE` at them. Any name
or format works: `photo: "assets/us-in-goa.jpg"`. Portrait crops look best.

**Music** — replace `assets/music.mp3` with your song, same filename. The
placeholder is an original piece, so there's nothing to license. If the file is
ever missing, the page synthesises a soft arpeggio instead so the moment still
has sound.

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

1. **Gate** — password, floating hearts, glass card
2. **Hello** — "Hi My Love ❤️", then Continue
3. **Dusk** — live counter of days, hours, minutes, seconds
4. **Memory sky** — tap stars to open memories; they connect into a constellation
5. **Story** — scroll-revealed timeline, cats, butterflies
6. **Quiz** — four questions
7. **The question** — YES, or the ten-step NO gauntlet
8. **After** — rings interlock, confetti, petals, fireworks, the future board

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
