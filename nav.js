const menuBar = document.querySelector(".mobile-menuBar");
const menuBtn = document.querySelector(".menuBtn");
menuBtn.addEventListener("click", () => {
  menuBar.classList.add("show-menu");
});
