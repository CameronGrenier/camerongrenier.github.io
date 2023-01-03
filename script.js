// Intro Video

setTimeout(function () {
    document.getElementById("intro").style.display = "none";
  }, 2500); // 3000 milliseconds = 3 seconds

// Header and Nav

// transparent on scroll
window.addEventListener('scroll', function () {
    var nav = document.getElementById('nav');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 170) {
        nav.style.backgroundColor = 'transparent';
    } else {
        nav.style.backgroundColor = '#0c092e';
    }
});

// hamburger menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
//Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

// Hero Page

let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let back_fog = document.getElementById('back');
let m3 = document.getElementById('m3');
let m2 = document.getElementById('m2');
let m1 = document.getElementById('m1');
let text = document.getElementById('text');
let front = document.getElementById('front');
let snow = document.getElementById('snow');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    back_fog.style.left = value * 0.1 + 'px';
    back_fog.style.top = value * 0.1 + 'px';
    m3.style.top = value * 0.1 + 'px';
    m2.style.top = value * 0.125 + 'px';
    m1.style.top = value * 0.15 + 'px';
    text.style.marginRight = value * 5.2 + 'px';
    snow.style.left = value * 5 + 'px';
});

// Projects Page

let stars2 = document.getElementById("stars2");
let moon2 = document.getElementById("moon2");
let m32 = document.getElementById("m32");
let m22 = document.getElementById("m22");
let snow2 = document.getElementById("snow2");
let fore2 = document.getElementById("fore2");
let project = document.getElementById("projects")
window.addEventListener("scroll", function () {
    let value = window.scrollY;
    let projectpos = project.offsetTop

    stars2.style.left = (value - projectpos) * 0.25 + 'px';
    moon2.style.top = (value - projectpos) * 1.05 + 'px';
    m32.style.top = (value - projectpos) * 0.1 + 'px';
    m22.style.top = (value - projectpos) * 0.125 + 'px';
    snow2.style.left = (value - projectpos + 400) * 5 + 'px';
});