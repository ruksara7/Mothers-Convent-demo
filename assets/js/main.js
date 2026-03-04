/* ======================================================================
   MAIN.JS — HEADER LOAD + DROPDOWN + MOBILE MENU
   ====================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  loadPartials();
  initSlider();
});

/* ================= LOAD HEADER & FOOTER ================= */

function loadPartials() {

  const basePath = "/Mothers-Convent-demo/";

  fetch(basePath + "partial/header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;

      // wait until header HTML exists in DOM
      setupMenu();
    })
    .catch(err => console.error("Header load error:", err));

  fetch(basePath + "partial/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch(err => console.error("Footer load error:", err));
}


/* ================= MENU SYSTEM ================= */

function setupMenu() {

  const menuToggle = document.getElementById("menuToggle");
  const navbar = document.getElementById("navbar");

  if (!menuToggle || !navbar) return;

  /* MOBILE MENU TOGGLE */

  menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });

  /* DROPDOWN CLICK */

  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  dropdownToggles.forEach(toggle => {

    toggle.addEventListener("click", function (e) {

      e.preventDefault();

      const dropdown = this.parentElement;
      const menu = dropdown.querySelector(".dropdown-menu");

      /* close other dropdowns */

      document.querySelectorAll(".dropdown-menu").forEach(otherMenu => {
        if (otherMenu !== menu) {
          otherMenu.classList.remove("active");
        }
      });

      /* toggle current */

      menu.classList.toggle("active");

    });

  });


  /* CLOSE MENU IF CLICK OUTSIDE */

  document.addEventListener("click", function (e) {

    if (!e.target.closest("#navbar")) {

      document.querySelectorAll(".dropdown-menu").forEach(menu => {
        menu.classList.remove("active");
      });

      navbar.classList.remove("active");
      document.body.classList.remove("menu-open");

    }

  });


  /* MOBILE AUTO CLOSE */

  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {

    link.addEventListener("click", function () {

      if (window.innerWidth <= 600) {

        navbar.classList.remove("active");
        document.body.classList.remove("menu-open");

        document.querySelectorAll(".dropdown-menu").forEach(menu => {
          menu.classList.remove("active");
        });

      }

    });

  });

}


/* ================= HOMEPAGE SLIDER ================= */

function initSlider() {

  const slides = document.querySelectorAll(".slide");

  if (!slides.length) return;

  let current = 0;

  slides[current].classList.add("active");

  setInterval(function () {

    slides[current].classList.remove("active");

    current = (current + 1) % slides.length;

    slides[current].classList.add("active");

  }, 4000);

}
