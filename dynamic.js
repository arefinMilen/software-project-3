const menuIcon = document.getElementById("responsiveMenuIcon");
const menu = document.getElementById("responsiveMenu");

menuIcon.addEventListener("click", () => {
  if (menu.className === "hidden") {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});