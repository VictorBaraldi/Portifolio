import MenuMobile from './components/mobile.js';
import Scroll from './components/scroll.js';
import Modal from './components/modal.js';

const menuMobile = new MenuMobile();
menuMobile.init();

const scroll = new Scroll("a[href^='#']");
scroll.init();

const modal = new Modal();
modal.init();
