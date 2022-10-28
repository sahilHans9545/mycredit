const menuBar = document.querySelector(".mobile-menuBar");
const menuBtn = document.querySelector(".menuBtn");
const closeMenuBtn = document.querySelector(".close-menu");
menuBtn.addEventListener("click", () => {
  menuBar.classList.add("show-menu");
});

closeMenuBtn.addEventListener("click", () => {
  menuBar.classList.remove("show-menu");
});
