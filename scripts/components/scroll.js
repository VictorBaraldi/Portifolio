export default class Scroll {
  constructor(link) {
    this.links = document.querySelectorAll(link);
    this.options = {
      behavior: 'smooth',
      block: 'start',
    };
  }

  scrollSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const link = document.querySelector(href);
    link.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.links.forEach((value) => {
      ['click', 'touchstart'].forEach((event) => {
        value.addEventListener(event, (e) => {
          this.scrollSection(e);
        });
      });
    });
  }

  init() {
    if (this.links.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
