document.addEventListener('DOMContentLoaded', function () {
    const swiperObj = new Swiper(".swiper", {
        modules: [materialEffect],
        effect: "material",
        materialEffect: {
            slideSplitRatio: .65
        },
        centeredSlides: true,
        grabCursor: !0,
        slidesPerView: 2,
        spaceBetween: 16,
        speed: 600,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
        , R = document.querySelector(".dropdown")
        , chkCenter = document.querySelector("input#centeredSlides")
        , chkAutoplay = document.querySelector("input#autoplay");
    R.parentElement.addEventListener("click", t => {
        R.contains(t.target) || R.classList.toggle("visible")
    });
    R.addEventListener("click", t => {
        const e = parseInt(t.target.getAttribute("data-value"), 10);
        swiperObj.params.slidesPerView = e,
            swiperObj.update(),
            R.classList.remove("visible"),
            document.querySelector(".spv").textContent = e
    });
    chkCenter.addEventListener("change", t => {
        const e = t.target.checked;
        swiperObj.params.centeredSlides = e,
            swiperObj.update()
    });
    chkAutoplay.addEventListener("change", t => {
        const e = t.target.checked;
        if(e==true){
            swiperObj.params.autoplay = {
                delay: 2000,
                disableOnInteraction: false,
            };
        }else{
            swiperObj.params.autoplay = false;
        }
        setTimeout(() => {
            swiperObj.update();
            swiperObj.slideNext();
        }, 500);
    });


});