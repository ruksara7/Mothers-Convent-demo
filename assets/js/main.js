/* ================================
MASTER JS
================================ */

document.addEventListener("DOMContentLoaded", () => {

  loadHeaderFooter();
  initSlider();

});


/* ================================
AUTO PATH DETECTION
================================ */

function basePath(){

  const depth = location.pathname.split("/").length - 2;

  return depth <= 1 ? "" : "../".repeat(depth-1);

}


/* ================================
LOAD HEADER + FOOTER
================================ */

function loadHeaderFooter(){

  const base = basePath();

  const header = document.getElementById("header");
  const footer = document.getElementById("footer");

  if(header){

    fetch(base + "partial/header.html")
    .then(r => r.text())
    .then(html => {

      header.innerHTML = html;

      /* IMPORTANT */
      initMenu();

    });

  }

  if(footer){

    fetch(base + "partial/footer.html")
    .then(r => r.text())
    .then(html => {

      footer.innerHTML = html;

    });

  }

}


/* ================================
MENU SYSTEM
================================ */

function initMenu(){

  const toggle = document.getElementById("menuToggle");
  const navbar = document.getElementById("navbar");

  if(!toggle || !navbar) return;

  toggle.onclick = () => {

    navbar.classList.toggle("active");

  };


  document.querySelectorAll(".dropdown-toggle").forEach(btn => {

    btn.onclick = (e)=>{

      e.preventDefault();

      const menu = btn.nextElementSibling;

      document.querySelectorAll(".dropdown-menu").forEach(m=>{
        if(m!==menu) m.classList.remove("active");
      });

      menu.classList.toggle("active");

    };

  });

}


/* ================================
SLIDER
================================ */

function initSlider(){

  const slides = document.querySelectorAll(".slide");

  if(!slides.length) return;

  let i=0;

  slides[0].classList.add("active");

  setInterval(()=>{

    slides[i].classList.remove("active");

    i=(i+1)%slides.length;

    slides[i].classList.add("active");

  },4000);

}
