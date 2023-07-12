let marker = true;

document.querySelector('.screen__body').addEventListener('scroll', e => {
    marker = false
})

const screenSwiper = new Swiper('.screen-slider', {
    direction: 'vertical',
    mousewheel: marker,
    simulateTouch: false,
    speed: 500,
});