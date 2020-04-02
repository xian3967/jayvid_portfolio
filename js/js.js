(function($) {
  /*
  $(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    $('.fixed_content_wrapper').fadeIn(1000);
    setTimeout(function() {
      $('.fixed_content').addClass('fixed_content_none');
    }, 3000);
  }
});
*/

/*
$("html,body").animate({scrollTop:1,speed:0});
$(window).scroll(function (){
    $('.fade_slide').each(function(){
        var POS = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > POS - windowHeight){
            $(this).css({
                    'opacity':'1',
                    'transform':'translateY(0)',
                    '-webkit-transform':'translateY(0)',
                    '-moz-transform':'translateY(0)',
                    '-ms-transform':'translateY(0)'
            });
        }
    });
});
*/
$('l-header__main__contents').addClass('display-intro');
$(window).load(function(){
  $('l-header__main__contents').addClass('display-loaded');
  setTimeout(function() {
    $('l-header__main__contents').addClass('display-block');
  }, 400);
  setTimeout(function() {
    $('l-header__main__contents').removeClass('display-intro display-loaded');
  }, 800);
  setTimeout(function() {
    $('l-header__main__contents').removeClass('display-block');
  }, 2400);
});
})(jQuery);
