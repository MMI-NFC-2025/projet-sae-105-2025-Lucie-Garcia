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
const langList = document.querySelector(".language__list");

if (btnlanguage && navlanguage) {
    btnlanguage.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = btnlanguage.ariaExpanded === "true";
        const isClosed = !isOpen;

        btnlanguage.ariaExpanded = isClosed;
        navlanguage.hidden = isOpen;
    });

    // Fermer le menu language quand on clique en dehors
    navlanguage.addEventListener("click", () => {
        btnlanguage.ariaExpanded = false;
        navlanguage.hidden = true;
    });

    // Empêcher la fermeture quand on clique sur la liste elle-même
    if (langList) {
        langList.addEventListener("click", (e) => {
            e.stopPropagation();
        });
    }
}

document.querySelector('.back-btn').addEventListener('click', () => {
    window.history.back();
});