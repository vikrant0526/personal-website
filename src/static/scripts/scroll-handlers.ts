// For navigation background change on scroll
export function addNavBackgroundListner() {
  const nav = document.getElementById("nav");
  if (!nav) return;
  const navBackgroundToggle = () => {
    if (window.scrollY > 50) {
      nav.classList.remove("backdrop-opacity-0");
      nav.classList.add("bg-primary/50");
    } else {
      nav.classList.add("backdrop-opacity-0");
      nav.classList.remove("bg-primary/50");
    }
  };
  navBackgroundToggle();
  document.addEventListener("scroll", navBackgroundToggle);
}

export function addScrollIndicatorListner() {
  const scrollIndicator = document.getElementById("scroll-indicator");
  if (!scrollIndicator) return;
  const showScrollIndicator = () => {
    scrollIndicator.style.opacity = ((50 - window.scrollY) / 50).toString();
  };
  showScrollIndicator();
  document.addEventListener("scroll", showScrollIndicator);
}
