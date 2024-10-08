// swipper slider button next prev
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

document.querySelector('.fa-arrow-right').addEventListener('click', function () {
    document.querySelector('.view-more a').click();
});


// Slider Card

var swiper = new Swiper('.card-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: false,
    grabCursor: true,
    speed: 400,
    navigation: {
        nextEl: '.custom-swiper-next',
        prevEl: '.custom-swiper-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 8,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 8,
        },
        576: {
            slidesPerView: 2, // 576px ile 767px arasında 2 slide
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
    },
});










