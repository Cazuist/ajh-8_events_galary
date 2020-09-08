import ImageBox from './ImageBox';
import ErrorBox from './ErrorBox';

export default class Listeners {
  static delImg(event) {
    event.preventDefault();
    const { target } = event;

    if (target.classList.contains('del-box')) {
      this.removeChild(event.target.closest('DIV'));
    }
  }

  static onClickBtn(event) {
    event.preventDefault();

    if (Array.from(this.inputs).some((input) => input.value.length === 0)) {
      ErrorBox.createErrorBox.call(this, 'All fields must be filled!');
      return;
    }

    const name = this.inputs[0].value;
    const src = this.inputs[1].value;
    new ImageBox(name, src).createBox()
      .then((result) => {
        this.ribbon.append(result);
      })
      .catch((error) => ErrorBox.createErrorBox.call(this, error.message));

    this.inputs.forEach((input) => {
      // eslint-disable-next-line no-param-reassign
      input.value = '';
      input.blur();
    });
  }
}
