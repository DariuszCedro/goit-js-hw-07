import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");

const galleryArray = [];
for (let i = 0; i < galleryItems.length; i++) {
  const divBox = document.createElement("div");
  divBox.classList.add("gallery__item");
  divBox.innerHTML = `
  <a class="gallery__link" href=${galleryItems[i].original}>
    <img
      class="gallery__image"
      src="${galleryItems[i].preview}"
      data-source="${galleryItems[i].original}"
      alt="${galleryItems[i].description}"
    />
  </a>
  `;
  galleryArray.push(divBox);
}
list.append(...galleryArray);

list.addEventListener("click", (event) => {
  event.preventDefault();
  const showImg = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src=${showImg}>
`);

  instance.show();
});
