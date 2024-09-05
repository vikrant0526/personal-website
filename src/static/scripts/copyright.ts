export function updateCopyRightDate() {
  const copyRightDate = document.getElementById("copyright-date");

  if (!copyRightDate) return;

  const currentYear = new Date().getFullYear();
  copyRightDate.innerText = currentYear.toString();
}
