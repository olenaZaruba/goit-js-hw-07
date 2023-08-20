import { galleryItems } from "./gallery-items.js";
// Change code below this line

const photo = document.querySelector(".gallery__image");
const cardsContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryMarkup(galleryItems);

cardsContainer.insertAdjacentHTML("beforeend", cardsMarkup);

cardsContainer.addEventListener("click", handlerClickOnCard);

function createGalleryMarkup(cards) {
  return cards
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
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
    .join("");
}

function handlerClickOnCard(evt) {
  if (evt.target === evt.currentTarget) {
    return;
  }
  evt.preventDefault();

  console.log(`target`, evt.target);
  console.log(`currenttarget`, evt.currentTarget);

  const { source } = evt.target.dataset;
  console.log(source);

  const instance = basicLightbox.create(`

        <div>
        <img src= "${source}" alt="dont know how to add description"</p>
        </div>

    `);

  instance.show();
}
