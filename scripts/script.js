const btnMobile = document.querySelector(".btn-mobile");
const sobreBtn= document.querySelector(".sobre-btn");
const habBtn= document.querySelector(".hab-btn");
const formBtn= document.querySelector(".form-btn");
const projBtn= document.querySelector(".proj-btn");

btnMobile.addEventListener("click", function () {
  const nav = document.querySelector(".header-nav");
  nav.classList.toggle("active");
});

sobreBtn.addEventListener("click", function () {
  const nav = document.querySelector(".header-nav");
  nav.classList.toggle("active");
});

formBtn.addEventListener("click", function () {
  const nav = document.querySelector(".header-nav");
  nav.classList.toggle("active");
});

habBtn.addEventListener("click", function () {
  const nav = document.querySelector(".header-nav");
  nav.classList.toggle("active");
});

projBtn.addEventListener("click", function () {
  const nav = document.querySelector(".header-nav");
  nav.classList.toggle("active");
});

