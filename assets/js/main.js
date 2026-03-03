/* ======================================================================
   MAIN.JS — FIXED DROPDOWN BOX ISSUE
   ====================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  loadPartials();
  initSlider();
});

function loadPartials() {
  const basePath = window.location.pathname.includes('Mothers-Convent-demo')
    ? '/Mothers-Convent-demo/' : '/';

  fetch(basePath + 'partial/header.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
      // DELAY setupMenu until DOM settles
      setTimeout(setupMenu, 100);
    })
    .catch(err => console.error('Header error:', err));

  fetch(basePath + 'partial/footer.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });
}

function setupMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navbar = document.getElementById('navbar');

  if (!menuToggle || !navbar) return;

  // CLOSE ALL DROPDOWNS FIRST (FIXES OPEN BOX)
  document.querySelectorAll('.dropdown-menu').forEach(menu => {
    menu.classList.remove('active');
  });

  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();

      const dropdownMenu = this.parentElement.querySelector('.dropdown-menu');
      
      // Close all other dropdowns
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        if (menu !== dropdownMenu) menu.classList.remove('active');
      });

      // Toggle current
      dropdownMenu.classList.toggle('active');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#navbar')) {
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.remove('active');
      });
      navbar.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });

  // Mobile auto-close
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

function initSlider() {
  const slides = document.querySelectorAll('.slide');
  if (!slides.length) return;

  let current = 0;
  slides[0].classList.add('active');

  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 4000);
}
