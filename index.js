/* Задание
Создай галерею с возможностью клика по ее элементам 
 и просмотра полноразмерного изображения в модальном окне.
 
Разбей задание на несколько подзадач:
-Создание и рендер разметки по массиву данных и предоставленному шаблону.
-Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
-Открытие модального окна по клику на элементе галереи.
-Подмена значения атрибута src элемента img.lightbox__image.
-Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
-Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, 
чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.
*/

import gallery from './gallery-items.js';

// Создание и рендер разметки по массиву данных и предоставленному шаблону.

const refs = {
    galleryList: document.querySelector('.js-gallery'),
    modal: document.querySelector('.lightbox'),
    modalImg: document.querySelector('.lightbox__image'),
    btnCloseModal: document.querySelector('button[data-action="close-lightbox"]'),
    overlay: document.querySelector('.lightbox__overlay'),
};
  
// создание списка с помощью insertAdjacentHTML с деструктуризацией
const galleryItems = gallery
    .map((item, index) => createGalleryItem(item, index))
    .join('');
 function createGalleryItem({ original, preview, description }, index) {
    const galleryElement = `
      <li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        data-index="${index}"
        alt="${description}"
      />
    </a>
  </li>
    `;
    return galleryElement;
}
  
refs.galleryList.insertAdjacentHTML('beforeend', galleryItems);

//Реализация делегирования на галерее ul.js-gallery и получение url большого изображения

refs.galleryList.addEventListener('click', onGalleryClick);
  function onGalleryClick(event) {
    event.preventDefault();
  
   const imgRef = event.target;
   const bigImgRef = imgRef.dataset.source;

    if (event.target.nodeName !== 'IMG') {
      return;
    }
   
    openModal();
    changeModalImgSrc(bigImgRef);
}

// Открытие модального окна по клику на элементе галереи.

// refs.modal.addEventListener('click', openModal);
function openModal() {
  refs.modal.classList.add('is-open');
}

// Подмена значения атрибута src элемента img.lightbox__image.

function changeModalImgSrc(bigImgRef) {
  refs.modalImg.src = bigImgRef;
}

// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].

refs.btnCloseModal.addEventListener('click', closeModal);
function closeModal() {
refs.modal.classList.remove('is-open');

// Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, 
// чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.
refs.modalImg.src = '';
}

