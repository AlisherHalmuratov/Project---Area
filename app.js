const navBtn = document.querySelector(".nav-btn");
const navList = document.querySelector(".nav-list");
const navLink = document.querySelector(".link-nav");
const navbar = document.querySelector(".navbar");

navBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
  navbar.classList.toggle("active");
  navLink.classList.toggle("active");
  navBtn.classList.toggle("active");
});
