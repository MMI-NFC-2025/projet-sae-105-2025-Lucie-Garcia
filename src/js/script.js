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

const backBtn = document.querySelector('.back-btn');
if (backBtn) {
    backBtn.addEventListener('click', () => {
        window.history.back();
    });
}

// Carousel avec item central agrandi
const carousel = document.querySelector('.article-films__carousel');
if (carousel) {
    const items = carousel.querySelectorAll('.article-film__item');
    const prevBtn = document.querySelector('.carousel-btn--prev');
    const nextBtn = document.querySelector('.carousel-btn--next');
    let currentIndex = 0;

    function updateActiveItem() {
        const carouselRect = carousel.getBoundingClientRect();
        const carouselCenter = carouselRect.left + carouselRect.width / 2;

        let closestItem = null;
        let closestDistance = Infinity;
        let closestIndex = 0;

        items.forEach((item, index) => {
            const itemRect = item.getBoundingClientRect();
            const itemCenter = itemRect.left + itemRect.width / 2;
            const distance = Math.abs(carouselCenter - itemCenter);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestItem = item;
                closestIndex = index;
            }

            item.classList.remove('active');
        });

        if (closestItem) {
            closestItem.classList.add('active');
            currentIndex = closestIndex;
        }
    }

    function scrollToItem(index) {
        if (index >= 0 && index < items.length) {
            const item = items[index];
            const carouselRect = carousel.getBoundingClientRect();
            const itemRect = item.getBoundingClientRect();
            const scrollLeft = carousel.scrollLeft + itemRect.left - carouselRect.left - (carouselRect.width / 2) + (itemRect.width / 2);
            
            carousel.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
        }
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            scrollToItem(currentIndex - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            scrollToItem(currentIndex + 1);
        });
    }

    carousel.addEventListener('scroll', updateActiveItem);
    window.addEventListener('resize', updateActiveItem);

    // Attendre que les images soient chargées avant d'activer le premier item
    setTimeout(() => {
        updateActiveItem();
    }, 100);
}