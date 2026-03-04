document.addEventListener("DOMContentLoaded", function () {

/* ======================================
   LOAD HEADER
====================================== */

fetch("/Mothers-Convent-demo/partial/header.html")
.then(res => res.text())
.then(data => {

document.getElementById("header").innerHTML = data;

initMenu();
initDropdowns();

});


/* ======================================
   LOAD FOOTER
====================================== */

fetch("/Mothers-Convent-demo/partial/footer.html")
.then(res => res.text())
.then(data => {

document.getElementById("footer").innerHTML = data;

});


/* ======================================
   NAVIGATION / HAMBURGER MENU
====================================== */

function initMenu(){

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

if(hamburger && nav){

hamburger.addEventListener("click", function(){
nav.classList.toggle("show");
});

}

}


/* ======================================
   MOBILE DROPDOWN
====================================== */

function initDropdowns(){

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(function (dropdown){

const link = dropdown.querySelector("a");

if(link){

link.addEventListener("click", function(e){

if(window.innerWidth <= 900){

e.preventDefault();

/* CLOSE OTHER DROPDOWNS */
dropdowns.forEach(function(d){
if(d !== dropdown){
d.classList.remove("open");
}
});

/* TOGGLE CURRENT */
dropdown.classList.toggle("open");

}

});

}

});

}


/* ======================================
   HOMEPAGE SLIDER
====================================== */

const slides = document.querySelectorAll(".slide");
let slideIndex = 0;

function showSlide(){

slides.forEach(function(slide){
slide.style.display = "none";
});

slideIndex++;

if(slideIndex > slides.length){
slideIndex = 1;
}

if(slides.length > 0){
slides[slideIndex - 1].style.display = "block";
}

}

if(slides.length > 0){

showSlide();
setInterval(showSlide,5000);

}


/* ======================================
   GALLERY ZOOM
====================================== */

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(function(img){

img.addEventListener("click", function(){

const overlay = document.createElement("div");
overlay.classList.add("img-overlay");

const largeImg = document.createElement("img");
largeImg.src = img.src;

overlay.appendChild(largeImg);
document.body.appendChild(overlay);

overlay.addEventListener("click", function(){
overlay.remove();
});

});

});

});
