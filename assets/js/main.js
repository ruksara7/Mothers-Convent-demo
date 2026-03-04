/* =====================================================
   MASTER JS FOR STATIC SCHOOL WEBSITE
   Works for ALL pages in any folder depth
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  loadPartials();
  initSlider();
});


/* =====================================================
   DETERMINE BASE PATH AUTOMATICALLY
===================================================== */

function getBasePath() {

  const path = window.location.pathname;

  // remove file name
  const depth = path.split("/").slice(0, -1).filter(Boolean).length;

  return depth === 0 ? "" : "../".repeat(depth);

}


/* =====================================================
   LOAD HEADER + FOOTER
===================================================== */

function loadPartials() {

  const base = getBasePath();

  const header = document.getElementById("header");
  const footer = document.getElementById("footer");

  if (header) {
    fetch(base + "partial/header.html")
      .then(res => res.text())
      .then(html => {
        header.innerHTML = html;
        setupMenu();
      })
      .catch(err => console.error("Header load failed:", err));
  }

  if (footer) {
    fetch(base + "partial/footer.html")
      .then(res => res.text())
      .then(html => {
        footer.innerHTML = html;
      })
      .catch(err => console.error("Footer load failed:", err));
  }

}


/* =====================================================
   NAVIGATION MENU
===================================================== */

function setupMenu() {

  const toggle = document.getElementById("menuToggle");
  const navbar = document.getElementById("navbar");

  if (!toggle || !navbar) return;

  /* MOBILE MENU */

  toggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  /* DROPDOWN MENUS */

  document.querySelectorAll(".dropdown-toggle").forEach(btn => {

    btn.addEventListener("click", e => {

      e.preventDefault();

      const menu = btn.nextElementSibling;

      document.querySelectorAll(".dropdown-menu").forEach(m => {
        if (m !== menu) m.classList.remove("active");
      });

      menu.classList.toggle("active");

    });

  });

}


/* =====================================================
   HOMEPAGE SLIDER
===================================================== */

function initSlider() {

  const slides = document.querySelectorAll(".slide");

  if (!slides.length) return;

  let index = 0;

  slides[0].classList.add("active");

  setInterval(() => {

    slides[index].classList.remove("active");

    index = (index + 1) % slides.length;

    slides[index].classList.add("active");

  }, 4000);

}
