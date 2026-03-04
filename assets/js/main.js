document.addEventListener('DOMContentLoaded', function() {
  loadPartials();
  initSlider();
});

function loadPartials() {
  // Load Header
  fetch('partials/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
      setTimeout(setupMenu, 150); // Wait for DOM to settle
    })
    .catch(err => console.error('Header load failed:', err));
    
  // Load Footer
  fetch('partials/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    })
    .catch(err => console.error('Footer load failed:', err));
}

function setupMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navbar = document.getElementById('navbar');
  
  if (!menuToggle || !navbar) return;
  
  // Mobile hamburger toggle
  menuToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    navbar.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });
  
  // Dropdown click handlers (mobile/tablet)
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const dropdown = this.parentElement;
      const menu = dropdown.querySelector('.dropdown-menu');
      
      // Close other dropdowns first
      document.querySelectorAll('.dropdown-menu').forEach(other => {
        if (other !== menu) other.classList.remove('active');
      });
      
      // Toggle current dropdown
      menu.classList.toggle('active');
    });
  });
  
  // Close menus when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('#navbar') && !e.target.closest('#menuToggle')) {
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.remove('active');
      });
      navbar.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
  
  // Mobile: auto-close menu after link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        navbar.classList.remove('active');
        document.body.classList.remove('menu-open');
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
          menu.classList.remove('active');
        });
      }
    });
  });
}

// Auto-rotating banner slider (homepage only)
function initSlider() {
  const slides = document.querySelectorAll('.slide');
  if (slides.length === 0) return;
  
  let current = 0;
  slides[0].classList.add('active');
  
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 4000); // Change every 4 seconds
}

// Smooth scrolling for anchor links (optional enhancement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
