/**
 * WEBSITE: https://jwdis.com
 * FACEBOOK: https://www.facebook.com/jwdis
 * GITHUB: https://github.com/jwdis/
 */

document.addEventListener('DOMContentLoaded', function () {
    const swiperObj = new Swiper(".swiper", {
        modules: [materialEffect],
        effect: "material",
        materialEffect: {
            slideSplitRatio: .65
        },
        centeredSlides: true,
        grabCursor: true,
        slidesPerView: 4,
        spaceBetween: 16,
        speed: 600,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            200: {
                slidesPerView: 1
            },
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
    })

});