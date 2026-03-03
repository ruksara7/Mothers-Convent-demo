/* ======================================================================
   MAIN.JS — STATIC SCHOOL WEBSITE
   ====================================================================== */

// Run after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  loadPartials();
  initSlider();
});

/* =====================================================
   LOAD HEADER & FOOTER
===================================================== */
function loadPartials() {

  // Load Header
  fetch('partial/header.html')
    .then(res => res.text())
    .then(data => {
      const header = document.getElementById('header');
      if (header) {
        header.innerHTML = data;
        setupMenu();
      }
    })
    .catch(err => console.error('Header load error:', err));

  // Load Footer
  fetch('partial/footer.html')
    .then(res => res.text())
    .then(data => {
      const footer = document.getElementById('footer');
      if (footer) footer.innerHTML = data;
    })
    .catch(err => console.error('Footer load error:', err));
}

/* =====================================================
   MENU SYSTEM
===================================================== */
function setupMenu() {

  const menuToggle = document.getElementById('menuToggle');
  const navbar = document.getElementById('navbar');
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  if (!menuToggle || !navbar) return;

  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 600) {
        e.preventDefault();
        const dropdownMenu = toggle.parentElement.querySelector('.dropdown-menu');
        if (dropdownMenu) {
          dropdownMenu.classList.toggle('active');
        }
      }
    });
  });

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
