
    let hero = document.querySelector(".hero");
    let box1 = document.querySelector(".box1");
    let box2 = document.querySelector(".box2");
    let box3 = document.querySelector(".box3");
    let box4 = document.querySelector(".box4");

    window.addEventListener("scroll", checkScroll);
    checkScroll();

    function checkScroll() {
        const triggerBottom = window.innerHeight / 5 * 4;
        checkVisibility(hero, triggerBottom);
        checkVisibility(box1, triggerBottom);
        checkVisibility(box2, triggerBottom);
        checkVisibility(box3, triggerBottom);
        checkVisibility(box4, triggerBottom);
    }

    function checkVisibility(element, triggerBottom) {
        if (!element) return; 
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < triggerBottom) {
            element.classList.add("show");
        } else {
            element.classList.remove("show");
        }
    }