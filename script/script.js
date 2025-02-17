let visible = 0;
function mostrarMenu() {
  const menu = document.querySelector(".menu__hamburger");
  const open = document.querySelector(".open");
  const close = document.querySelector(".close");


  if (visible == 0) {
    menu.style.display = "block";
    close.style.display = "block";
    open.style.display = "none";
    visible = 1;
  } else {
    menu.style.display = "none";
    close.style.display = "none";
    open.style.display = "block";
    visible = 0;
  }
}
