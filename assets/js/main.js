/* =========================================
MAIN JS — HEADER + MENU + SLIDER
========================================= */

document.addEventListener("DOMContentLoaded", function(){

loadPartials();
initSlider();

});

/* =========================================
LOAD HEADER / FOOTER
========================================= */

function loadPartials(){

const base = "/Mothers-Convent-demo/";

fetch(base + "partial/header.html")
.then(res => res.text())
.then(data => {

```
  document.getElementById("header").innerHTML = data;

  initMenu();
```

})
.catch(err => console.error("Header load error:", err));

fetch(base + "partial/footer.html")
.then(res => res.text())
.then(data => {

```
  document.getElementById("footer").innerHTML = data;
```

})
.catch(err => console.error("Footer load error:", err));

}

/* =========================================
MENU SYSTEM
========================================= */

function initMenu(){

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if(!menuToggle || !navbar) return;

/* ensure menu closed initially */

navbar.classList.remove("active");

/* hamburger toggle */

menuToggle.addEventListener("click", function(e){

```
  e.stopPropagation();

  navbar.classList.toggle("active");
```

});

/* dropdown toggle for mobile */

document.querySelectorAll(".dropdown-toggle").forEach(toggle => {

```
  toggle.addEventListener("click", function(e){

      if(window.innerWidth <= 768){

          e.preventDefault();

          const menu = this.parentElement.querySelector(".dropdown-menu");

          document.querySelectorAll(".dropdown-menu").forEach(m=>{
              if(m !== menu) m.classList.remove("active");
          });

          menu.classList.toggle("active");

      }

  });
```

});

/* close menu when clicking outside */

document.addEventListener("click", function(e){

```
  if(!e.target.closest("#navbar") && !e.target.closest("#menuToggle")){

      navbar.classList.remove("active");

      document.querySelectorAll(".dropdown-menu").forEach(menu=>{
          menu.classList.remove("active");
      });

  }
```

});

}

/* =========================================
HERO SLIDER
========================================= */

function initSlider(){

const slides = document.querySelectorAll(".slide");

if(slides.length === 0) return;

let current = 0;

slides[current].classList.add("active");

setInterval(function(){

```
  slides[current].classList.remove("active");

  current = (current + 1) % slides.length;

  slides[current].classList.add("active");
```

}, 4000);

}
