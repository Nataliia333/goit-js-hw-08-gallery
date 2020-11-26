import gallery from "./gallery-items.js";

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








