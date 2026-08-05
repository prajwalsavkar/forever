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
const SECRET_PASSWORD = "ourcat";
const PASSWORD_HINT   = "It has four legs, no manners, and sheds on everything.";

/* --------------------------------------------------------------------------
   2. WHEN IT ALL STARTED
   Used by the live counter. Format: year, month-1, day, hour, minute.
   (Months are zero-based, so 5 = June.)
   -------------------------------------------------------------------------- */
const RELATIONSHIP_START = new Date(2021, 5, 14, 19, 30);

/* --------------------------------------------------------------------------
   3. THE MEMORY SKY
   Each object is one star. x and y are percentages across the sky panel,
   so 50 / 50 is dead centre. Keep them between about 8 and 92.
   -------------------------------------------------------------------------- */
const MEMORIES = [
  { x: 16, y: 30, date: "The beginning",  title: "Our first long conversation",
    text: "Replace this with what you actually remember about that night — where you were, what time it got to, the thing she said that you still think about." },
  { x: 33, y: 62, date: "Early days",     title: "The first time you laughed at something I said",
    text: "Not a polite laugh. The real one, the one that makes no sound for the first two seconds. Write the story here." },
  { x: 47, y: 22, date: "That trip",      title: "The place we said we'd go back to",
    text: "Describe the view, the food, the exact moment you decided you wanted this to be permanent." },
  { x: 57, y: 71, date: "Not our finest", title: "The funniest fight we ever had",
    text: "Every couple has one that was genuinely about nothing. This is ours. Put it here — she'll know instantly." },
  { x: 72, y: 40, date: "The big one",    title: "The day we got engaged",
    text: "Write it exactly as you remember it, not as it should sound. The nervous parts are the good parts." },
  { x: 85, y: 72, date: "Any Tuesday",    title: "An entirely ordinary evening",
    text: "The one where nothing happened and it was still somehow the best day of that month. Those are the ones I keep." },
  { x: 27, y: 86, date: "Recently",       title: "Something from last week",
    text: "Proof that this isn't nostalgia — it's still happening. Put the most recent small thing you loved here." },
];

/* --------------------------------------------------------------------------
   4. THE STORY TIMELINE
   Drop your own pictures into the assets folder and point `photo` at them.
   Any file type works: "assets/us-in-goa.jpg", "assets/photo1.png", etc.
   -------------------------------------------------------------------------- */
const TIMELINE = [
  { photo: "assets/photo1.png", date: "Chapter one",   title: "Before I knew you",
    text: "Replace this caption. Two lines is plenty — the picture does the talking." },
  { photo: "assets/photo2.png", date: "Chapter two",   title: "The first photo of us",
    text: "The one where we're both slightly out of frame and neither of us is looking at the camera." },
  { photo: "assets/photo3.png", date: "Chapter three", title: "Somewhere new",
    text: "First trip. Terrible planning. Perfect anyway." },
  { photo: "assets/photo4.png", date: "Chapter four",  title: "The ordinary stretch",
    text: "Groceries, traffic, bad TV. Turns out this is the part I like most." },
  { photo: "assets/photo5.png", date: "Chapter five",  title: "The day everything got real",
    text: "You know the one." },
  { photo: "assets/photo6.png", date: "Chapter six",   title: "Now",
    text: "Which brings us, more or less, to this page." },
];

/* --------------------------------------------------------------------------
   5. THE HIDDEN LETTERS
   Five envelopes are scattered across the page. Write five short notes.
   Short and true beats long and impressive. Use \n\n for a paragraph break.
   -------------------------------------------------------------------------- */
const LETTERS = [
  { where: "#dusk",     x: "8%",  y: "30%", title: "For when you're tired",
    text: "Replace this with something you'd actually say to her at the end of a long day.\n\nIt doesn't need to be clever. It needs to sound like you." },
  { where: "#sky",      x: "91%", y: "24%", title: "Something I've never said out loud",
    text: "There's usually one. Write it here, where it's quiet." },
  { where: "#story",    x: "6%",  y: "46%", title: "The thing I noticed first",
    text: "Not the obvious thing. The small one you never mentioned because it sounded strange." },
  { where: "#quiz",     x: "92%", y: "62%", title: "An apology, still owed",
    text: "Pick the small one you never properly said sorry for. She'll laugh. Probably." },
  { where: "#proposal", x: "9%",  y: "76%", title: "Read this one last",
    text: "Whatever you'd want her to be holding in her head right before she answers the question below." },
];

/* --------------------------------------------------------------------------
   6. THE QUIZ
   `answer` is the index of the correct option, counting from 0.
   -------------------------------------------------------------------------- */
const QUIZ = [
  { q: "Who confessed first?",
    options: ["You did", "I did", "Neither — it was mutual and dignified"],
    answer: 1,
    right: "Correct. And I'd do it again, just as badly.",
    wrong: "Revisionist history. It was me, and I was a mess about it." },

  { q: "What's my favourite snack?",
    options: ["Whatever's on your plate", "Something spicy", "Anything after midnight"],
    answer: 0,
    right: "Obviously. It has always tasted better on your plate.",
    wrong: "Close, but no. It's whatever's on your plate." },

  { q: "Which song reminds me of you?",
    options: ["The one from the car", "The one you hum badly", "The one we danced to"],
    answer: 1,
    right: "That one. Wrong lyrics and all.",
    wrong: "Good guess, but it's the one you hum badly." },

  { q: "What was the first film we watched together?",
    options: ["You fell asleep, so — unclear", "The one you picked", "The one I picked"],
    answer: 0,
    right: "Exactly. Twenty minutes in, gone.",
    wrong: "Nope. You fell asleep. We'll never truly know." },
];

/* --------------------------------------------------------------------------
   7. THE CATS
   `slot` decides where each cat shows up:
     "story-1" … "story-4"  →  between timeline cards
     "sky"                  →  in the night sky section
     "quiz"                 →  under the quiz
     "proposal"             →  above the big question
   Add more by copying a line and giving it a new slot that already exists.
   -------------------------------------------------------------------------- */
const CATS = [
  { slot: "story-1",  img: "assets/cat1.svg", caption: "I think you dropped this 💍" },
  { slot: "story-2",  img: "assets/cat3.svg", caption: "You forgot something…" },
  { slot: "story-3",  img: "assets/cat5.svg", caption: "You forgot AGAIN…" },
  { slot: "story-4",  img: "assets/cat2.svg", caption: "Excuse me ma'am, this human is waiting." },
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
  { icon: "✈️", title: "Trips we'll take",   text: "Starting with the one we keep almost booking." },
  { icon: "🏡", title: "A home",             text: "Yours, mine, and far too many cushions." },
  { icon: "🎂", title: "Every birthday",     text: "I'll keep pretending I forgot. I never have." },
  { icon: "☕", title: "Slow Sundays",       text: "No plans. That's the plan." },
  { icon: "🐈", title: "More cats",          text: "This is not up for debate." },
  { icon: "🌙", title: "Ordinary nights",    text: "Thousands of them. That's the whole point." },
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

  $("#hintBtn").addEventListener("click", () => {
    gateMsg.textContent = PASSWORD_HINT;
    gateMsg.classList.add("is-on");
  });

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
    $("#hud").hidden = false;
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
  const foundOrder = [];

  function buildSky() {
    const field = $("#skyField");
    const svg = $("#constellation");

    MEMORIES.forEach((m, i) => {
      const b = el("button", "star");
      b.type = "button";
      b.style.setProperty("--x", m.x + "%");
      b.style.setProperty("--y", m.y + "%");
      b.style.setProperty("--pulse", (i * 0.42).toFixed(2) + "s");
      b.setAttribute("aria-label", "Memory: " + m.title);
      b.appendChild(el("span", "star__label", m.date));
      b.addEventListener("click", () => {
        if (!b.classList.contains("star--found")) {
          b.classList.add("star--found");
          foundOrder.push(i);
          drawConstellation();
          updateSkyProgress();
          const r = b.getBoundingClientRect();
          FX.sparkle(r.left + r.width / 2, r.top + r.height / 2, 22);
        }
        openModal({ eyebrow: m.date, title: m.title, body: m.text });
      });
      field.appendChild(b);
    });

    function drawConstellation() {
      if (foundOrder.length < 2) return;
      const a = MEMORIES[foundOrder[foundOrder.length - 2]];
      const b = MEMORIES[foundOrder[foundOrder.length - 1]];
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", a.x); line.setAttribute("y1", a.y);
      line.setAttribute("x2", b.x); line.setAttribute("y2", b.y);
      const len = Math.hypot(b.x - a.x, b.y - a.y);
      line.style.setProperty("--len", len);
      svg.appendChild(line);
    }

    function updateSkyProgress() {
      const n = foundOrder.length, total = MEMORIES.length;
      $("#skyProgress").textContent = n + " of " + total + " stars lit";
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
  function buildTimeline() {
    const tl = $("#timeline");
    const catsByStory = {};
    CATS.filter((c) => c.slot.startsWith("story-"))
        .forEach((c) => { catsByStory[Number(c.slot.split("-")[1])] = c; });

    TIMELINE.forEach((item, i) => {
      const side = i % 2 === 0 ? "tl-item--left" : "tl-item--right";
      const node = el("div", "tl-item reveal " + side);
      node.innerHTML =
        '<article class="tl-card">' +
          '<div class="tl-card__photo"><img src="' + item.photo +
            '" alt="" loading="lazy" decoding="async" /></div>' +
          '<div class="tl-card__body">' +
            '<p class="tl-card__date"></p>' +
            '<h3 class="tl-card__title"></h3>' +
            '<p class="tl-card__text"></p>' +
          "</div>" +
        "</article>";
      $(".tl-card__date", node).textContent  = item.date;
      $(".tl-card__title", node).textContent = item.title;
      $(".tl-card__text", node).textContent  = item.text;
      tl.appendChild(node);

      const cat = catsByStory[i + 1];
      if (cat) tl.appendChild(makeCat(cat, "cat-meme--inline reveal"));
    });

    // A few butterflies drifting through the story section
    if (!REDUCED) {
      const story = $("#story");
      ["🦋", "🦋", "✿", "🦋"].forEach((g, i) => {
        const b = el("div", "butterfly", g);
        b.style.left = [12, 82, 8, 88][i] + "%";
        b.style.top = [34, 48, 72, 26][i] + "%";
        b.style.setProperty("--size", [22, 18, 16, 24][i] + "px");
        b.style.setProperty("--dur", [24, 30, 27, 21][i] + "s");
        b.style.setProperty("--delay", -i * 4 + "s");
        b.setAttribute("aria-hidden", "true");
        story.appendChild(b);
      });
    }
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
          $("#hudText").textContent = lettersFound === LETTERS.length
            ? "All " + LETTERS.length + " letters found ❤️"
            : lettersFound + " of " + LETTERS.length + " letters found";
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
    $("#hudText").textContent = "0 of " + LETTERS.length + " letters found";
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
    buildTimeline();
    placeLooseCats();
    buildQuiz();
    buildFuture();
    buildLetters();

    tickCounter();
    setInterval(tickCounter, 1000);

    watchReveals();
  }
})();
