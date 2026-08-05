(function () {
  "use strict";

  /* ---- Theme toggle ---- */
  function initThemeToggle() {
    var toggle = document.querySelector(".theme-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
      var next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      toggle.setAttribute("aria-label", next === "dark" ? "Switch to light mode" : "Switch to dark mode");
    });

    var current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    toggle.setAttribute("aria-label", current === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }

  /* ---- Active nav link ---- */
  function initActiveNav() {
    var here = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("nav a[href]").forEach(function (link) {
      var href = link.getAttribute("href").split("/").pop();
      if (href === here) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      }
    });
  }

  /* ---- Sticky nav shadow on scroll ---- */
  function initStickyNavShadow() {
    var nav = document.querySelector(".page > nav");
    if (!nav) return;
    var onScroll = function () {
      if (window.scrollY > 8) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Reading progress bar ---- */
  function initProgressBar() {
    var bar = document.querySelector(".progress-bar");
    var content = document.querySelector(".essay, .poem");
    if (!bar || !content) return;

    var onScroll = function () {
      var start = content.offsetTop;
      var progress = (window.scrollY - start + window.innerHeight * 0.4) / content.offsetHeight;
      progress = Math.max(0, Math.min(1, progress));
      bar.style.width = (progress * 100) + "%";
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
  }

  /* ---- Work page filter ---- */
  function initWorkFilter() {
    var buttons = document.querySelectorAll(".filter-btn");
    var blocks = document.querySelectorAll(".section-block");
    if (!buttons.length || !blocks.length) return;

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var filter = btn.getAttribute("data-filter");

        buttons.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");

        blocks.forEach(function (block) {
          var category = block.getAttribute("data-category");
          var show = filter === "all" || filter === category;
          block.classList.toggle("is-hidden", !show);
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initThemeToggle();
    initActiveNav();
    initStickyNavShadow();
    initProgressBar();
    initWorkFilter();
  });
})();
