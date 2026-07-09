/* Vero Labs v2. Progressive enhancement only: the page is complete and
   static without this file. Three jobs, nothing else:
   1. sticky masthead bar once the masthead scrolls away
   2. one fade-up per section on first scroll into view
   3. one draw-in of the redline path per schematic */

(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var reveals = document.querySelectorAll(".reveal");
  var schematics = document.querySelectorAll(".schematic");

  function showEverything() {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
    schematics.forEach(function (el) { el.classList.add("is-drawn"); });
  }

  if (reduceMotion || !("IntersectionObserver" in window)) {
    showEverything();
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add(
          entry.target.classList.contains("schematic") ? "is-drawn" : "is-visible"
        );
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -40px 0px", threshold: 0.05 });

    reveals.forEach(function (el) { observer.observe(el); });
    schematics.forEach(function (el) { observer.observe(el); });
  }

  var stickybar = document.getElementById("stickybar");
  var masthead = document.querySelector(".masthead");

  if (stickybar && masthead && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      stickybar.classList.toggle("is-visible", !entries[0].isIntersecting);
    }).observe(masthead);
  }
})();
