document.addEventListener('DOMContentLoaded', function(){
    const elFashionSlider = document.querySelector(".fashion-slider");
    var swiperVariable = fashionSlider(elFashionSlider, {
        loop:true, 
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        }
    });
});