// swipper slider button next prev
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



document.querySelector('.fa-arrow-right').addEventListener('click', function() {
    document.querySelector('.view-more a').click();
});

