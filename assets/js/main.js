/* =====================================================
   MAIN.JS
   Universal loader for header + footer + navigation
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

  loadPartials();
  initSlider();

});


/* =====================================================
   DETECT BASE PATH
===================================================== */

function getBasePath() {

  const depth = window.location.pathname.split("/").length - 2;

  if (depth <= 1) return "";

  return "../".repeat(depth - 1);

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
      .then(data => {

        header.innerHTML = data;
        setupMenu();

      })
      .catch(err => console.log("Header load error:", err));

  }

  if (footer) {

    fetch(base + "partial/footer.html")
      .then(res => res.text())
      .then(data => {

        footer.innerHTML = data;

      })
      .catch(err => console.log("Footer load error:", err));

  }

}


/* =====================================================
   NAVIGATION MENU
===================================================== */

function setupMenu() {

  const menuToggle = document.getElementById("menuToggle");
  const navbar = document.getElementById("navbar");

  if (!menuToggle || !navbar) return;

  menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("active");

  });


  document.querySelectorAll(".dropdown-toggle").forEach(toggle => {

    toggle.addEventListener("click", function (e) {

      e.preventDefault();

      const menu = this.nextElementSibling;

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

  let current = 0;

  slides[0].classList.add("active");

  setInterval(() => {

    slides[current].classList.remove("active");

    current = (current + 1) % slides.length;

    slides[current].classList.add("active");

  }, 4000);

}
