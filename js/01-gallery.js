import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

function makeGalleryItemsMarkup(items) {
  return items
    .map(({ original, preview, description }) => {
      return `
		<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
    })
    .join('');
}

galleryEl.innerHTML = makeGalleryItemsMarkup(galleryItems);
galleryEl.addEventListener('click', onClickGalleryItem);

function onClickGalleryItem(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;

  const imgUrl = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${imgUrl}" width="800" height="600">`,
    {
      onShow: instance => {
        window.addEventListener('keydown', onEscape);
      },
      onClose: instans => {
        window.removeEventListener('keydown', onEscape);
      },
    }
  );
  instance.show();

  function onEscape(event) {
    if (event.code !== 'Escape') {
      return;
    }
    instance.close();
    console.log(event);
  }
}
