document.addEventListener("DOMContentLoaded",function(){

loadPartials();
initSlider();

});

function loadPartials(){

const base="/Mothers-Convent-demo/";

fetch(base+"partial/header.html")
.then(r=>r.text())
.then(data=>{
document.getElementById("header").innerHTML=data;
initMenu();
});

fetch(base+"partial/footer.html")
.then(r=>r.text())
.then(data=>{
document.getElementById("footer").innerHTML=data;
});

}

function initMenu(){

const menuToggle=document.getElementById("menuToggle");
const navbar=document.getElementById("navbar");

if(!menuToggle || !navbar) return;

menuToggle.addEventListener("click",function(){

navbar.classList.toggle("active");

});

document.querySelectorAll(".dropdown-toggle").forEach(toggle=>{

toggle.addEventListener("click",function(e){

e.preventDefault();

const menu=this.parentElement.querySelector(".dropdown-menu");

document.querySelectorAll(".dropdown-menu").forEach(m=>{
if(m!==menu) m.classList.remove("active");
});

menu.classList.toggle("active");

});

});

}

function initSlider(){

const slides=document.querySelectorAll(".slide");

if(!slides.length) return;

let current=0;

slides[current].classList.add("active");

setInterval(function(){

slides[current].classList.remove("active");

current=(current+1)%slides.length;

slides[current].classList.add("active");

},4000);

}
