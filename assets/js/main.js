/* =====================================================
   MAIN.JS
   Loads header/footer + navigation + slider
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

  loadPartials();
  initSlider();

});


/* =====================================================
   LOAD HEADER + FOOTER
===================================================== */

function loadPartials() {

  const headerContainer = document.getElementById("header");
  const footerContainer = document.getElementById("footer");

  if (headerContainer) {

    fetch("/partial/header.html")
      .then(response => response.text())
      .then(data => {

        headerContainer.innerHTML = data;
        setupMenu();

      })
      .catch(error => console.error("Header load error:", error));

  }

  if (footerContainer) {

    fetch("/partial/footer.html")
      .then(response => response.text())
      .then(data => {

        footerContainer.innerHTML = data;

      })
      .catch(error => console.error("Footer load error:", error));

  }

}


/* =====================================================
   NAVIGATION MENU
===================================================== */

function setupMenu() {

  const menuToggle = document.getElementById("menuToggle");
  const navbar = document.getElementById("navbar");

  if (!menuToggle || !navbar) return;


  /* MOBILE MENU */

  menuToggle.addEventListener("click", function () {

    navbar.classList.toggle("active");

  });


  /* DROPDOWN MENU */

  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  dropdownToggles.forEach(toggle => {

    toggle.addEventListener("click", function (e) {

      e.preventDefault();

      const dropdownMenu = this.nextElementSibling;

      document.querySelectorAll(".dropdown-menu").forEach(menu => {

        if (menu !== dropdownMenu) {

          menu.classList.remove("active");

        }

      });

      dropdownMenu.classList.toggle("active");

    });

  });


  /* CLOSE MENU WHEN CLICK OUTSIDE */

  document.addEventListener("click", function (e) {

    if (!e.target.closest(".navbar")) {

      document.querySelectorAll(".dropdown-menu").forEach(menu => {

        menu.classList.remove("active");

      });

    }

  });

}


/* =====================================================
   BANNER SLIDER
===================================================== */

function initSlider() {

  const slides = document.querySelectorAll(".slide");

  if (slides.length === 0) return;

  let current = 0;

  slides[0].classList.add("active");

  setInterval(function () {

    slides[current].classList.remove("active");

    current++;

    if (current >= slides.length) {

      current = 0;

    }

    slides[current].classList.add("active");

  }, 4000);

}
