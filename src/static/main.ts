import "./style.css";
import setupTestimonialsSlider from "./slider";

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
    if (window.scrollY > 100) {
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
    scrollIndicator.style.opacity = ((100 - window.scrollY) / 100).toString();
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

function emailCopyToClipboard() {
  const email = document.querySelectorAll('[href="#email"]')[0] as HTMLElement;
  if (!email) return;
  email.addEventListener("click", (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email.innerText);
    const toast = document.getElementById("copied-toast");
    if (!toast) return;
    toast.style.opacity = "1";
    setTimeout(() => {
      toast.style.opacity = "0";
    }, 2000);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  addCursorListner();
  addNavBackgroundListner();
  setupTestimonialsSlider();
  addScrollIndicatorListner();
  updateCopyRightDate();
  emailCopyToClipboard();
});
