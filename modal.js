////////////////////////////////////////////////////////////////////
// Project: Modal

////////////////////////////////////////////////////////////////////
// Variables
const modal = document.querySelector(".modal");
const btnRules = document.querySelector(".rules");
const blur = document.querySelector(".blur");
const btnClose = document.querySelector(".close");
////////////////////////////////////////////////////////////////////
// Listeners
btnRules.addEventListener("click", openModal);
btnClose.addEventListener("click", closeClicked);
blur.addEventListener("click", closeClicked);
document.addEventListener("keydown", keyClose);
////////////////////////////////////////////////////////////////////
// Functions
function openModal() {
  modal.classList.remove("hide");
  blur.classList.remove("hide");
}

function closeClicked() {
  modal.classList.add("hide");
  blur.classList.add("hide");
}

function keyClose(key) {
  if (key.key === "Escape" && !modal.classList.contains("hide")) {
    closeClicked();
  }
}
