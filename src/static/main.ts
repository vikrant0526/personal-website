import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  // For cursor effect
  const cursor = document.getElementById("cursor");
  if (cursor) {
    const trackMouse = (e: MouseEvent) => {
      cursor.style.opacity = "1";
      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY + "px";
    };
    const removeCursor = () => {
      cursor.style.opacity = "0";
    };
    removeCursor();

    document.addEventListener("mousemove", trackMouse);
    document.addEventListener("mouseenter", trackMouse);

    document.addEventListener("mouseleave", removeCursor);
    document.addEventListener("scroll", removeCursor);
  }

  const nav = document.getElementById("nav");
  if (nav) {
    const navBackgroundToggle = () => {
      if (window.scrollY > 200) {
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

  // Update the year in the footer
  const copyRightDate = document.getElementById("copyright-date");

  if (copyRightDate) {
    const currentYear = new Date().getFullYear();
    copyRightDate.innerText = currentYear.toString();
  }
});
