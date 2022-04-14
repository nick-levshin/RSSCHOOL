let offset = 0;
const slider = document.querySelector('.pets-slider');
const items = slider.getElementsByClassName('pets-slider__item');

function next() {
  const style = items[0].currentStyle || window.getComputedStyle(items[0]);
  offset += slider.offsetWidth + parseInt(style.marginRight, 10);
  if (offset > slider.scrollWidth) {
    offset = 0;
  }

  slider.style.left = -offset + 'px';
}

function prev() {
  let length = 3;
  let remainder = items.length - (items.length % length || 3);
  if (window.innerWidth < 1200) {
    length = 2;
    remainder = items.length - (items.length % length || 2);
  }
  if (window.innerWidth < 730) {
    length = 1;
    remainder = items.length - 1;
  }

  const style = items[0].currentStyle || window.getComputedStyle(items[0]);

  offset -= slider.offsetWidth + parseInt(style.marginRight, 10);
  if (offset < 0) {
    offset =
      remainder * (items[0].offsetWidth + parseInt(style.marginRight, 10));
  }

  slider.style.left = -offset + 'px';
}
