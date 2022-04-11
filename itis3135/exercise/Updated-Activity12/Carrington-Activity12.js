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

//What do the following options do?
$("#datepicker").datepicker({
    minDate: new Date(),
    maxDate: +45
});
//this code will set the minimum date to today and the maximum date to 45 days from today.