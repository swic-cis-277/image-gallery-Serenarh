/**
 * TODO: Whenever we click on an image, take the src and alt and replace the 'main display' with the src alt
 *  */

// JS Object
const currentImageAttrs = {};

// Use dot notation to access properties and functions/methods
const displayImage = document.querySelector("#display img");
const fsImages = document.querySelectorAll("#film-strip img");

fsImages.forEach(function (fsImage) {
  fsImage.addEventListener("click", function (event) {
    displayImage.src = event.target.src;
    displayImage.alt = event.target.alt;
  });
});

fsImages.forEach.button(function (copy) {
  copy.addEventListener("click", function (event) {});
});
