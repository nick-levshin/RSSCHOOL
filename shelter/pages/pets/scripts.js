let offset = 0;
const number = document.querySelector('.number');
const prevBtn = document.querySelector('.left');
const singlePrevBtn = document.querySelector('.left-single');
const nextBtn = document.querySelector('.right');
const singleNextBtn = document.querySelector('.right-single');
const slider = document.querySelector('.pets-slider');
const items = slider.getElementsByClassName('pets-slider__item');

let itemsPerPage = 8;
if (window.innerWidth < 1280) {
  itemsPerPage = 6;
}
if (window.innerWidth < 731) {
  itemsPerPage = 3;
}

function next() {
  if (!nextBtn.classList.contains('enable')) {
    return;
  }

  offset = slider.scrollWidth - slider.offsetWidth;
  slider.style.left = -offset + 'px';

  if (!prevBtn.classList.contains('enable')) {
    prevBtn.classList.toggle('enable');
    singlePrevBtn.classList.toggle('enable');
  }

  nextBtn.classList.toggle('enable');
  singleNextBtn.classList.toggle('enable');

  number.innerHTML = Math.ceil(items.length / itemsPerPage);
}

function nextSingle() {
  const style = slider.currentStyle || window.getComputedStyle(slider);

  if (!nextBtn.classList.contains('enable')) {
    return;
  }

  offset += slider.offsetWidth + parseInt(style.columnGap, 10);

  slider.style.left = -offset + 'px';

  number.innerHTML = (+number.innerHTML + 1).toString();

  if (number.innerHTML === Math.ceil(items.length / itemsPerPage).toString()) {
    nextBtn.classList.toggle('enable');
    singleNextBtn.classList.toggle('enable');
  }

  if (!prevBtn.classList.contains('enable')) {
    prevBtn.classList.toggle('enable');
    singlePrevBtn.classList.toggle('enable');
  }
}

function prev() {
  if (!prevBtn.classList.contains('enable')) {
    return;
  }

  offset = 0;
  slider.style.left = offset + 'px';

  if (!nextBtn.classList.contains('enable')) {
    nextBtn.classList.toggle('enable');
    singleNextBtn.classList.toggle('enable');
  }

  prevBtn.classList.toggle('enable');
  singlePrevBtn.classList.toggle('enable');

  number.innerHTML = '1';
}

function prevSingle() {
  const style = slider.currentStyle || window.getComputedStyle(slider);

  if (!prevBtn.classList.contains('enable')) {
    return;
  }

  offset -= slider.offsetWidth + parseInt(style.columnGap, 10);

  slider.style.left = -offset + 'px';

  number.innerHTML = (+number.innerHTML - 1).toString();

  if (number.innerHTML === '1') {
    prevBtn.classList.toggle('enable');
    singlePrevBtn.classList.toggle('enable');
  }

  if (!nextBtn.classList.contains('enable')) {
    nextBtn.classList.toggle('enable');
    singleNextBtn.classList.toggle('enable');
  }
}
