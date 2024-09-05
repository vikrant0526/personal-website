export function emailCopyToClipboard() {
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
