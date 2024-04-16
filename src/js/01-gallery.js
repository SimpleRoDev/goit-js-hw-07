import { galleryItems } from './gallery-items.js';
// Change code below this line

document.querySelectorAll('.gallery__link').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
  });
});
window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    basicLightbox.close();
  }
});

console.log(galleryItems);
