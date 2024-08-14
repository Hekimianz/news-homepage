const mobileMenuOpenIcon = document.querySelector(".mobile__menu--open");
const mobileMenuCloseIcon = document.querySelector(".mobile__menu--close");
const mobileMenu = document.querySelector(".mobile__menu");
const blackOverlay = document.querySelector(".overlay");

mobileMenuOpenIcon.addEventListener("click", () => {
  blackOverlay.classList.remove("hidden");
  mobileMenu.classList.remove("hidden");
  mobileMenuOpenIcon.classList.add("hidden");
  document.body.style.overflow = "hidden";
});

mobileMenuCloseIcon.addEventListener("click", () => {
  blackOverlay.classList.add("hidden");
  mobileMenu.classList.add("hidden");
  mobileMenuOpenIcon.classList.remove("hidden");
  document.body.style.overflow = "auto";
});
