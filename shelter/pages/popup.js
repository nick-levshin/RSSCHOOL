export function popup(event, pets) {
  const pet = pets.filter(
    (pet) =>
      pet.name ===
      event.target.closest('.pets-slider__item').querySelector('p').innerHTML
  )[0];
  const popup = document.createElement('div');
  popup.classList.add('popup');
  const popupHTML = `
    <button class="popup-close"><img src="../../assets/images/close.svg" alt="close" /></button>
    <img src="${pet.img}" alt="${pet.name}" class="popup-img" />
    <div class="popup-info">
      <p class="popup-info__title">${pet.name}</p>
      <p class="popup-info__subtitle">${pet.type} - ${pet.breed}</p>
      <p class="popup-info__text">${pet.description}</p>
      <ul class="popup-info__list">
        <li class="popup-info__list-item"><strong>Age:</strong> ${pet.age}</li>
        <li class="popup-info__list-item"><strong>Inoculations:</strong> ${pet.inoculations.join(
          ''
        )}</li>
        <li class="popup-info__list-item"><strong>Diseases:</strong> ${pet.diseases.join(
          ''
        )}</li>
        <li class="popup-info__list-item"><strong>Parasites:</strong> ${pet.parasites.join(
          ''
        )}</li>
      </ul>
    </div>
  `;
  popup.insertAdjacentHTML('afterbegin', popupHTML);
  document.body.append(popup);

  const shadow = document.createElement('div');
  shadow.classList.add('shadow');
  document.body.append(shadow);

  setTimeout(() => {
    popup.style.opacity = '1';
    shadow.style.opacity = '1';
  });

  const close = document.querySelector('.popup-close');
  shadow.addEventListener('click', () => removePopup(popup, shadow));

  popup.addEventListener(
    'mouseout',
    () => (close.style.backgroundColor = '#f1cdb3')
  );
  popup.addEventListener('mouseover', (event) => {
    if (event.target !== close && event.target !== close.querySelector('img'))
      close.style.backgroundColor = 'transparent';
  });

  close.addEventListener('click', () => removePopup(popup, shadow));

  document.body.style.overflow = 'hidden';
}

export function removePopup(popup, shadow) {
  if (!popup) return;

  popup.style.opacity = '0';
  shadow.style.opacity = '0';

  document.body.style.overflow = 'auto';

  setTimeout(() => {
    popup.remove();
    shadow.remove();
  }, 400);
}
