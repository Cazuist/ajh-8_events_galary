export default class ErrorBox {
  static createErrorBox(message) {
    const msgBox = document.createElement('DIV');

    msgBox.classList.add('error-message');
    msgBox.innerText = message;

    this.wrapper.append(msgBox);

    setTimeout(() => this.wrapper.removeChild(msgBox), 1000);
  }
}
