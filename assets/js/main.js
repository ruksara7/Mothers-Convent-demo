/* =========================================
   MASTER JS FOR STATIC SCHOOL WEBSITE
========================================= */

document.addEventListener("DOMContentLoaded", function () {

  loadPartials();
  initMenu();
  initSlider();

});


/* =========================================
   LOAD HEADER AND FOOTER
========================================= */

function loadPartials(){

  const header = document.getElementById("header");
  const footer = document.getElementById("footer");

  if(header){

    fetch("/partial/header.html")
    .then(res => res.text())
    .then(data => {

      header.innerHTML = data;

      /* menu must start AFTER header loads */
      initMenu();

    });

  }

  if(footer){

    fetch("/partial/footer.html")
    .then(res => res.text())
    .then(data => {

      footer.innerHTML = data;

    });

  }

}


/* =========================================
   MENU SYSTEM
========================================= */

function initMenu(){

  const toggle = document.getElementById("menuToggle");
  const navbar = document.getElementById("navbar");

  if(!toggle || !navbar) return;

  /* HAMBURGER */

  toggle.addEventListener("click", function(){

    navbar.classList.toggle("active");

  });


  /* DROPDOWN */

  document.querySelectorAll(".dropdown-toggle").forEach(function(btn){

    btn.addEventListener("click", function(e){

      e.preventDefault();

      const menu = this.nextElementSibling;

      document.querySelectorAll(".dropdown-menu").forEach(function(m){

        if(m !== menu){
          m.classList.remove("active");
        }

      });

      menu.classList.toggle("active");

    });

  });

}


/* =========================================
   HOMEPAGE SLIDER
========================================= */

function initSlider(){

  const slides = document.querySelectorAll(".slide");

  if(slides.length === 0) return;

  let current = 0;

  slides[current].classList.add("active");

  setInterval(function(){

    slides[current].classList.remove("active");

    current = (current + 1) % slides.length;

    slides[current].classList.add("active");

  },4000);

}
