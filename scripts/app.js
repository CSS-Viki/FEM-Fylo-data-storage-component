const sliderEl = document.getElementById("slider");
const storageEl = document.querySelector(".storage");
let availableStorageEl = document.querySelector(".available-storage p span");

sliderEl.addEventListener("input", () => {
  storageEl.textContent = sliderEl.value + " GB";
  availableStorageEl.textContent = 1000 - sliderEl.value;
});

document.addEventListener("DOMContentLoaded", () => {
  const result = storageEl.textContent.replace("GB", "");
  sliderEl.value = +result;
});
