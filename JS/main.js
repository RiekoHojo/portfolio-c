/*ハンバーガー　メニュー表示*/
$(".top-hamburger-icon").on('click', function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $('.top-nav').removeClass('open');
    $('.top-language').removeClass('open');
    $('body').removeClass('no-scroll'); 
  } else {
    $(this).addClass('active');
    $('.top-nav').addClass('open');
    $('.top-language').addClass('open');
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
$(function() {
  var sliderOptions = {
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    dots: true, 
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false
  };

  $(window).on('resize', function() {
    if ($(window).width() <= 767) {
      sliderOptions.fade = false; // SPサイズフェードしない
    } else {
      sliderOptions.fade = true; // PCサイズフェード
    }
  }).resize(); 

  $('.slider').slick(sliderOptions);
});

/*言語プルダウン*/
/*$('.top-language').click(function(e) {
  console.log("クリック01");
    $('.top-language-box').toggle();
    e.stopPropagation();
});
  
$('.top-language-box-item').click(function(e) {
  e.stopPropagation();
  var language = $(this).text();
  $('.selected-language').text(language);
  $('.top-language-box').toggle();
});*/

/*ふわっと出現*/
/*window.addEventListener("load", function() {
const target = document.querySelectorAll('.scr-target')
const targetArray = Array.prototype.slice.call(target);
const options = {
    root: null,
    rootMargin: '0px 0px',
    threshold: 0.2
};

const observer = new IntersectionObserver(callback, options)
targetArray.forEach(function (tgt) {
  observer.observe(tgt)
});

function callback(entries) {
  entries.forEach(function(entry) {
    const target = entry.target;
    if (entry.isIntersecting && !target.classList.contains('is-active')) {
      target.classList.add('is-active');
    }
  });
};
});*/

$(window).on('scroll', function () {
  $('.inview').each(function() {
    var targetPosition = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > targetPosition - windowHeight) {
      $(this).addClass('show');
    }
  });
});

$(window).on('scroll', function () {
  $('.inview').each(function() {
    var targetPosition = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > targetPosition - windowHeight) {
      $(this).addClass('show');
    }
  });
});