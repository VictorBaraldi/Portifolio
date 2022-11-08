const btnMobile = document.querySelector(".btn-mobile");

btnMobile.addEventListener("click", function () {
  const nav = document.querySelector(".header-nav");
  nav.classList.toggle("active");
});
