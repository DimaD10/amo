
const screenSwiper = new Swiper('.screen-slider', {
    direction: 'vertical',
    //mousewheel: true,
    simulateTouch: false,
    speed: 500,
    touchRatio: 0.6,
    keyboard: {
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 0.2,
        thresholdDelta: 100,
    },
});