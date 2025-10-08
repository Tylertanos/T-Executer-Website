// main.js — handles theme and popup logic
document.addEventListener("DOMContentLoaded", () => {
  const descBtn = document.getElementById("showDescription");
  const descPopup = document.getElementById("descriptionPopup");
  const scriptPopup = document.getElementById("scriptPopup");
  const closeBtns = document.querySelectorAll(".close-btn");

  descBtn.addEventListener("click", () => descPopup.classList.remove("hidden"));
  closeBtns.forEach(btn =>
    btn.addEventListener("click", () => {
      descPopup.classList.add("hidden");
      scriptPopup.classList.add("hidden");
    })
  );
});
