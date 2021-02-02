"use strict";

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  console.log(event.target.dataset.link);
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);

  const scrollMove = document.querySelector(link);
  const top =
    scrollMove.offsetTop - navbarHeight < 0
      ? 0
      : scrollMove.offsetTop - navbarHeight;

  window.scrollTo({
    top: top,
    left: 0,
    behavior: "smooth",
  });
});

// Handle click on "contact me" button on home page
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

const active = document.querySelector(".category__btn.selected");
active.classList.remove("selected");
const target = e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
e.target.classList.add("selected");
