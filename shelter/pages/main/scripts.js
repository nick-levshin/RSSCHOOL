let offset = 0;
const slider = document.querySelector('.pets-slider');
const items = slider.getElementsByClassName('pets-slider__item');

function next() {
  offset += 1080;
  if (offset > slider.scrollWidth) {
    offset = 0;
  }

  slider.style.left = -offset + 'px';
}

function prev() {
  offset -= 1080;
  if (offset < 0) {
    offset =
      items.length * (items[0].offsetWidth + items[1].style.marginRight) -
      items[1].style.marginRight;
  }

  slider.style.left = -offset + 'px';
}
