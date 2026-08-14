/* ==========================================================================
   FOR YOU ❤️  — script
   --------------------------------------------------------------------------
   EVERYTHING YOU NEED TO EDIT IS IN THE CONFIG BLOCK DIRECTLY BELOW.
   You shouldn't have to touch anything under the line that says
   "ENGINE — you can stop editing here".
   ========================================================================== */

/* ==========================================================================
   ■ CONFIG — this is your part
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. THE PASSWORD
   Keep it something only she would guess. Case doesn't matter.
   -------------------------------------------------------------------------- */
const SECRET_PASSWORD = "goldfish";

/* The hint she gets from the "Need a hint?" button. */
const PASSWORD_HINT = "You told me once you have the memory of one. I decided it was a compliment.";

/* Wrong guesses, in order. The goldfish gets less subtle each time.
   After the last one the answer is basically handed over — the door is a
   greeting, not a test. */
const WRONG_NUDGES = [
  "Someone just swam past. She knows.",
  "She's circling. Look at what she is.",
  "Think about what I call you when you've forgotten something.",
  "It's the fish. It was always the fish. Type what she is. 🐠",
];

/* --------------------------------------------------------------------------
   2. WHEN IT ALL STARTED
   Used by the live counter. Format: year, month-1, day, hour, minute.
   Months are zero-based, so 3 = April.

   >>> CHECK THE YEAR. This is set to 3 April 2025, 3:00 pm. If the year is
       different, change the 2025 below and nothing else. <<<
   -------------------------------------------------------------------------- */
const RELATIONSHIP_START = new Date(2025, 3, 3, 15, 0);

/* --------------------------------------------------------------------------
   3. THE MEMORY SKY
   Each object is one star. x and y are percentages across the sky panel,
   so 50 / 50 is dead centre. Keep them between about 8 and 92.
   -------------------------------------------------------------------------- */
const MEMORIES = [
  { x: 10, y: 74, mx: 20, my: 9,
    date: "Chapter one", title: "When we met at Chirp",
    text: "Our first date, and I gave you almost nothing to work with. I sat across from you with my guard all the way up, answering questions instead of actually talking.\n\nYou had every reason to write the whole thing off that evening. I still don't fully understand why you didn't." },

  { x: 23, y: 55, mx: 63, my: 21,
    date: "Chapter two", title: "Flour Works",
    text: "Second time round, something finally loosened. I talked properly — not the careful version, the real one — and you met me there.\n\nWe stayed far longer than either of us planned. I walked out of that place thinking: this could actually go somewhere." },

  { x: 37, y: 33, mx: 27, my: 34,
    date: "Chapter three", title: "When I went to Jammu",
    text: "Things were good. Maybe too good, too quickly. I was so certain about where this was heading that I stopped checking whether you were ready to arrive at the same place at the same speed.\n\nThat one's on me." },

  { x: 50, y: 67, mx: 70, my: 47,
    date: "Chapter four", title: "When there was a dip",
    text: "It caught up with us. Everything had rushed forward so fast that it stopped feeling like a choice and started feeling like a current, and it overwhelmed you.\n\nSecond thoughts. You were right to have them — I just couldn't see it clearly at the time." },

  { x: 64, y: 44, mx: 30, my: 60,
    date: "Chapter five", title: "When we met again",
    text: "And I managed to get it wrong all over again. We went to Dagadusheth together, and I remember standing there thinking Bappa clearly wants this to work — why else do we keep ending up in the same place?\n\nIt was just too early for either of us to read it properly." },

  { x: 78, y: 26, mx: 68, my: 73,
    date: "Chapter six", title: "The second chance",
    text: "I finally explained my side of it — not defending myself, just telling you honestly where I'd been and what I'd been getting wrong.\n\nAnd you listened. Then you gave me something I hadn't earned yet: another chance. I have thought about that a lot since." },

  { x: 90, y: 13, mx: 26, my: 88,
    date: "Chapter seven", title: "And here we are",
    text: "About to get engaged. Not because it's been smooth — you've read the other six chapters.\n\nWe're different people. We'll disagree, we'll get it wrong, we'll have to keep working at it. Nobody gets handed a perfect fit; they get someone who keeps showing up to figure it out. That's what I'm choosing, with my eyes fully open, and I'm choosing you.\n\nYou're safe with me. Always." },
];

/* --------------------------------------------------------------------------
   4. THE PHOTOGRAPHS
   No captions here — just pictures, with a song underneath.
   Drop your images into the assets folder and list them below. Six or seven
   works best; the grid repeats its sizes every seven, so any number is fine.
   The order matters, the sizes don't — the layout handles that.
   -------------------------------------------------------------------------- */
const GALLERY = [
  "assets/photo1.jpeg",
  "assets/photo2.jpeg",
  "assets/photo3.jpeg",
  "assets/photo4.jpeg",
  "assets/photo5.jpeg",
  "assets/photo6.jpeg",
];

/* If a photo isn't found, these extensions are tried automatically before
   giving up — so .jpeg vs .jpg vs .JPG can't break the page. You can even
   leave the extension off entirely: "assets/photo1" works fine. */
const PHOTO_EXTENSIONS = ["jpeg", "jpg", "png", "webp", "JPEG", "JPG", "PNG"];

/* The song for the photographs. It starts when she reaches them and fades
   out when she reaches the quiz. Replace assets/gallery.mp3 with your track. */
const GALLERY_MUSIC_SRC = "assets/gallery.mp3";
const GALLERY_MUSIC_VOLUME = 0.55;

/* --------------------------------------------------------------------------
   5. THE HIDDEN LETTERS
   Five envelopes are scattered across the page. Write five short notes.
   Short and true beats long and impressive. Use \n\n for a paragraph break.
   -------------------------------------------------------------------------- */
const LETTERS = [];   /* letters turned off — empty list means no envelopes */

/* --------------------------------------------------------------------------
   6. THE QUIZ
   `answer` is the index of the correct option, counting from 0.
   -------------------------------------------------------------------------- */
const QUIZ = [
  { q: "What do you think love actually is, underneath all of it?",
    options: ["A feeling you fall into", "Choosing the same person again on the hard days", "Two people who never disagree"],
    answer: 1,
    right: "That's the one. The falling is the easy part — it's the choosing that counts.",
    wrong: "I'd say it's the choosing. Anyone can fall; staying is the actual thing." },

  { q: "If we could keep only one memory of us, which one should survive?",
    options: ["The biggest day", "The one we argued about", "An entirely ordinary evening"],
    answer: 2,
    right: "Yes. The big days remember themselves. The ordinary ones were the actual life.",
    wrong: "I'd save an ordinary evening. That's where we really happened." },

  { q: "What makes two people last?",
    options: ["Being perfectly matched", "Never needing to apologise", "Being willing to repair it"],
    answer: 2,
    right: "Exactly right. Not never breaking — always mending.",
    wrong: "It's the repairing, I think. Nobody's matched perfectly; some people just keep fixing it." },

  { q: "What am I most afraid of?",
    options: ["Losing you all at once", "Us slowly going quiet with each other", "Not being enough"],
    answer: 1,
    right: "Yes. Not the loud ending — the quiet one. I'd rather we argue than drift.",
    wrong: "Those too. But mostly the quiet drifting. That's the one that scares me." },

  { q: "When do you think I knew?",
    options: ["The first date", "Flour Works", "Somewhere I couldn't point to"],
    answer: 2,
    right: "There wasn't one moment. It crept up slowly and then it was simply true.",
    wrong: "Not quite. There was no single moment — it just gradually became obvious." },
];

/* --------------------------------------------------------------------------
   7. THE CATS
   `slot` decides where each cat shows up:
     "gallery-2" … "gallery-6" →  between photographs (the number is the
                                  photo it appears after)
     "dusk"                 →  beside the counter
     "sky"                  →  in the night sky section
     "quiz"                 →  under the quiz
     "proposal"             →  above the big question
   Add more by copying a line and giving it a new slot that already exists.
   -------------------------------------------------------------------------- */
const CATS = [
  { slot: "gallery-2", img: "assets/cat1.svg", caption: "I think you dropped this 💍" },
  { slot: "gallery-4", img: "assets/cat3.svg", caption: "You forgot something…" },
  { slot: "gallery-6", img: "assets/cat5.svg", caption: "You forgot AGAIN…" },
  /* { slot: "dusk",      img: "assets/cat2.svg", caption: "Excuse me ma'am, this human is waiting." }, */
  { slot: "sky",      img: "assets/cat5.svg", caption: "I've been guarding this ring." },
  { slot: "quiz",     img: "assets/cat4.svg", caption: "I have the ring." },
  { slot: "proposal", img: "assets/cat2.svg", caption: "My human is nervous." },
];

/* Cats that pop up during the NO-button gag */
const CAT_TOASTS = {
  2: { img: "assets/cat2.svg", text: "Wrong button, hooman." },
  4: { img: "assets/cat4.svg", text: "I saw that." },
};

/* --------------------------------------------------------------------------
   8. THE FUTURE BOARD (shown after she says yes)
   -------------------------------------------------------------------------- */
const FUTURE = [
  { icon: "✈️", title: "Trips we'll take", text: "Starting with the one we keep almost booking." },
  { icon: "🏡", title: "A home",           text: "Yours, mine, and far from this cruel world. South Indian style, the way you wanted." },
  { icon: "🎂", title: "Every birthday",   text: "I'll keep pretending I forgot. I never have." },
  { icon: "🍜", title: "Late-night food",  text: "The 11pm decision we always regret and repeat." },
  { icon: "🐈", title: "More cats",        text: "I know you hate mine. I'll keep bringing them home to annoy you." },
  { icon: "🌙", title: "Ordinary nights",  text: "Thousands of them — and somehow not ordinary at all." },
];

/* --------------------------------------------------------------------------
   9. THE MUSIC
   assets/music.mp3 is a placeholder I made — swap in your own song.
   It starts when she says yes (browsers won't allow it any earlier).
   -------------------------------------------------------------------------- */
const MUSIC_SRC = "assets/music.mp3";

/* --------------------------------------------------------------------------
   10. THE NO BUTTON
   Ten escalating replies, in order. Edit the text freely.
   After the tenth it gives up and turns into a second YES.
   -------------------------------------------------------------------------- */
/* Shown as she finds each envelope — the last one lands after all five. */
const LETTER_PROGRESS = [
  "One found. There are more.",
  "Two. Keep looking.",
  "Three. You're better at this than you claim.",
  "Four. One still hiding.",
  "All five found — and that's just the ones I wrote down ❤️",
];

const NO_REPLIES = [
  "Are you sure? 🤔",
  "Wrong button, hooman.",
  "I think your finger slipped.",
  "I saw that.",
  "System suspects accidental click.",
  "Please contact customer support (me).",
  "Nice try 😂",
  "Calculating alternate universe…",
  "No valid future found.",
  "Request denied.",
];


/* ==========================================================================
   ■ ENGINE — you can stop editing here
   ========================================================================== */
(function () {
  "use strict";

  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const rand = (min, max) => min + Math.random() * (max - min);
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function el(tag, cls, html) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  /* ======================================================================
     REVEAL ON SCROLL
     ====================================================================== */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("reveal--in");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -6% 0px" });

  const watchReveals = (root = document) =>
    $$(".reveal:not(.reveal--in)", root).forEach((n) => revealObserver.observe(n));


  /* ======================================================================
     AMBIENT FLOATERS  (hearts, sparkles, music notes)
     ====================================================================== */
  const ambient = $("#ambient");
  const GLYPHS = ["❤", "❤", "♡", "✦", "♪", "♫", "❀"];

  function seedAmbient(count) {
    if (REDUCED) return;
    for (let i = 0; i < count; i++) {
      const isDot = Math.random() < 0.45;
      const n = el("div", isDot ? "floaty floaty--dot" : "floaty");
      if (!isDot) {
        const g = GLYPHS[(Math.random() * GLYPHS.length) | 0];
        n.textContent = g;
        n.style.color = ["#E4879E", "#F1D9A0", "#C8617C", "#F6D2DF"][(Math.random() * 4) | 0];
        n.style.setProperty("--size", rand(13, 30).toFixed(0) + "px");
        n.style.setProperty("--peak", rand(0.35, 0.8).toFixed(2));
      } else {
        n.style.setProperty("--size", rand(3, 7).toFixed(0) + "px");
        n.style.setProperty("--peak", rand(0.4, 0.95).toFixed(2));
      }
      n.style.left = rand(0, 100).toFixed(1) + "%";
      n.style.setProperty("--dur", rand(13, 30).toFixed(1) + "s");
      n.style.setProperty("--delay", (-rand(0, 26)).toFixed(1) + "s");
      n.style.setProperty("--drift", rand(-90, 90).toFixed(0) + "px");
      ambient.appendChild(n);
    }
  }
  seedAmbient(26);


  /* ======================================================================
     PARTICLE ENGINE  (confetti, petals, hearts, sparks, fireworks)
     One canvas, no libraries, transform-free so it stays smooth.
     ====================================================================== */
  const FX = (function () {
    const canvas = $("#fx");
    const ctx = canvas.getContext("2d");
    let parts = [], running = false, dpr = 1, W = 0, H = 0;
    const MAX = REDUCED ? 90 : 620;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    window.addEventListener("resize", resize, { passive: true });
    resize();

    const PALETTE = ["#E4879E", "#F1D9A0", "#C8617C", "#FBDCE2", "#C9973F", "#FFFFFF", "#EE93A9"];

    function add(p) { if (parts.length < MAX) parts.push(p); }

    function heartPath(c, x, y, s, rot) {
      c.save(); c.translate(x, y); c.rotate(rot); c.scale(s, s); c.beginPath();
      c.moveTo(0, 3);
      c.bezierCurveTo(-4.2, -1.2, -3.6, -5.2, -1.2, -5.2);
      c.bezierCurveTo(-0.4, -5.2, 0, -4.4, 0, -3.6);
      c.bezierCurveTo(0, -4.4, 0.4, -5.2, 1.2, -5.2);
      c.bezierCurveTo(3.6, -5.2, 4.2, -1.2, 0, 3);
      c.closePath(); c.fill(); c.restore();
    }

    function step() {
      ctx.clearRect(0, 0, W, H);
      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i];
        p.life++;
        p.vy += p.g;
        p.vx *= p.drag; p.vy *= p.drag;
        p.x += p.vx + (p.sway ? Math.sin(p.life * p.swaySpeed) * p.sway : 0);
        p.y += p.vy;
        p.rot += p.vr;

        const t = p.life / p.maxLife;
        const alpha = t > 0.72 ? 1 - (t - 0.72) / 0.28 : 1;

        if (t >= 1 || p.y > H + 60) { parts.splice(i, 1); continue; }

        ctx.globalAlpha = clamp(alpha, 0, 1) * p.alpha;
        ctx.fillStyle = p.color;

        if (p.type === "confetti") {
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
          ctx.restore();
        } else if (p.type === "petal") {
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
          ctx.beginPath(); ctx.ellipse(0, 0, p.size, p.size * 0.55, 0, 0, Math.PI * 2);
          ctx.fill(); ctx.restore();
        } else if (p.type === "heart") {
          heartPath(ctx, p.x, p.y, p.size / 4, p.rot);
        } else {
          ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
          ctx.globalAlpha *= 0.25;
          ctx.beginPath(); ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2); ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      if (parts.length) requestAnimationFrame(step);
      else running = false;
    }
    function start() { if (!running) { running = true; requestAnimationFrame(step); } }

    const base = () => ({
      g: 0.05, drag: 0.995, rot: rand(0, 6.28), vr: rand(-0.14, 0.14),
      life: 0, alpha: 1, sway: 0, swaySpeed: 0.05,
      color: PALETTE[(Math.random() * PALETTE.length) | 0],
    });

    return {
      confetti(x, y, n = 90) {
        n = REDUCED ? Math.round(n * 0.25) : n;
        for (let i = 0; i < n; i++) {
          const a = rand(0, Math.PI * 2), sp = rand(4, 15);
          add(Object.assign(base(), {
            type: "confetti", x, y,
            vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 4,
            size: rand(6, 13), g: 0.16, drag: 0.985,
            maxLife: rand(90, 170), sway: rand(0.2, 0.9), swaySpeed: rand(0.03, 0.08),
          }));
        }
        start();
      },
      petals(n = 34) {
        n = REDUCED ? Math.round(n * 0.25) : n;
        for (let i = 0; i < n; i++) {
          add(Object.assign(base(), {
            type: "petal", x: rand(-40, W + 40), y: rand(-160, -10),
            vx: rand(-0.5, 0.5), vy: rand(0.9, 2.3),
            size: rand(6, 13), g: 0.004, drag: 1,
            color: ["#F6C9D0", "#FBDCE2", "#EE93A9", "#F1D9A0"][(Math.random() * 4) | 0],
            maxLife: rand(320, 560), sway: rand(0.5, 1.6), swaySpeed: rand(0.015, 0.04),
            vr: rand(-0.03, 0.03),
          }));
        }
        start();
      },
      hearts(n = 14) {
        n = REDUCED ? Math.round(n * 0.3) : n;
        for (let i = 0; i < n; i++) {
          add(Object.assign(base(), {
            type: "heart", x: rand(0, W), y: H + rand(10, 90),
            vx: rand(-0.35, 0.35), vy: -rand(0.7, 1.9),
            size: rand(12, 30), g: -0.002, drag: 1,
            color: ["#E4879E", "#EE93A9", "#C8617C", "#F1D9A0"][(Math.random() * 4) | 0],
            maxLife: rand(280, 480), sway: rand(0.4, 1.3), swaySpeed: rand(0.02, 0.05),
            vr: rand(-0.012, 0.012), alpha: rand(0.55, 0.95),
          }));
        }
        start();
      },
      firework(x, y, n = 52) {
        n = REDUCED ? Math.round(n * 0.3) : n;
        const hue = PALETTE[(Math.random() * PALETTE.length) | 0];
        for (let i = 0; i < n; i++) {
          const a = (Math.PI * 2 * i) / n + rand(-0.06, 0.06);
          const sp = rand(3.4, 8.4);
          add(Object.assign(base(), {
            type: "spark", x, y,
            vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
            size: rand(1.4, 3.1), g: 0.055, drag: 0.955,
            color: Math.random() < 0.55 ? hue : "#FFF3D6",
            maxLife: rand(60, 105),
          }));
        }
        start();
      },
      sparkle(x, y, n = 18) {
        n = REDUCED ? Math.round(n * 0.3) : n;
        for (let i = 0; i < n; i++) {
          const a = rand(0, Math.PI * 2), sp = rand(0.6, 3.4);
          add(Object.assign(base(), {
            type: "spark", x, y,
            vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
            size: rand(1, 2.4), g: 0.012, drag: 0.96,
            color: "#F1D9A0", maxLife: rand(40, 80),
          }));
        }
        start();
      },
    };
  })();


  /* ======================================================================
     MODAL  (shared by memories and letters)
     ====================================================================== */
  const modal = $("#modal");
  let lastFocus = null;

  function openModal({ eyebrow = "", title = "", body = "", letter = false }) {
    lastFocus = document.activeElement;
    $("#modalEyebrow").textContent = eyebrow;
    $("#modalEyebrow").hidden = !eyebrow;
    $("#modalTitle").textContent = title;
    const b = $("#modalBody");
    b.className = "modal__body" + (letter ? " is-letter" : "");
    b.innerHTML = String(body).split("\n\n")
      .map((p) => "<p>" + p.replace(/</g, "&lt;") + "</p>").join("");
    modal.hidden = false;
    requestAnimationFrame(() => modal.classList.add("is-on"));
    $("#modalClose").focus();
  }
  function closeModal() {
    modal.classList.remove("is-on");
    setTimeout(() => { modal.hidden = true; if (lastFocus) lastFocus.focus(); }, 420);
  }
  $("#modalClose").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target.hasAttribute("data-close")) closeModal(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });


  /* ======================================================================
     ACT I — THE GATE
     ====================================================================== */
  const gate = $("#gate");
  const gateForm = $("#gateForm");
  const gateCard = gateForm;
  const gateMsg = $("#gateMsg");
  const pwInput = $("#passwordInput");

  $$(".gate .reveal").forEach((n, i) => n.style.setProperty("--i", i));
  requestAnimationFrame(() =>
    $$(".gate .reveal").forEach((n) => n.classList.add("reveal--in")));

  const gateNudge = $("#gateNudge");
  let wrongCount = 0;

  function nudge(text) {
    gateNudge.textContent = text;
    gateNudge.classList.remove("is-on");
    void gateNudge.offsetWidth;
    gateNudge.classList.add("is-on");
  }

  $("#hintBtn").addEventListener("click", () => {
    gateMsg.textContent = PASSWORD_HINT;
    gateMsg.classList.add("is-on");
    gate.classList.add("is-fish-1");        // she swims in to take the credit
  });

  /* A few bubbles rising behind the card */
  (function seedBubbles() {
    if (REDUCED) return;
    const bowl = $("#bubbles");
    for (let i = 0; i < 9; i++) {
      const b = el("div", "bubble");
      b.style.setProperty("--bx", rand(4, 96).toFixed(0) + "%");
      b.style.setProperty("--bs", rand(5, 13).toFixed(0) + "px");
      b.style.setProperty("--bd", rand(7, 15).toFixed(1) + "s");
      b.style.setProperty("--bdelay", (-rand(0, 12)).toFixed(1) + "s");
      b.style.setProperty("--bdrift", rand(-40, 40).toFixed(0) + "px");
      bowl.appendChild(b);
    }
  })();

  gateForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = pwInput.value.trim().toLowerCase();
    if (value === SECRET_PASSWORD.trim().toLowerCase()) {
      unlock();
    } else {
      gateCard.classList.remove("is-wrong");
      void gateCard.offsetWidth;               // restart the shake
      gateCard.classList.add("is-wrong");
      gateMsg.textContent = "Wrong password, Mister Hacker 😏";
      gateMsg.classList.add("is-on");

      /* Each wrong try brings the goldfish closer and makes the hint plainer */
      wrongCount++;
      nudge(WRONG_NUDGES[Math.min(wrongCount, WRONG_NUDGES.length) - 1]);
      gate.classList.add("is-fish-" + Math.min(wrongCount, 3));

      pwInput.select();
    }
  });

  let unlocked = false;
  async function unlock() {
    if (unlocked) return;
    unlocked = true;
    gate.classList.add("is-leaving");
    $("#veil").classList.add("is-on");
    await wait(760);

    gate.hidden = true;
    $("#journey").hidden = false;
    document.body.classList.remove("is-locked");
    window.scrollTo(0, 0);

    buildJourney();
    await wait(60);
    $("#veil").classList.remove("is-on");
    $("#hello").classList.add("is-live");
    await wait(1400);
    /* Only show the letters counter if there are actually letters to find.
       (buildLetters hides it, but this line used to run afterwards and
       switch it straight back on.) */
    if (LETTERS.length) $("#hud").hidden = false;
  }

  $("#continueBtn").addEventListener("click", () => {
    $("#dusk").scrollIntoView({ behavior: REDUCED ? "auto" : "smooth", block: "start" });
  });


  /* ======================================================================
     ACT III — THE LIVE COUNTER
     ====================================================================== */
  const pad = (n) => String(n).padStart(2, "0");
  function tickCounter() {
    const diff = Math.max(0, Date.now() - RELATIONSHIP_START.getTime());
    const s = Math.floor(diff / 1000);
    $("#cDays").textContent  = Math.floor(s / 86400).toLocaleString();
    $("#cHours").textContent = pad(Math.floor(s / 3600) % 24);
    $("#cMins").textContent  = pad(Math.floor(s / 60) % 60);
    $("#cSecs").textContent  = pad(s % 60);
  }


  /* ======================================================================
     ACT IV — THE MEMORY SKY
     ====================================================================== */
  const found = new Set();
  const drawn = new Set();

  /* On a phone the sky panel is portrait, so each chapter can carry its own
     mobile coordinates (mx / my). Falls back to x / y if they're missing. */
  const isNarrow = () => window.matchMedia("(max-width: 860px)").matches;
  const px = (m) => (isNarrow() && m.mx != null ? m.mx : m.x);
  const py = (m) => (isNarrow() && m.my != null ? m.my : m.y);

  function buildSky() {
    const field = $("#skyField");
    const svg = $("#constellation");

    MEMORIES.forEach((m, i) => {
      const b = el("button", "star");
      b.type = "button";
      b.style.setProperty("--x", px(m) + "%");
      b.style.setProperty("--y", py(m) + "%");
      b.style.setProperty("--pulse", (i * 0.42).toFixed(2) + "s");
      b.setAttribute("aria-label", "Chapter " + (i + 1) + ": " + m.title);
      b.appendChild(el("span", "star__num", String(i + 1)));
      b.appendChild(el("span", "star__label", m.title));
      b.addEventListener("click", () => {
        if (!found.has(i)) {
          b.classList.add("star--found");
          found.add(i);
          connect(i - 1, i);
          connect(i, i + 1);
          updateSkyProgress();
          const r = b.getBoundingClientRect();
          FX.sparkle(r.left + r.width / 2, r.top + r.height / 2, 22);
        }
        openModal({ eyebrow: m.date, title: m.title, body: m.text });
      });
      field.appendChild(b);
    });

    /* Lines only ever join consecutive chapters, so the finished shape always
       traces the story in order no matter which star she taps first. */
    function connect(a, b) {
      if (a < 0 || b >= MEMORIES.length) return;
      if (!found.has(a) || !found.has(b)) return;
      const key = a + "-" + b;
      if (drawn.has(key)) return;
      drawn.add(key);
      const A = MEMORIES[a], B = MEMORIES[b];
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", px(A)); line.setAttribute("y1", py(A));
      line.setAttribute("x2", px(B)); line.setAttribute("y2", py(B));
      line.dataset.pair = key;
      line.style.setProperty("--len", Math.hypot(px(B) - px(A), py(B) - py(A)));
      svg.appendChild(line);
    }

    /* Re-point everything if the phone is rotated across the breakpoint */
    let narrow = isNarrow();
    window.addEventListener("resize", () => {
      if (isNarrow() === narrow) return;
      narrow = isNarrow();
      $$(".star", field).forEach((node, i) => {
        node.style.setProperty("--x", px(MEMORIES[i]) + "%");
        node.style.setProperty("--y", py(MEMORIES[i]) + "%");
      });
      $$("line", svg).forEach((line) => {
        const [a, b] = line.dataset.pair.split("-").map(Number);
        line.setAttribute("x1", px(MEMORIES[a])); line.setAttribute("y1", py(MEMORIES[a]));
        line.setAttribute("x2", px(MEMORIES[b])); line.setAttribute("y2", py(MEMORIES[b]));
      });
    }, { passive: true });

    function updateSkyProgress() {
      const n = found.size, total = MEMORIES.length;
      $("#skyProgress").textContent = n + " of " + total + " chapters lit";
      if (n === total) {
        const c = $("#skyComplete");
        c.hidden = false;
        requestAnimationFrame(() => c.classList.add("is-on"));
        const r = $("#skyField").getBoundingClientRect();
        FX.firework(r.left + r.width / 2, r.top + r.height / 2, 60);
      }
    }
    updateSkyProgress();
  }


  /* ======================================================================
     ACT V — THE TIMELINE  (plus cats and butterflies)
     ====================================================================== */
  function buildGallery() {
    const grid = $("#gallery");
    const catsBySlot = {};
    CATS.filter((c) => c.slot.startsWith("gallery-"))
        .forEach((c) => { catsBySlot[Number(c.slot.split("-")[1])] = c; });

    GALLERY.forEach((src, i) => {
      const fig = el("figure", "gal reveal gp" + ((i % 7) + 1));
      fig.style.setProperty("--rd", ((i % 3) * 0.12).toFixed(2) + "s");
      const img = el("img");
      img.alt = ""; img.loading = "lazy"; img.decoding = "async";
      loadPhoto(img, src, fig);
      fig.appendChild(img);
      grid.appendChild(fig);

      const cat = catsBySlot[i + 1];
      if (cat) grid.appendChild(makeCat(cat, "cat-meme--inline reveal"));
    });

    // Butterflies drifting through the photographs
    if (!REDUCED) {
      const story = $("#story");
      ["🦋", "🦋", "✿", "🦋"].forEach((g, i) => {
        const b = el("div", "butterfly", g);
        b.style.left = [10, 84, 6, 90][i] + "%";
        b.style.top = [30, 46, 70, 24][i] + "%";
        b.style.setProperty("--size", [22, 18, 16, 24][i] + "px");
        b.style.setProperty("--dur", [24, 30, 27, 21][i] + "s");
        b.style.setProperty("--delay", -i * 4 + "s");
        b.setAttribute("aria-hidden", "true");
        story.appendChild(b);
      });
    }
  }

  /* Tries the given path first, then the same name with each of the other
     common extensions. Only after all of them fail does it mark the slot. */
  function loadPhoto(img, src, fig) {
    /* Inline images (used by the single-file preview build) have no filename
       to retry, so they bypass all of this. */
    if (/^data:/i.test(src)) { img.src = src; return; }

    const base = src.replace(/\.[^./\\]+$/, "");
    const tries = [];
    if (src !== base) tries.push(src);                   // whatever was written
    PHOTO_EXTENSIONS.forEach((ext) => {
      const candidate = base + "." + ext;
      if (!tries.includes(candidate)) tries.push(candidate);
    });

    let i = 0;
    img.addEventListener("error", () => {
      i++;
      if (i < tries.length) { img.src = tries[i]; return; }
      fig.classList.add("gal--missing");
      fig.setAttribute("data-missing", base.split("/").pop());
      console.warn("No photo found for " + base +
        " — tried: " + tries.join(", ") +
        ". Check the file is in the assets folder and the name matches GALLERY in script.js.");
    });
    img.src = tries[0];
  }

  function makeCat(cat, extraClass) {
    const fig = el("figure", "cat-meme " + (extraClass || ""));
    const img = el("img");
    img.src = cat.img; img.alt = ""; img.loading = "lazy"; img.decoding = "async";
    img.style.setProperty("--delay", rand(0, 2).toFixed(1) + "s");
    const cap = el("figcaption");
    cap.textContent = cat.caption;
    fig.append(img, cap);
    return fig;
  }

  function placeLooseCats() {
    const put = (slot, target, cls) => {
      const cat = CATS.find((c) => c.slot === slot);
      if (cat && target) target.appendChild(makeCat(cat, cls));
    };
    put("dusk", $(".dusk .wrap"), "cat-meme--inline cat-meme--dark reveal");
    put("sky", $("#sky"), "cat-meme--inline cat-meme--dark reveal");
    put("quiz", $(".quiz .wrap"), "cat-meme--inline reveal");
    const prop = CATS.find((c) => c.slot === "proposal");
    if (prop) $("#proposal").insertBefore(makeCat(prop, "cat-meme--inline reveal"),
                                          $(".proposal__card"));
  }


  /* ======================================================================
     THE HIDDEN LETTERS
     ====================================================================== */
  let lettersFound = 0;

  function buildLetters() {
    LETTERS.forEach((letter, i) => {
      const host = $(letter.where);
      if (!host) return;
      const b = el("button", "envelope");
      b.type = "button";
      b.style.setProperty("--ex", letter.x);
      b.style.setProperty("--ey", letter.y);
      b.style.setProperty("--delay", (i * 0.5).toFixed(1) + "s");
      b.setAttribute("aria-label", "Open a hidden letter");
      b.addEventListener("click", () => {
        if (!b.classList.contains("is-open")) {
          b.classList.add("is-open");
          lettersFound++;
          const hud = $("#hud");
          $("#hudText").textContent =
            LETTER_PROGRESS[lettersFound - 1] ||
            lettersFound + " of " + LETTERS.length + " letters found";
          if (lettersFound === LETTERS.length) hud.classList.add("hud--complete");
          hud.classList.remove("is-bump");
          void hud.offsetWidth;
          hud.classList.add("is-bump");
          const r = b.getBoundingClientRect();
          FX.sparkle(r.left + r.width / 2, r.top + r.height / 2, 20);
        }
        openModal({ eyebrow: "A letter", title: letter.title, body: letter.text, letter: true });
      });
      host.appendChild(b);
    });
    // $("#hudText").textContent = LETTERS.length + " letters are hidden here";
    $("#hud").hidden = true;
  }


  /* ======================================================================
     ACT VI — THE QUIZ
     ====================================================================== */
  let quizCorrect = 0, quizAnswered = 0;

  function buildQuiz() {
    const list = $("#quizList");
    QUIZ.forEach((item) => {
      const q = el("div", "q reveal");
      const text = el("p", "q__text");
      text.textContent = item.q;
      const opts = el("div", "q__options");
      const reply = el("p", "q__reply");

      item.options.forEach((label, idx) => {
        const b = el("button", "q__opt");
        b.type = "button";
        b.textContent = label;
        b.addEventListener("click", () => {
          if (q.classList.contains("is-answered")) return;
          q.classList.add("is-answered");
          const correct = idx === item.answer;
          $$(".q__opt", q).forEach((o, oi) => {
            o.disabled = true;
            if (oi === item.answer) o.classList.add("is-right");
            else if (oi === idx) o.classList.add("is-wrong");
          });
          reply.textContent = correct ? item.right : item.wrong;
          reply.classList.add("is-on");
          quizAnswered++;
          if (correct) {
            quizCorrect++;
            q.classList.add("is-correct");
            const r = b.getBoundingClientRect();
            FX.sparkle(r.left + r.width / 2, r.top + r.height / 2, 16);
          }
          if (quizAnswered < QUIZ.length) {
            $("#quizScore").textContent = quizCorrect + " correct so far";
          } else {
            const ratio = quizCorrect / QUIZ.length;
            const verdict =
              ratio === 1   ? "flawless — marriage material" :
              ratio >= 0.5  ? "good enough, and I'd have married you either way" :
                              "wrong on most counts, and somehow still the right person";
            $("#quizScore").textContent =
              quizCorrect + " out of " + QUIZ.length + " — " + verdict;
          }
        });
        opts.appendChild(b);
      });

      q.append(text, opts, reply);
      list.appendChild(q);
    });
  }


  /* ======================================================================
     THE FUTURE BOARD
     ====================================================================== */
  function buildFuture() {
    const grid = $("#future");
    FUTURE.forEach((f) => {
      const c = el("div", "future__card reveal");
      c.innerHTML = '<span class="future__icon"></span>' +
                    '<h4 class="future__title"></h4>' +
                    '<p class="future__text"></p>';
      $(".future__icon", c).textContent  = f.icon;
      $(".future__title", c).textContent = f.title;
      $(".future__text", c).textContent  = f.text;
      grid.appendChild(c);
    });
  }


  /* ======================================================================
     MUSIC — the mp3, with a synthesised fallback if it can't be loaded
     ====================================================================== */
  const Music = (function () {
    let audio = null, ctxA = null, fallbackTimer = null, playing = false;

    function fadeTo(target, ms) {
      if (!audio) return;
      const from = audio.volume, t0 = performance.now();
      (function s(now) {
        const k = clamp((now - t0) / ms, 0, 1);
        audio.volume = clamp(from + (target - from) * k, 0, 1);
        if (k < 1) requestAnimationFrame(s);
      })(t0);
    }

    /* If assets/music.mp3 is missing, play a soft arpeggio in the browser
       so the moment still has a sound to it. */
    function startFallback() {
      try {
        ctxA = new (window.AudioContext || window.webkitAudioContext)();
        const master = ctxA.createGain();
        master.gain.value = 0.0001;
        master.connect(ctxA.destination);
        master.gain.exponentialRampToValueAtTime(0.16, ctxA.currentTime + 2);

        const chords = [[261.6, 329.6, 392.0], [246.9, 293.7, 392.0],
                        [220.0, 261.6, 329.6], [174.6, 220.0, 261.6]];
        let i = 0;
        const play = () => {
          const chord = chords[i % chords.length]; i++;
          chord.forEach((f, k) => {
            [1, 2].forEach((mult) => {
              const o = ctxA.createOscillator(), g = ctxA.createGain();
              o.type = "sine"; o.frequency.value = f * mult;
              const t = ctxA.currentTime + k * 0.26;
              g.gain.setValueAtTime(0.0001, t);
              g.gain.exponentialRampToValueAtTime(mult === 1 ? 0.5 : 0.16, t + 0.04);
              g.gain.exponentialRampToValueAtTime(0.0001, t + 2.4);
              o.connect(g); g.connect(master);
              o.start(t); o.stop(t + 2.5);
            });
          });
        };
        play();
        fallbackTimer = setInterval(play, 3000);
      } catch (err) { /* no audio available — the visuals carry it */ }
    }

    return {
      start() {
        if (playing) return;
        playing = true;
        audio = new Audio(MUSIC_SRC);
        audio.loop = true;
        audio.volume = 0;
        audio.play().then(() => fadeTo(0.7, 2600)).catch(startFallback);
        const toggle = $("#musicToggle");
        toggle.hidden = false;
        toggle.addEventListener("click", () => {
          const on = toggle.getAttribute("aria-pressed") === "true";
          toggle.setAttribute("aria-pressed", String(!on));
          $(".visually-hidden", toggle).textContent = on ? "Play music" : "Pause music";
          if (audio && !audio.paused) audio.pause();
          else if (audio) audio.play().catch(() => {});
          if (ctxA) on ? ctxA.suspend() : ctxA.resume();
        });
      },
    };
  })();


  /* ======================================================================
     THE SONG UNDER THE PHOTOGRAPHS
     Starts when she reaches the pictures, fades out when she reaches the quiz.
     ====================================================================== */
  const GallerySong = (function () {
    let audio = null, raf = 0, on = false, blocked = false;

    function ensure() {
      if (!audio) {
        audio = new Audio(GALLERY_MUSIC_SRC);
        audio.loop = true;
        audio.volume = 0;
        audio.preload = "auto";
      }
      return audio;
    }

    function fade(to, ms, done) {
      cancelAnimationFrame(raf);
      const from = audio.volume, t0 = performance.now();
      (function s(now) {
        const k = clamp((now - t0) / ms, 0, 1);
        audio.volume = clamp(from + (to - from) * k, 0, 1);
        if (k < 1) raf = requestAnimationFrame(s);
        else if (done) done();
      })(t0);
    }

    /* Browsers only allow sound after the person has interacted with the page.
       She has (the unlock button), so this normally just works — but if it's
       refused we surface a small pill instead of failing silently. */
    function attempt() {
      const a = ensure();
      a.play().then(() => {
        on = true; blocked = false;
        $("#songPill").hidden = true;
        fade(GALLERY_MUSIC_VOLUME, 2200);
      }).catch(() => {
        blocked = true;
        $("#songPill").hidden = false;
      });
    }

    $("#songPill").addEventListener("click", () => {
      if (on) { GallerySong.stop(); $("#songPillText").textContent = "Play the song"; }
      else { attempt(); $("#songPillText").textContent = "Pause the song"; }
    });

    return {
      play() { if (!on && !answered) attempt(); },
      stop() {
        if (!audio || !on) return;
        on = false;
        fade(0, 1400, () => audio.pause());
        if (blocked) $("#songPill").hidden = false;
      },
      get playing() { return on; },
    };
  })();

  /* The letters counter tucks itself away while she's at the question */
  const hudObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => $("#hud").classList.toggle("is-away", e.isIntersecting));
  }, { threshold: 0.35 });

  /* Play on the photographs, stop at the quiz. */
  const songObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      if (e.target.id === "story") GallerySong.play();
      if (e.target.id === "quiz") GallerySong.stop();
    });
  }, { threshold: 0.2 });


  /* ======================================================================
     THE FINALE — reveals itself when she scrolls to the very end
     ====================================================================== */
  const finaleObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      finaleObserver.unobserve(e.target);
      e.target.classList.add("is-on");
      const r = e.target.getBoundingClientRect();
      setTimeout(() => FX.sparkle(r.left + r.width / 2, r.top + r.height * 0.45, 40), 500);
      setTimeout(() => FX.hearts(20), 900);
      setTimeout(() => FX.firework(r.left + r.width / 2, r.top + r.height * 0.4, 56), 1700);
    });
  }, { threshold: 0.45 });


  /* ======================================================================
     ACT VII — THE QUESTION
     ====================================================================== */
  const noBtn = $("#noBtn");
  const yesBtn = $("#yesBtn");
  const note = $("#proposalNote");
  let noCount = 0, answered = false;

  function say(text) {
    note.textContent = text;
    note.classList.remove("is-on");
    void note.offsetWidth;
    note.classList.add("is-on");
  }

  /* Move the NO button, but never further than the room actually available —
     on a phone the buttons are full width, so it only has vertical space. */
  function nudgeNo(range) {
    const r = noBtn.getBoundingClientRect();
    const maxX = Math.max(0, Math.min(range, (window.innerWidth - r.width) / 2 - 14));
    const maxY = Math.max(0, Math.min(range, (window.innerHeight - r.height) / 2 - 14));
    noBtn.style.setProperty("--nx", rand(-maxX, maxX).toFixed(0) + "px");
    noBtn.style.setProperty("--ny", rand(-maxY, maxY).toFixed(0) + "px");
  }

  /* Dodge the pointer, but only for the first few attempts and never on
     keyboard focus — it should be a joke, not an obstacle course. */
  noBtn.addEventListener("mouseenter", () => {
    if (noCount >= 1 && noCount <= 5) nudgeNo(40 + noCount * 22);
  });

  async function showCatToast(step) {
    const cfg = CAT_TOASTS[step];
    if (!cfg) return;
    const toast = $("#catToast");
    $("#catToastImg").src = cfg.img;
    $("#catToastText").textContent = cfg.text;
    toast.hidden = false;
    requestAnimationFrame(() => toast.classList.add("is-on"));
    await wait(3400);
    toast.classList.remove("is-on");
    await wait(600);
    toast.hidden = true;
  }

  async function showLoader(lines, holdEach = 1200) {
    const loader = $("#loader"), text = $("#loaderText");
    loader.hidden = false;
    requestAnimationFrame(() => loader.classList.add("is-on"));
    for (const line of lines) {
      text.textContent = line;
      await wait(holdEach);
    }
    loader.classList.remove("is-on");
    await wait(500);
    loader.hidden = true;
  }

  noBtn.addEventListener("click", async () => {
    if (answered || noBtn.dataset.busy === "1") return;

    /* Once it has given up, it's just a YES button with a different history. */
    if (noBtn.classList.contains("is-converted")) { celebrate(); return; }

    noCount++;
    const step = noCount;
    say(NO_REPLIES[Math.min(step, NO_REPLIES.length) - 1]);

    switch (step) {
      case 1: nudgeNo(46); break;
      case 2: nudgeNo(120); showCatToast(2); break;
      case 3:
        nudgeNo(150);
        openModal({ eyebrow: "Notice", title: "I think your finger slipped.",
                    body: "It happens. The other button is right there, and it's much better looking." });
        break;
      case 4: nudgeNo(170); showCatToast(4); break;
      case 5:
        noBtn.style.setProperty("--ns", "0.68");
        nudgeNo(180);
        break;
      case 6:
        noBtn.style.setProperty("--nr", "18deg");
        noBtn.style.setProperty("--ns", "0.6");
        nudgeNo(200);
        break;
      case 7:
        noBtn.dataset.busy = "1";
        noBtn.classList.add("is-gone");
        await wait(2000);
        noBtn.classList.remove("is-gone");
        noBtn.style.setProperty("--nx", "0px");
        noBtn.style.setProperty("--ny", "0px");
        noBtn.style.setProperty("--nr", "0deg");
        noBtn.style.setProperty("--ns", "0.75");
        noBtn.dataset.busy = "0";
        break;
      case 8:
        document.body.classList.remove("is-quaking");
        void document.body.offsetWidth;
        document.body.classList.add("is-quaking");
        setTimeout(() => document.body.classList.remove("is-quaking"), 800);
        break;
      case 9:
        noBtn.dataset.busy = "1";
        await showLoader(["Searching every possible future…", "No valid future found."], 1700);
        noBtn.dataset.busy = "0";
        break;
      default:
        noBtn.dataset.busy = "1";
        await showLoader([
          "Submitting your response…",
          "Reviewing 4,102 shared memories…",
          "Consulting the cat…",
          "Request denied.",
          "Reason: you're already stuck with me ❤️",
        ], 1450);
        noBtn.textContent = "YES ❤️";
        noBtn.classList.add("is-converted");
        noBtn.classList.remove("is-gone");
        noBtn.dataset.busy = "0";
        say("There. Much better.");
        break;
    }
  });

  yesBtn.addEventListener("click", celebrate);

  async function celebrate() {
    if (answered) return;
    answered = true;

    const r = yesBtn.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;

    GallerySong.stop();
    Music.start();
    $("#rings").classList.add("is-on");
    FX.confetti(cx, cy, 130);
    FX.petals(40);
    document.body.classList.add("celebrating");

    noBtn.classList.add("is-gone");
    note.classList.remove("is-on");

    setTimeout(() => FX.firework(window.innerWidth * 0.22, window.innerHeight * 0.3), 600);
    setTimeout(() => FX.firework(window.innerWidth * 0.78, window.innerHeight * 0.24), 1100);
    setTimeout(() => FX.firework(window.innerWidth * 0.5,  window.innerHeight * 0.18), 1600);

    await wait(1150);
    yesBtn.textContent = "You made me the happiest man ❤️";
    yesBtn.disabled = true;
    yesBtn.style.opacity = "1";

    await wait(900);
    $("#rings").classList.add("is-fading");
    FX.confetti(window.innerWidth / 2, window.innerHeight / 2, 110);

    const after = $("#after");
    after.hidden = false;
    watchReveals(after);
    finaleObserver.observe($("#finale"));

    await wait(700);
    after.scrollIntoView({ behavior: REDUCED ? "auto" : "smooth", block: "start" });

    await wait(900);
    $("#afterBig").classList.add("is-on");
    FX.petals(34);

    await wait(2100);
    $("#afterSmall").classList.add("is-on");
    FX.firework(window.innerWidth * 0.5, window.innerHeight * 0.4, 64);

    await wait(1600);
    $("#afterFuture").classList.add("is-on");

    /* Floating hearts, from here on out. */
    FX.hearts(18);
    setInterval(() => FX.hearts(REDUCED ? 2 : 5), 1600);
    if (!REDUCED) setInterval(() => FX.petals(6), 2600);
  }


  /* ======================================================================
     BOOT
     ====================================================================== */
  let built = false;
  function buildJourney() {
    if (built) return;
    built = true;

    buildSky();
    buildGallery();
    placeLooseCats();
    buildQuiz();
    buildFuture();
    buildLetters();

    tickCounter();
    setInterval(tickCounter, 1000);

    songObserver.observe($("#story"));
    songObserver.observe($("#quiz"));
    hudObserver.observe($("#proposal"));

    watchReveals();
  }
})();
