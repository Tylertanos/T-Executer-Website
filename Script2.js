// script2.js — handles the "Image Example" button popup
document.addEventListener("DOMContentLoaded", () => {
  const showImageExample = document.getElementById("showImageExample");
  const imagePopup = document.getElementById("imagePopup");
  const closeBtns = document.querySelectorAll(".close-btn");
  
  showImageExample.addEventListener("click", () => {
    imagePopup.classList.remove("hidden");
  });
  
  closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      imagePopup.classList.add("hidden");
    });
  });
});