/* Vero Labs. Progressive enhancement only: the page is complete and
   static without this file. Four jobs, nothing else:
   1. sticky masthead bar once the masthead scrolls away
   2. one fade-up per section on first scroll into view
   3. one draw-in of the redline path per schematic (on load for data-draw="load")
   4. the process line follows scroll position (data-draw="scroll") */

(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var reveals = document.querySelectorAll(".reveal");
  var schematics = document.querySelectorAll(".schematic:not([data-draw=load])");
  var loadSchematics = document.querySelectorAll(".schematic[data-draw=load]");
  var scrollLines = document.querySelectorAll("[data-draw=scroll]");

  function showEverything() {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
    schematics.forEach(function (el) { el.classList.add("is-drawn"); });
    loadSchematics.forEach(function (el) { el.classList.add("is-drawn"); });
  }

  if (reduceMotion || !("IntersectionObserver" in window)) {
    showEverything();
  } else {
    // Threshold 0 for sections: a long section may never show 5% of itself on a phone.
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -40px 0px" });

    var drawObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-drawn");
        drawObserver.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -40px 0px", threshold: 0.05 });

    reveals.forEach(function (el) { revealObserver.observe(el); });
    schematics.forEach(function (el) { drawObserver.observe(el); });

    requestAnimationFrame(function () {
      loadSchematics.forEach(function (el) { el.classList.add("is-drawn"); });
    });

    if (scrollLines.length) {
      var ticking = false;
      var updateLines = function () {
        ticking = false;
        var vh = window.innerHeight;
        scrollLines.forEach(function (el) {
          var r = el.getBoundingClientRect();
          // Starts when the block's top passes 80% of the viewport, ends when its bottom reaches 60%.
          var p = (vh * 0.8 - r.top) / (r.height + vh * 0.2);
          el.style.setProperty("--draw-progress", Math.max(0, Math.min(1, p)).toFixed(3));
        });
      };
      var onScroll = function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(updateLines);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
      updateLines();
    }
  }

  var stickybar = document.getElementById("stickybar");
  var masthead = document.querySelector(".masthead");

  if (stickybar && masthead && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      stickybar.classList.toggle("is-visible", !entries[0].isIntersecting);
    }).observe(masthead);
  }
})();
