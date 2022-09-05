import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const imagesMarkUp = createItemsGallery(galleryItems);

gallery.insertAdjacentHTML('afterbegin', imagesMarkUp);

new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});

function createItemsGallery(images) {
  return images
    .map(
      image =>
        `
        <a class="gallery__item" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
      </a>
 `
    )
    .join('');
}
