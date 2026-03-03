function setupMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navbar = document.getElementById('navbar');
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  const dropdowns = document.querySelectorAll('.dropdown');

  // Mobile hamburger toggle
  menuToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    navbar.classList.toggle('active');
    
    // Change icon ☰ → ✕
    if (navbar.classList.contains('active')) {
      menuToggle.textContent = '✕';
    } else {
      menuToggle.textContent = '☰';
    }
  });

  // Dropdown click handlers (mobile + touch)
  dropdownToggles.forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const parent = this.parentElement;
      
      // Close other dropdowns
      dropdowns.forEach(function(dd) {
        if (dd !== parent) {
          dd.classList.remove('open');
        }
      });
      
      // Toggle current dropdown
      parent.classList.toggle('open');
    });
  });

  // Close menu when clicking outside (mobile)
  document.addEventListener('click', function() {
    navbar.classList.remove('active');
    menuToggle.textContent = '☰';
    dropdowns.forEach(function(dd) {
      dd.classList.remove('open');
    });
  });

  // Close menu when clicking nav links (mobile)
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        navbar.classList.remove('active');
        menuToggle.textContent = '☰';
        dropdowns.forEach(function(dd) {
          dd.classList.remove('open');
        });
      }
    });
  });

  // Handle window resize - reset mobile states
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      if (window.innerWidth > 768) {
        navbar.classList.remove('active');
        menuToggle.textContent = '☰';
        dropdowns.forEach(function(dd) {
          dd.classList.remove('open');
        });
      }
    }, 250);
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupMenu);
} else {
  setupMenu();
}

// Smooth scrolling for anchor links (bonus)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
