const burgerIcon = document.querySelector(".burger-icon");
const burgerBar = document.querySelectorAll(".bar");
const navLinksContainer = document.querySelector(".nav-links-container");

burgerIcon.addEventListener("click", checkBurger);

function checkBurger() {
  if (navLinksContainer.style.right == "0px") {
    navLinksContainer.style.right = "-100%";
    burgerBar.forEach((bar) => {
      bar.classList.remove("open");
    });
  } else {
    navLinksContainer.style.right = "0px";
    burgerBar.forEach((bar) => {
      bar.classList.add("open");
    });
  }
}
