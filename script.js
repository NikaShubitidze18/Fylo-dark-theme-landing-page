// Simple JS to control the mobile navigation toggle

document.addEventListener("DOMContentLoaded", () => {
    const menuToggleButton = document.querySelector(".navbar-toggler");
    const menu = document.querySelector("#navbarSupportedContent");

    menuToggleButton.addEventListener("click", () => {
        menu.classList.toggle("show");
    });
});
