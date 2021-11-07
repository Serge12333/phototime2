let menu = document.getElementById("menu");
let btn = document.getElementById("menu-btn");
btn.addEventListener("click", toggleMenu);
function toggleMenu() {
  menu.classList.toggle("hide");
}
