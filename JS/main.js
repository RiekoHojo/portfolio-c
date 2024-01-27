console.log("test")

/*ハンバーガー　メニュー表示*/
$(".top-hamburger-icon").on('click', function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $('.top-nav-sp').removeClass('open');
    $('body').removeClass('no-scroll'); 
  } else {
    $(this).addClass('active');
    $('.top-nav-sp').addClass('open');
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
});