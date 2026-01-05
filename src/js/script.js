const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const page = document.body;

if (toggle && nav) {
    toggle.addEventListener("click", () => {
        const isOpen = toggle.ariaExpanded === "true";
        const isClosed = !isOpen;

        toggle.ariaExpanded = isClosed;
        nav.hidden = isOpen;
        page.classList.toggle("u-noscroll", isClosed);
    });
}


const btnsearch = document.querySelector(".search-btn");
const navsearch = document.querySelector(".search");

if (btnsearch && navsearch) {
    btnsearch.addEventListener("click", () => {
        const isOpen = btnsearch.ariaExpanded === "true";
        const isClosed = !isOpen;

        btnsearch.ariaExpanded = isClosed;
        navsearch.hidden = isOpen;
    });
}

const btnlanguage = document.querySelector(".language-btn");
const navlanguage = document.querySelector(".language");

if (btnlanguage && navlanguage) {
    btnlanguage.addEventListener("click", () => {
        const isOpen = btnlanguage.ariaExpanded === "true";
        const isClosed = !isOpen;

        btnlanguage.ariaExpanded = isClosed;
        navlanguage.hidden = isOpen;
    });
}