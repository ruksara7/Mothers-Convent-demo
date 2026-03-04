/* ======================================================
   MASTER JS
   - Loads header & footer
   - Mobile menu
   - Dropdown toggle (mobile)
   - Hero slider
====================================================== */

document.addEventListener("DOMContentLoaded", () => {
  loadPartials();
  initSlider();
});

/* ===============================================
   LOAD HEADER + FOOTER
=============================================== */
function loadPartials() {

  fetch("/Mothers-Convent-demo/partial/header.html")
    .then(res => res.text())
    .then(data => {
      const header = document.getElementById("header");
      if(header){
        header.innerHTML = data;
        initMenu();
      }
    });

  fetch("/Mothers-Convent-demo/partial/footer.html")
    .then(res => res.text())
    .then(data => {
      const footer = document.getElementById("footer");
      if(footer){
        footer.innerHTML = data;
      }
    });

}

/* ===============================================
   MOBILE MENU
=============================================== */
function initMenu(){

  const toggle = document.getElementById("menuToggle");
  const navbar = document.getElementById("navbar");

  if(!toggle || !navbar) return;

  toggle.addEventListener("click",()=>{
    navbar.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });

  const dropdownButtons = document.querySelectorAll(".dropdown-toggle");

  dropdownButtons.forEach(btn=>{
    btn.addEventListener("click",()=>{

      if(window.innerWidth <= 600){
        const menu = btn.nextElementSibling;
        menu.classList.toggle("active");
      }

    });
  });

}

/* ===============================================
   HERO SLIDER
=============================================== */
function initSlider(){

  const slides = document.querySelectorAll(".slide");
  if(slides.length === 0) return;

  let index = 0;

  setInterval(()=>{
    slides[index].classList.remove("active");

    index++;
    if(index >= slides.length) index = 0;

    slides[index].classList.add("active");

  },4000);

}
