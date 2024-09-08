export function addMobileNavListner() {
  const menuButton = document.getElementById("mobile-nav-button");
  if (!menuButton) return;

  const menu = document.getElementById("mobile-nav");
  if (!menu) return;

  const closeButton = document.getElementById("mobile-nav-close");
  if (!closeButton) return;

  let isOpen = false;
  const toggle = () => {
    if (isOpen) {
      menu.classList.remove("hidden");
      menu.classList.remove("opacity-0");
    } else {
      menu.classList.add("hidden");
      menu.classList.add("opacity-0");
    }

    isOpen = !isOpen;
  };
  menuButton.addEventListener("click", toggle);
  closeButton.addEventListener("click", toggle);
}
