export default class ImageBox {
  constructor(name, url) {
    this.name = name;
    this.src = url;
  }

  createBox() {
    return new Promise((resolve, reject) => {
      const imgContainer = document.createElement('DIV');
      const imgBox = document.createElement('IMG');
      const delField = document.createElement('span');

      delField.innerText = 'X';
      delField.classList.add('del-box');
      delField.setAttribute('title', 'Remove image');
      imgBox.setAttribute('title', `${this.name}`);
      imgContainer.classList.add('img-box');

      imgBox.dataset.name = this.name;
      imgBox.src = this.src;
      imgContainer.append(imgBox, delField);

      imgBox.addEventListener('load', () => resolve(imgContainer));
      imgBox.addEventListener('error', () => reject(new Error('Invalid image URL!')));
    });
  }
}
