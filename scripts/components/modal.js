const content = [
  {
    title: 'Animais fantásticos',
    description:
      'O site animais fantásticos foi desenvolvido durante o curso de JavaScript, nele foi colocado em prática diversas funcionalidades observadas, como usar menu mobile, fazer fetch de dados e usar modal.',
    linkGit: 'https://github.com/VictorBaraldi/AnimaisFantasticos',
    LinkProjeto: 'https://victorbaraldi.github.io/AnimaisFantasticos/',
  },
];

export default class Modal {
  constructor() {
    this.modal = document.querySelector("[data-modal='container']");
    this.btnAbrir = document.querySelectorAll("[data-modal='abrir']");
    this.btnclose = document.querySelector('.fechar');
    this.title = document.querySelector('.modal-title h2');
    this.desc = document.querySelector('.modal-info p');
    this.projeto = document.querySelector('.link-project');
    this.git = document.querySelector('.link-repositorio');
  }

  openModal() {
    this.btnAbrir.forEach((valor) => {
      ['click', 'touchstart'].forEach((evento) => {
        valor.addEventListener(evento, (e) => {
          this.preencherModal(e);
          this.modal.classList.add('ativo');
        });
      });
    });
  }

  preencherModal(e) {
    const id = e.target.getAttribute('id');
    this.title.innerHTML = content[id].title;
    this.desc.innerHTML = content[id].description;
    this.projeto.setAttribute('href', content[id].LinkProjeto);
    this.git.setAttribute('href', content[id].linkGit);
  }

  closeModal() {
    ['click', 'touchstart'].forEach((evento) => {
      this.btnclose.addEventListener(evento, () => {
        this.modal.classList.remove('ativo');
      });
    });
  }

  init() {
    if (this.modal && this.btnAbrir && this.btnclose) {
      this.openModal();
      this.closeModal();
    }
  }
}
