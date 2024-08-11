import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
    // For cursor effect
    const cursor = document.getElementById("cursor");
    if (cursor) {
        document.addEventListener("mousemove", (e) => {
            cursor.style.left = e.pageX + "px";
            cursor.style.top = e.pageY + "px";
        });
    }

    // Update the year in the footer
    const copyRightDate = document.getElementById("copyright-date");

    if (copyRightDate) {
        const currentYear = new Date().getFullYear();
        copyRightDate.innerText = currentYear.toString();
    }
});
