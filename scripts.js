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

const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
