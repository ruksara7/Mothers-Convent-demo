document.addEventListener("DOMContentLoaded", function () {

/* ======================================
   NAVIGATION / HAMBURGER MENU
====================================== */

const hamburger = document.querySelector(".hamburger"); 
const nav = document.querySelector(".nav");

if (hamburger && nav) {

hamburger.addEventListener("click", function () {
nav.classList.toggle("show");
});

}


/* ======================================
   MOBILE DROPDOWN MENUS
====================================== */

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(function (dropdown) {

const link = dropdown.querySelector("a");

if (link) {

link.addEventListener("click", function (e) {

if (window.innerWidth <= 900) {

e.preventDefault();

dropdown.classList.toggle("open");

}

});

}

});


/* ======================================
   CLOSE MENU WHEN CLICK OUTSIDE
====================================== */

document.addEventListener("click", function (e) {

if (!e.target.closest(".site-header")) {

nav?.classList.remove("show");

dropdowns.forEach(function (d) {
d.classList.remove("open");
});

}

});


/* ======================================
   HOMEPAGE SLIDER
====================================== */

const slides = document.querySelectorAll(".slide");
let slideIndex = 0;

function showSlide() {

slides.forEach(function (slide) {
slide.style.display = "none";
});

slideIndex++;

if (slideIndex > slides.length) {
slideIndex = 1;
}

if (slides.length > 0) {
slides[slideIndex - 1].style.display = "block";
}

}

if (slides.length > 0) {

showSlide();

setInterval(showSlide, 5000);

}


/* ======================================
   GALLERY IMAGE CLICK ZOOM
====================================== */

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(function (img) {

img.addEventListener("click", function () {

const overlay = document.createElement("div");
overlay.classList.add("img-overlay");

const largeImg = document.createElement("img");
largeImg.src = img.src;

overlay.appendChild(largeImg);

document.body.appendChild(overlay);

overlay.addEventListener("click", function () {
overlay.remove();
});

});

});


/* ======================================
   SMOOTH SCROLL (optional links)
====================================== */

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {

anchor.addEventListener("click", function (e) {

const target = document.querySelector(this.getAttribute("href"));

if (target) {

e.preventDefault();

target.scrollIntoView({
behavior: "smooth"
});

}

});

});


/* ======================================
   WINDOW RESIZE RESET
====================================== */

window.addEventListener("resize", function () {

if (window.innerWidth > 900) {

nav?.classList.remove("show");

dropdowns.forEach(function (d) {
d.classList.remove("open");
});

}

});

});
