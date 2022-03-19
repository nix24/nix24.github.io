$(document).ready(function () {
  let prev = $("#prev");
  let next = $("#next");
  let index = 1;
  maxIndex = $(".slide").length;
  /* 1. Whenever the "next" button is clicked, a class is removed from the current slide, and added to the next slide.
     2. If the current slide is the last slide, the index is reset to 1.
 */
  next.click(function () {
    $('.slide:nth-child(' + index + ')').removeClass('slide-active');
    $('.slide:nth-child(' + index + ')').addClass('slide-hidden');
    index++;
    if (index > maxIndex) {
      index = 1;
    }
    $('.slide:nth-child(' + index + ')').removeClass('slide-hidden');
    $('.slide:nth-child(' + index + ')').addClass('slide-active');
  });

  //now for the previous button
  /* 1. Whenever the "previous" button is clicked, a class is removed from the current slide, and added to the previous slide.
     2. If the current slide is the first slide, the index is reset to the last slide.   
  */
  prev.click(function () {
    $('.slide:nth-child(' + index + ')').removeClass('slide-active');
    $('.slide:nth-child(' + index + ')').addClass('slide-hidden');
    index--;
    if (index < 1) {
      index = maxIndex;
    }
    $('.slide:nth-child(' + index + ')').removeClass('slide-hidden');
    $('.slide:nth-child(' + index + ')').addClass('slide-active');
  });

});