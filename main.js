// app.js
document.addEventListener("DOMContentLoaded", () => {
  const author      = document.getElementById("author");
  const shareBtn    = document.getElementById("shareBtn");
  const shareClose  = document.getElementById("closeShareBtn");

  function openShare() {
    author.classList.add("author--share");
    shareBtn.setAttribute("aria-pressed", "true");
  }

  function closeShare() {
    author.classList.remove("author--share");
    shareBtn.setAttribute("aria-pressed", "false");
  }

  // toggle na glavni share gumb
  shareBtn.addEventListener("click", () => {
    const isOpen = author.classList.contains("author--share");
    if (isOpen) {
      closeShare();
    } else {
      openShare();
    }
  });

  // i gumb unutar share trake za zatvaranje
  shareClose.addEventListener("click", closeShare);

});
