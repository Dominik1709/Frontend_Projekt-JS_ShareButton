document.addEventListener("DOMContentLoaded", () => {
  const author     = document.getElementById("author");
  const shareBtn   = document.getElementById("shareBtn");
  const shareClose = document.getElementById("closeShareBtn");
  const sharePopover = document.getElementById("sharePopover");
  const mq = window.matchMedia("(min-width: 800px)"); // desktop breakpoint iz CSS-a

  function openShare() {
    if (mq.matches) {
      // desktop: samo popover
      sharePopover.setAttribute("aria-hidden", "false");
      author.classList.add("author--share");
    } else {
      // mobile: cijela traka
      author.classList.add("author--share");
    }
    shareBtn.setAttribute("aria-pressed", "true");
  }

  function closeShare() {
    sharePopover.setAttribute("aria-hidden", "true");
    author.classList.remove("author--share");
    shareBtn.setAttribute("aria-pressed", "false");
  }

  shareBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = author.classList.contains("author--share");
    if (isOpen) closeShare();
    else openShare();
  });

  // zatvaranje mobilnog panela
  shareClose.addEventListener("click", closeShare);

  // kad promijeniš širinu (npr. resize prozora), resetiraj stanje
  mq.addEventListener("change", closeShare);

  // klik izvan popovera zatvara (desktop UX)
  document.addEventListener("click", (e) => {
    if (mq.matches && author.classList.contains("author--share")) {
      const clickedInside =
        author.contains(e.target) || shareBtn.contains(e.target);
      if (!clickedInside) closeShare();
    }
  });
});

