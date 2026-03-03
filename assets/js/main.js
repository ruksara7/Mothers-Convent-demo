/* ======================================================================
   MAIN.JS — FINAL STABLE VERSION (CLICK + HOVER DROPDOWN)
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
    .then(res => {
      if (!res.ok) throw new Error('Header not found');
      return res.text();
    })
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
    .then(res => {
      if (!res.ok) throw new Error('Footer not found');
      return res.text();
    })
    .then(data => {
      const footer = document.getElementById('footer');
      if (footer) footer.innerHTML = data;
    })
    .catch(err => console.error('Footer load error:', err));
}

/* =====================================================
   MENU SYSTEM (Mobile + Click Dropdown - BLANK BOX FIXED)
===================================================== */
function setupMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navbar = document.getElementById('navbar');

  if (!menuToggle || !navbar) {
    console.error('Menu elements not found');
    return;
  }

  /* ==============================
     MOBILE HAMBURGER
  ============================== */
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navbar.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  /* ==============================
     CLICK-BASED DROPDOWN (ALL DEVICES)
  ============================== */
  document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();

      const dropdownMenu = this.parentElement.querySelector('.dropdown-menu');
      
      // Close other dropdowns first
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
     CLOSE DROPDOWNS ON OUTSIDE CLICK
  ============================== */
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.remove('active');
      });
    }
  });

  /* ==============================
     AUTO CLOSE MOBILE MENU ON LINK CLICK
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

/* =====================================================
   HERO SLIDER (4-second auto-rotate)
===================================================== */
function initSlider() {
  const slides = document.querySelectorAll('.slide');
  if (!slides.length) return;

  let current = 0;
  slides[current].classList.add('active'); // Start first slide

  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 4000);
}
