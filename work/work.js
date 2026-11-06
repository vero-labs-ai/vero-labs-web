/* Vero Labs /work/ pages: contact links + channel tag (?src=li|em|wa).
   Edit the two values below once; every page picks them up. */
(function () {
  "use strict";
  var EMAIL = "vishal@vero.co.in";   // swap for a shared inbox (e.g. hello@vero.co.in) when it exists
  var WHATSAPP = "919219763030";               // international format, digits only, e.g. "9198XXXXXXXX"; empty hides WhatsApp buttons

  var src = "";
  try {
    var q = new URLSearchParams(location.search).get("src");
    if (q && /^[a-z0-9_-]{1,20}$/i.test(q)) { src = q.toLowerCase(); sessionStorage.setItem("vero_src", src); }
    else { src = sessionStorage.getItem("vero_src") || ""; }
  } catch (e) { /* storage blocked: tag only this page */ }

  // keep the tag on links between our own pages
  if (src) {
    document.querySelectorAll("a[href]").forEach(function (a) {
      var h = a.getAttribute("href");
      if (!h || /^(mailto:|https?:|#|tel:)/.test(h) || h.indexOf("src=") > -1) return;
      var parts = h.split("#");
      parts[0] += (parts[0].indexOf("?") > -1 ? "&" : "?") + "src=" + encodeURIComponent(src);
      a.setAttribute("href", parts.join("#"));
    });
  }

  // contact buttons: <a data-contact="email|whatsapp" data-topic="...">
  document.querySelectorAll("[data-contact]").forEach(function (a) {
    var topic = a.getAttribute("data-topic") || "A project";
    var tag = src ? " [" + src + "]" : "";
    if (a.getAttribute("data-contact") === "email") {
      var body = "Hi Vero Labs,\n\nWhat we do by hand today:\n\nRoughly how often:\n\nCompany and website:\n";
      a.href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent(topic + tag) + "&body=" + encodeURIComponent(body);
      var show = a.querySelector("[data-email]"); if (show) show.textContent = EMAIL;
    } else {
      if (!WHATSAPP) { a.hidden = true; return; }
      a.href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent("Hi team, I am looking to discuss a project");
      a.target = "_blank"; a.rel = "noopener";
    }
  });
  document.querySelectorAll("[data-email-text]").forEach(function (el) { el.textContent = EMAIL; });
})();
