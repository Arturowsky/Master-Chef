window.addEventListener('DOMContentLoaded', (event) => {
    const input = document.querySelector(".form-control");
    input.addEventListener("click", subscribe);
    function subscribe() {
        input.setAttribute("placeholder", "");
    }
    input.addEventListener("mouseleave", subscribeSetBack);
    function subscribeSetBack() {
        input.setAttribute("placeholder", "Subscribe to Our newsletter and stay notfied...");
    }
});