/* ======================================================================
   MAIN.JS — OPTIMIZED FOR STATIC SCHOOL WEBSITE (GITHUB PAGES SAFE)
   ---------------------------------------------------------------
   - Loads header & footer
   - Handles mobile hamburger
   - Handles mobile dropdown
   - Auto closes menu after click
   - Prevents body scroll when menu open
   ====================================================================== */

// Run after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  loadPartials();
});

/* =====================================================
   LOAD HEADER & FOOTER
===================================================== */
function loadPartials() {

  // Load Header
  fetch('/Mothers-Convent-demo/partials/header.html')
    .then(res => res.text())
    .then(data => {
      const header = document.getElementById('header');
      if (header) {
        header.innerHTML = data;
        setupMenu(); // setup menu AFTER header loads
      }
    })
    .catch(err => console.error('Header load error:', err));

  // Load Footer
  fetch('/Mothers-Convent-demo/partials/footer.html')
    .then(res => res.text())
    .then(data => {
      const footer = document.getElementById('footer');
      if (footer) footer.innerHTML = data;
    })
    .catch(err => console.error('Footer load error:', err));
}


/* =====================================================
   MENU SYSTEM (MOBILE + DROPDOWN CONTROL)
===================================================== */
function setupMenu() {

  const menuToggle = document.getElementById('menuToggle');
  const navbar = document.getElementById('navbar');
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  if (!menuToggle || !navbar) return;

  /* ==============================
     HAMBURGER TOGGLE
  ============================== */
  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });


  /* ==============================
     MOBILE DROPDOWN
  ============================== */
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


  /* ==============================
     AUTO CLOSE MENU ON LINK CLICK
  ============================== */
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 600) {
        navbar.classList.remove('active');
        document.body.classList.remove('menu-open');

        document.querySelectorAll('.dropdown-menu').forEach(menu => {
          menu.classList.remove('active');
        });
      }
    });
  });
}
