// Slider
const petsJSON = fetch('../pets.json').then((response) => {
  return response.json();
});

let offset = 0;
const number = document.querySelector('.number');
const prevBtn = document.querySelector('.left');
const singlePrevBtn = document.querySelector('.left-single');
const nextBtn = document.querySelector('.right');
const singleNextBtn = document.querySelector('.right-single');
const slider = document.querySelector('.pets-slider');
const items = slider.getElementsByClassName('pets-slider__item');

window.addEventListener(
  `resize`,
  (event) => {
    slider.style.left = 0;
  },
  false
);

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

petsJSON.then((pets) => {
  const random1 = shuffle(pets.slice(0, 4));
  for (let i = 0; i < 4; i++) {
    random1.forEach((pet) => {
      const sliderInner = `
          <img
            src="${pet.img}"
            alt="${pet.name}"
            class="pets-slider__image"
          />
          <p class="pets-slider__title">${pet.name}</p>
          <button class="pets-slider__button button">Learn more</button>
      `;

      const sliderItem = document.createElement('div');
      sliderItem.classList.add('pets-slider__item');
      sliderItem.insertAdjacentHTML('afterbegin', sliderInner);

      slider.append(sliderItem);
    });
  }

  for (let i = 0; i < 2; i++) {
    []
      .concat(random1)
      .reverse()
      .forEach((pet) => {
        const sliderInner = `
          <img
            src="${pet.img}"
            alt="${pet.name}"
            class="pets-slider__image"
          />
          <p class="pets-slider__title">${pet.name}</p>
          <button class="pets-slider__button button">Learn more</button>
      `;

        const sliderItem = document.createElement('div');
        sliderItem.classList.add('pets-slider__item');
        sliderItem.insertAdjacentHTML('afterbegin', sliderInner);

        slider.append(sliderItem);
      });
  }

  const random2 = shuffle(pets.slice(4));
  for (let i = 0; i < 4; i++) {
    random2.forEach((pet) => {
      const sliderInner = `
          <img
            src="${pet.img}"
            alt="${pet.name}"
            class="pets-slider__image"
          />
          <p class="pets-slider__title">${pet.name}</p>
          <button class="pets-slider__button button">Learn more</button>
      `;

      const sliderItem = document.createElement('div');
      sliderItem.classList.add('pets-slider__item');
      sliderItem.insertAdjacentHTML('afterbegin', sliderInner);

      slider.append(sliderItem);
    });
  }

  for (let i = 0; i < 2; i++) {
    []
      .concat(random2)
      .reverse()
      .forEach((pet) => {
        const sliderInner = `
          <img
            src="${pet.img}"
            alt="${pet.name}"
            class="pets-slider__image"
          />
          <p class="pets-slider__title">${pet.name}</p>
          <button class="pets-slider__button button">Learn more</button>
      `;

        const sliderItem = document.createElement('div');
        sliderItem.classList.add('pets-slider__item');
        sliderItem.insertAdjacentHTML('afterbegin', sliderInner);

        slider.append(sliderItem);
      });
  }
});

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

// Burger
// Burger
const burger = document.querySelector('.header-burger');
const menu = document.querySelector('.header-menu');
const overlay = document.querySelector('.overlay');

burger.addEventListener('click', slideMenu);
overlay.addEventListener('click', slideMenu);

const links = document.getElementsByClassName('header-menu__item');
[...links].forEach((link) => link.addEventListener('click', checkLink));

function slideMenu() {
  menu.classList.toggle('compressed');
  burger.classList.toggle('rotated');
  overlay.classList.toggle('active');

  if (!document.body.style.overflow || document.body.style.overflow === 'auto')
    document.body.style.overflow = 'hidden';
  else document.body.style.overflow = 'auto';
}

function checkLink() {
  if (menu.classList.contains('compressed')) slideMenu();
}
