// navbar for small scrreen
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector("nav");

menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

// anchor tag active link

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// scroll reveal

ScrollReveal({ 
    reset: true,
    distance: '30px',
    duration: 2000,
    delay: 100
 });
 ScrollReveal().reveal('.home-content,.heading,.contact h3,.projects h3,.skills h3,.about h3', {origin:'top'});
 ScrollReveal().reveal('.home-image,.about,.contact form,.projects,.skills', {origin:'bottom'});
 ScrollReveal().reveal('.home-content h1', {origin:'left'});

