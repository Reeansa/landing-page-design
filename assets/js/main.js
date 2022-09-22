const carousel = document.querySelector('[data-carousel]');
const items = carousel.querySelectorAll('[data-carousel-item]');
const indicators = carousel.querySelectorAll('[data-carousel-slide-to]');
const prev = carousel.querySelector('[data-carousel-prev]');
const next = carousel.querySelector('[data-carousel-next]');
let index = 0;

function update() {
    items.forEach((item, i) => {
        item.classList.remove('translate-x-0', 'opacity-100', 'z-20');
        item.classList.add('translate-x-full', 'opacity-0', 'z-10');
        indicators[i].classList.remove('bg-white', 'dark:bg-gray-800');
        indicators[i].classList.add('bg-white/50', 'dark:bg-gray-800/50');
    });
    items[index].classList.remove('translate-x-full', 'opacity-0', 'z-10');
    items[index].classList.add('translate-x-0', 'opacity-100', 'z-20');
    indicators[index].classList.remove('bg-white/50', 'dark:bg-gray-800/50');
    indicators[index].classList.add('bg-white', 'dark:bg-gray-800');
}

function prevSlide() {
    index--;
    if (index < 0) {
        index = items.length - 1;
    }
    update();
}

function nextSlide() {
    index++;
    if (index > items.length - 1) {
        index = 0;
    }
    update();
}

function goToSlide(i) {
    index = i;
    update();
}

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);
indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        goToSlide(i);
    });
});