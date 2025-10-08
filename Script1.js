// script1.js — handles script showcase
document.addEventListener("DOMContentLoaded", () => {
  const showScriptShowcase = document.getElementById("showScriptShowcase");
  const scriptPopup = document.getElementById("scriptPopup");
  
  showScriptShowcase.addEventListener("click", () => {
    scriptPopup.classList.remove("hidden");
  });
});