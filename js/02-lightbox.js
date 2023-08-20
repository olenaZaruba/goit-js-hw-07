import { galleryItems } from "./gallery-items.js";
// Change code below this line

const cardsContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryMarkup(galleryItems);

cardsContainer.insertAdjacentHTML("beforeend", cardsMarkup);

function createGalleryMarkup(cards) {
  return cards
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
     
    />
  </a>
</li>`;
    })
    .join("");
}

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
