/**
 * Created by Tina on 2016/11/23.
 */
window.onload=function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: true,
        centeredSlides:true,
        effect : 'fade'
    })
    
};