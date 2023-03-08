export default class MenuMobile {
  constructor() {
    this.btnMobile = document.querySelector('.btn-mobile');
    this.sobreBtn = document.querySelector('.sobre-btn');
    this.habBtn = document.querySelector('.hab-btn');
    this.formBtn = document.querySelector('.form-btn');
    this.projBtn = document.querySelector('.proj-btn');
  }

  init() {
    this.btnMobile.addEventListener('click', function () {
      const nav = document.querySelector('.header-nav');
      nav.classList.toggle('active');
    });

    this.sobreBtn.addEventListener('click', function () {
      const nav = document.querySelector('.header-nav');
      nav.classList.toggle('active');
    });

    this.formBtn.addEventListener('click', function () {
      const nav = document.querySelector('.header-nav');
      nav.classList.toggle('active');
    });

    this.habBtn.addEventListener('click', function () {
      const nav = document.querySelector('.header-nav');
      nav.classList.toggle('active');
    });

    this.projBtn.addEventListener('click', function () {
      const nav = document.querySelector('.header-nav');
      nav.classList.toggle('active');
    });
  }
}
