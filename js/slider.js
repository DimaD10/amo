
const screenSwiper = new Swiper('.screen-slider', {
    direction: 'vertical',
    simulateTouch: false,
    speed: 500,
    touchRatio: 0.8,
    keyboard: {
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 0.2,
        thresholdDelta: 100,
    },
});