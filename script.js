const menuEl = document.querySelector(".desktop-link");
const hamburgerButton = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");
const navListEl = document.querySelectorAll(".nav-list");

hamburgerButton.addEventListener("click", () => {
  menuEl.classList.toggle("active");
  hamburgerButton.classList.toggle("hide");
  closeIcon.classList.toggle("show");
});

closeIcon.addEventListener("click", () => {
  menuEl.classList.toggle("active");
  hamburgerButton.classList.toggle("hide");
  closeIcon.classList.toggle("show");
});

navListEl.forEach((element) => {
  element.addEventListener("click", () => {
    menuEl.classList.toggle("active");
    hamburgerButton.classList.toggle("hide");
    closeIcon.classList.toggle("show");
  });
});
