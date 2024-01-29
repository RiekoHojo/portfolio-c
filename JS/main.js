console.log("test")

/*ハンバーガー　メニュー表示*/
$(".top-hamburger-icon").on('click', function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $('.top-nav-sp').removeClass('open');
    $('.top-language-sp').removeClass('open'); // top-language-spの表示切り替え
    $('body').removeClass('no-scroll'); 
  } else {
    $(this).addClass('active');
    $('.top-nav-sp').addClass('open');
    $('.top-language-sp').addClass('open'); // top-language-spの表示切り替え
    $('body').addClass('no-scroll');
  }
});

/*トップへ戻るボタン*/  
$(function() {
  var $btn = $('.box-container');
  var $trigger = $('.main-contents-img');
  var scrollTimer;

  $btn.hide();

  function checkIfInView() {
      var windowHeight = $(window).height();
      var scrollPos = $(window).scrollTop();
      var triggerPos = $trigger.offset().top;

      if (scrollPos + windowHeight > triggerPos) {
      $btn.fadeIn(200);
      }

      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(function() {
      $btn.fadeOut(200);
      }, 2000);
  }
  
  $(window).on('scroll resize', checkIfInView);

  $btn.click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });
});

/*slick slide*/
$('.slider').not('.slick-initialized').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  speed:1000,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
});

$('.slider').not('.slick-initialized').slick({
dots: true,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
});

/*言語プルダウン*/
$(document).ready(function() {
  $('.top-language').click(function(e) {
    $('.top-language-box').toggle();
    e.stopPropagation();
  });

  $('.top-language-box-item').click(function() {
    $('.top-language-box-item').removeClass('highlight');
    $('.selected-language').removeClass('highlight');

    var selectedLanguage = $(this).text();
    $('.selected-language').text(selectedLanguage);

    $('.selected-language').addClass('highlight');

    $('.top-language-box').hide();
  });

  $(document).click(function() {
    $('.top-language-box').hide();
    $('.top-language-box-item').removeClass('highlight');
    $('.selected-language').removeClass('highlight');
  });
});


