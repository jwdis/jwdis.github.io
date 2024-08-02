document.addEventListener('DOMContentLoaded', function(){
    const elSpringSlider = document.querySelector(".spring-slider");
const swiperVariable = springSlider(elSpringSlider, {
    // modules: [Navigation, Pagination],
    loop:true, 
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
    },
    pagination: {
        el: ".swiper-pagination"
    },
    breakpoints: {
        640: {
            slidesPerView: 2
        },
        800: {
            slidesPerView: 3
        },
        1100: {
            slidesPerView: 4
        }
    }
});

});