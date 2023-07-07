import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

function makeGalleryItemsMarkup(items) {
  return items
    .map(
      item => `
		<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`
    )
    .join('');
}

galleryEl.innerHTML = makeGalleryItemsMarkup(galleryItems);

galleryEl.addEventListener('click', onClickGalleryItem);

function onClickGalleryItem(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="800" height="600">`
  );
  instance.show();

  galleryEl.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
    }
    instance.close();
  });
}
