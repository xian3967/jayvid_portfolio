(function($) {
  $("html,body").animate({
    scrollTop: 1,
    speed: 0
  });
$('.introJs').addClass('display-intro');
$(window).load(function(){
  setTimeout(function() {
    $('.introJs').addClass('display-loaded');
  }, 400);
  setTimeout(function() {
    $('.introJs').addClass('display-block');
  }, 800);
  setTimeout(function() {
    $('.introJs').removeClass('display-intro display-loaded');
  }, 1200);
  setTimeout(function() {
    $('.introJs').removeClass('display-block');
    $('.l-header__main__side-menu').addClass('l-header__main__side-menu_open');
  }, 1500);
  setTimeout(function() {
    $('.l-header__main__title').fadeIn();
  }, 2000);
  setTimeout(function() {
    $('.l-header__main__img').fadeIn();
  }, 2300);
  setTimeout(function() {
    $('.l-header__main__scroll__wrapper').fadeIn();
  }, 2800);
});
$(window).scroll(function() {
  $('.fade_slide').each(function() {
    var POS = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > POS - windowHeight + 200) {
      $(this).css({
        'opacity': '1',
        'transform': 'translateY(0)',
        '-webkit-transform': 'translateY(0)',
        '-moz-transform': 'translateY(0)',
        '-ms-transform': 'translateY(0)'
      });
    }
  });
});
$('.project_button_img_01').click(function() {
  $('.project_img').hide();
  $('.project_text').hide();
  $('.project_button').removeClass('button_checked');
  setTimeout(function() {
    $('.img_01').fadeIn();
    $('.text_01').fadeIn();
    $('.project_button_01').addClass('button_checked');
  }, 100);
});
$('.project_button_img_02').click(function() {
  $('.project_img').hide();
  $('.project_text').hide();
  $('.project_button').removeClass('button_checked');
  setTimeout(function() {
    $('.img_02').fadeIn();
    $('.text_02').fadeIn();
    $('.project_button_02').addClass('button_checked');
  }, 100);
});
$('.project_button_img_03').click(function() {
  $('.project_img').hide();
  $('.project_text').hide();
  $('.project_button').removeClass('button_checked');
  setTimeout(function() {
    $('.img_03').fadeIn();
    $('.text_03').fadeIn();
    $('.project_button_03').addClass('button_checked');
  }, 100);
});
$('.project_button_img_04').click(function() {
  $('.project_img').hide();
  $('.project_text').hide();
  $('.project_button').removeClass('button_checked');
  setTimeout(function() {
    $('.img_04').fadeIn();
    $('.text_04').fadeIn();
    $('.project_button_04').addClass('button_checked');
  }, 100);
});

})(jQuery);
