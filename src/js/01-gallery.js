import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({ preview, original, description }) => 
`<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`);

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup.join(''));

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
});