export function addCursorListner() {
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
