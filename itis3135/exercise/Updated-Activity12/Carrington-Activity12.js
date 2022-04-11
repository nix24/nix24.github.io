$(document).ready(function () {
    $("#slider").bxSlider({
        randomStart: true,
        auto: true,
        speed: 3000,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        slideWidth: 500,
        slideMargin: 20,
        captions: true,        
        pager: true,
        pagerSelector: '#id_pager',
        pagerType: 'short',
        pagerShortSeparator: '/',
    }); 
});