import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");

const galleryArray = [];
for (let i = 0; i < galleryItems.length; i++) {
  const divBox = document.createElement("li");
  divBox.innerHTML = `
  <div class="gallery__item">
  <a class="gallery__link" href=${galleryItems[i].original}>
    <img
      class="gallery__image"
      src="${galleryItems[i].preview}"
      data-source="${galleryItems[i].original}"
      alt="${galleryItems[i].description}"
    />
  </a>
  </div>`;
  galleryArray.push(divBox);
}
list.append(...galleryArray);

list.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const showImg = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src=${showImg}>
`);
  console.log(event.target.nodeName);
  instance.show();
});
