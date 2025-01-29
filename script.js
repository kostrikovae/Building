const burgerButton = document.querySelector(".burger");
const navbarNav = document.querySelector(".navbar");

burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("actively");
  navbarNav.classList.toggle("active");
});

const requestBtn = document.querySelector(".request__btn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");

  requestBtn.addEventListener("click", () => {
    document.body.style.overflowY = "hidden"
    setTimeout(() => {
        modal.style.opacity = "1";
        modal.style.display = "flex";
        modal.style.flexDirection = "column";
    }, 500);
  });

closeBtn.addEventListener("click", () => {
    document.body.style.overflowY = "visible";
    setTimeout(() => {
        modal.style.opacity = "0";
        modal.style.display = "none"
    }, 500);
  });