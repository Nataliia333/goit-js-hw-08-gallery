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

import gallery from "./gallery-items.js";
console.log(gallery);

// Создание и рендер разметки по массиву данных и предоставленному шаблону.

const refs = {
    galleryList: document.querySelector('js.gallery'),
    jsLightbox: document.querySelector('js.lightbox'),
    lightboxImage: document.querySelector('.lightbox__image'),
    lightboxBtn:  document.querySelector('button[data-action="close-lightbox"]'),
    lightboxOverlay: document.querySelector('.lightbox__overlay'),
};

const galleryItems = gallery
.map((item, index) => createGalleryItem(item, index))
.join('');
refs.galleryList.insertAdjacentHTML('beforeend', galleryItems);

function createGalleryItem({ preview, original, description }, index) {
  const galleryElement = `
   <li class="gallery__item">
     <a
       class="gallery__link"
        href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            data-index="${index}"
            alt="${description}"/>
      </a>
    </li>`;
  return galleryElement;
}

// -Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.

galleryList





