//initialize jquery
$(document).ready(function () {
  //when user scrolls, remove top: -100px from navbar
  $(window).scroll(function () {
    if ($(window).scrollTop() > 10) {
      $('.navbar').css('top', '0px');
    }
    else {
      $('.navbar').css('top', '-100px');
    }
  });

  //when user clicks jazz-button open tab to new page
  $('.jazz-button').click(function () {
    window.open('https://webpages.charlotte.edu/jcarrin4/itis3135/index.html');
  });

});
