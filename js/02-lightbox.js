import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");

const galleryArray = [];
for (let i = 0; i < galleryItems.length; i++) {
  const aLink = document.createElement("li");
  aLink.innerHTML = `
  <a class="gallery__item" href=${galleryItems[i].original}>
    <img
      class="gallery__image"
      src="${galleryItems[i].preview}"
      data-source="${galleryItems[i].original}"
      alt="${galleryItems[i].description}"
    />
  </a>
  `;
  galleryArray.push(aLink);
}
list.append(...galleryArray);
var instance = new SimpleLightbox(`.gallery a`, {
  captionPosition: "outside",
  captionsData: "alt",
  captionDelay: 250,
});
