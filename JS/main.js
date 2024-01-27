console.log("test")

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
  

