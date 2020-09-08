import Listeners from './Listeners';

export default class ManagerController {
  constructor() {
    this.wrapper = document.querySelector('.inputs-wrapper');
    this.inputs = document.querySelectorAll('input');
    this.btn = document.querySelector('button');
    this.ribbon = document.querySelector('.img-ribbon');
  }

  init() {
    this.addListeners();
  }

  addListeners() {
    this.ribbon.addEventListener('click', (event) => Listeners.delImg.call(this.ribbon, event));
    this.btn.addEventListener('click', (event) => Listeners.onClickBtn.call(this, event));
  }
}
