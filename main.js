/* ============================================================
   Vero Labs : main.js
   Progressive enhancement only. The page is fully readable and
   navigable without any of this. Every animation is gated behind
   prefers-reduced-motion.
   ============================================================ */
"use strict";

(function () {
  var doc = document;
  var root = doc.documentElement;
  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Nav: sticky background + mobile toggle ------------- */
  function initNav() {
    var header = doc.querySelector(".site-header");
    var toggle = doc.querySelector(".nav__toggle");
    var menu = doc.getElementById("nav-menu");

    if (header) {
      var onScroll = function () {
        header.classList.toggle("is-scrolled", window.scrollY > 80);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    if (toggle && menu) {
      var setOpen = function (open) {
        menu.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      };
      toggle.addEventListener("click", function () {
        setOpen(toggle.getAttribute("aria-expanded") !== "true");
      });
      // Close after picking a destination.
      menu.addEventListener("click", function (e) {
        if (e.target.closest("a")) setOpen(false);
      });
      // Close on Escape.
      doc.addEventListener("keydown", function (e) {
        if (e.key === "Escape") setOpen(false);
      });
    }
  }

  /* ---- Copy-to-clipboard on contact emails --------------- */
  function initCopyEmails() {
    var emails = doc.querySelectorAll(".contact__email[data-copy]");
    if (!emails.length) return;

    // Shared polite live region for screen-reader confirmation.
    var live = doc.createElement("div");
    live.className = "visually-hidden";
    live.setAttribute("aria-live", "polite");
    doc.body.appendChild(live);

    emails.forEach(function (el) {
      el.setAttribute("role", "button");
      el.setAttribute("tabindex", "0");
      el.setAttribute("title", "Click to copy");

      var copy = function () {
        var value = el.getAttribute("data-copy");
        var done = function () {
          el.classList.add("is-copied");
          live.textContent = value + " copied to clipboard";
          window.setTimeout(function () { el.classList.remove("is-copied"); }, 1400);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(value).then(done).catch(function () {});
        } else {
          // Legacy fallback.
          var ta = doc.createElement("textarea");
          ta.value = value;
          ta.setAttribute("readonly", "");
          ta.style.position = "absolute";
          ta.style.left = "-9999px";
          doc.body.appendChild(ta);
          ta.select();
          try { doc.execCommand("copy"); done(); } catch (err) {}
          doc.body.removeChild(ta);
        }
      };

      el.addEventListener("click", copy);
      el.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); copy(); }
      });
    });
  }

  /* ---- Section scroll reveals ---------------------------- */
  function initReveals() {
    var targets = doc.querySelectorAll("main > section, .site-footer");
    targets.forEach(function (el) { el.classList.add("reveal"); });

    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    targets.forEach(function (el) { io.observe(el); });
  }

  /* ---- Hero systems panel load orchestration ------------- */
  function initHeroPanel() {
    var panel = doc.querySelector(".panel");
    if (!panel) return;
    var services = panel.querySelectorAll(".panel__service");
    var stages = panel.querySelectorAll(".pipe-stage");
    var status = panel.querySelector(".panel__status");

    var t = 250;
    // 1. Service lines appear in sequence.
    services.forEach(function (line, i) {
      window.setTimeout(function () { line.classList.add("is-shown"); }, t + i * 160);
    });

    // 2. Pipeline lights stage by stage, earlier stages settle to "done".
    var pipeStart = t + services.length * 160 + 250;
    stages.forEach(function (stage, i) {
      window.setTimeout(function () {
        stage.classList.add("is-lit");
        if (i > 0) stages[i - 1].classList.add("is-done");
      }, pipeStart + i * 260);
    });

    // 3. Settle: keep only the final stage lit, reveal the live status.
    var settle = pipeStart + stages.length * 260 + 200;
    window.setTimeout(function () {
      stages.forEach(function (stage, i) {
        if (i < stages.length - 1) {
          stage.classList.remove("is-lit");
          stage.classList.add("is-done");
        }
      });
      if (status) status.classList.add("is-shown");
    }, settle);
  }

  /* ---- Call-loop pulse sweep ----------------------------- */
  function initCallLoop() {
    var loop = doc.querySelector(".callloop");
    if (!loop) return;
    var nodes = loop.querySelectorAll(".cl-node");
    if (!nodes.length) return;

    var sweep = function () {
      nodes.forEach(function (node, i) {
        window.setTimeout(function () {
          node.classList.add("is-lit");
          window.setTimeout(function () { node.classList.remove("is-lit"); }, 520);
        }, i * 260);
      });
    };

    if (!("IntersectionObserver" in window)) { sweep(); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { sweep(); io.unobserve(entry.target); }
      });
    }, { threshold: 0.4 });
    io.observe(loop);
  }

  /* ---- Boot ---------------------------------------------- */
  function boot() {
    // Behaviors that run regardless of motion preference.
    initNav();
    initCopyEmails();

    if (reduceMotion) return; // Leave everything visible and static.

    root.classList.add("anim-ready");
    initReveals();
    initHeroPanel();
    initCallLoop();
  }

  if (doc.readyState === "loading") {
    doc.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
