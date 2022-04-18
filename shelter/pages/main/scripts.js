const petsJSON = import('../pets.json', {
  assert: {
    type: 'json',
  },
});

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

petsJSON.then((pets) => {
  shuffle(pets.default).forEach((pet) => {
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

  const clone = [...items];
  for (let i = 0; i < 5; i++) {
    clone.map((item) => {
      slider.append(item.cloneNode(true));
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
