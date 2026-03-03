/* ======================================================================
   MAIN.JS — FINAL STABLE VERSION (CLICK DROPDOWN)
   ====================================================================== */

// Run after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  loadPartials();
  initSlider();
});

/* =====================================================
   LOAD HEADER & FOOTER (GitHub Pages Safe)
===================================================== */
function loadPartials() {

  const basePath = window.location.pathname.includes('Mothers-Convent-demo')
    ? '/Mothers-Convent-demo/'
    : '/';

  // HEADER
  fetch(basePath + 'partial/header.html')
    .then(res => res.text())
    .then(data => {
      const header = document.getElementById('header');
      if (header) {
        header.innerHTML = data;
        setupMenu(); // Initialize menu AFTER header loads
      }
    })
    .catch(err => console.error('Header load error:', err));

  // FOOTER
  fetch(basePath + 'partial/footer.html')
    .then(res => res.text())
    .then(data => {
      const footer = document.getElementById('footer');
      if (footer) footer.innerHTML = data;
    })
    .catch(err => console.error('Footer load error:', err));
}


/* =====================================================
   MENU SYSTEM (Mobile + Click Dropdown)
===================================================== */
function setupMenu() {

  const menuToggle = document.getElementById('menuToggle');
  const navbar = document.getElementById('navbar');

  if (!menuToggle || !navbar) return;

  /* ==============================
     MOBILE HAMBURGER
  ============================== */
  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  /* ==============================
     CLICK-BASED DROPDOWN (ALL DEVICES)
  ============================== */
  document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();

      const dropdownMenu = this.parentElement.querySelector('.dropdown-menu');

      // Close other dropdowns
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        if (menu !== dropdownMenu) {
          menu.classList.remove('active');
        }
      });

      // Toggle current dropdown
      if (dropdownMenu) {
        dropdownMenu.classList.toggle('active');
      }
    });
  });

  /* ==============================
     AUTO CLOSE MENU ON LINK CLICK (MOBILE)
  ============================== */
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 600) {
        navbar.classList.remove('active');
        document.body.classList.remove('menu-open');

        document.querySelectorAll('.dropdown-menu')
          .forEach(menu => menu.classList.remove('active'));
      }
    });
  });
}


/* =====================================================
   HERO SLIDER
===================================================== */
function initSlider() {
  const slides = document.querySelectorAll('.slide');
  if (!slides.length) return;

  let current = 0;

  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 4000);
}
