$(document).ready(function(){
  /* Slick slider */ 

  $('.first-slider').slick({
    arrows: false,
    dots: true,
		            /* Адаптивность */
    responsive: [
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
    ]
  });

  $('.gallery-slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
		            /* Адаптивность */
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
          breakpoint: 1024,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false
          }    
        },
        {
          breakpoint: 576,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
          }    
        }

    ]
  });

  new WOW().init();
  
  /* Arctick Modal */

  $('.popup__btn').click(function(e) {
      e.preventDefault();
      $('#popup').arcticmodal();
  });

    /* Burger menu */
  $('.menu__burger').click(function(){
    $('.menu').toggleClass('active');
    $('.lang').toggleClass('active');
    $('.menu__burger--close').fadeToggle();
    $('.menu__burger--img').fadeToggle();
    $(this).toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.menu__item').click(function() {
    $('.menu__burger,.menu,.lang').removeClass('active');
    $('.menu__burger--close').fadeToggle();
    $('.menu__burger--img').fadeToggle();
    $('body').removeClass('lock');
  });

    /* Parallax */  
    $(window).bind('scroll',function(e){
        parallaxScroll();
  });
  function parallaxScroll(){
      var scrolled = $(window).scrollTop() - 400;
      $('.parallax').css({
        "transform" : "translate(0, "+ (scrolled*0.15) + "px"
      });
  }
  
});