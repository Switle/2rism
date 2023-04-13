function burger() {
    function toggleActiveClass(element) {
        element.classList.toggle('active');
    }

    const menu = document.querySelector('.menu');
    const burger = document.querySelector('.burger');

    function toggleActiveClassMenu() {
        toggleActiveClass(menu);
        toggleActiveClass(burger);
    }

    burger.addEventListener('click', toggleActiveClassMenu);
}

burger();