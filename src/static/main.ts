import "./style.css";
import setupTestimonialsSlider from "./slider";

function main() {
  addCursorListner();
  addNavBackgroundListner();
  setupTestimonialsSlider();
  addScrollIndicatorListner();
  updateCopyRightDate();
}

// For cursor effect
function addCursorListner() {
  const cursor = document.getElementById("cursor");
  if (!cursor) return;
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

// For navigation background change on scroll
function addNavBackgroundListner() {
  const nav = document.getElementById("nav");
  if (!nav) return;
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

function addScrollIndicatorListner() {
  const scrollIndicator = document.getElementById("scroll-indicator");
  if (!scrollIndicator) return;
  const showScrollIndicator = () => {
    scrollIndicator.style.opacity = ((200 - window.scrollY) / 200).toString();
  };
  showScrollIndicator();
  document.addEventListener("scroll", showScrollIndicator);
}

// Update the year in the footer
function updateCopyRightDate() {
  const copyRightDate = document.getElementById("copyright-date");

  if (!copyRightDate) return;

  const currentYear = new Date().getFullYear();
  copyRightDate.innerText = currentYear.toString();
}

document.addEventListener("DOMContentLoaded", main);
