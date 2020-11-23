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
          breakpoint: 1025,
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

  /* overview slider */

  $('.overview-slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: false,
		            /* Адаптивность */
    responsive: [
        {
            breakpoint: 1630,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            }
        },
        {
          breakpoint: 1480,
          settings: {
              slidesToShow: 4,
              slidesToScroll: 1
          }    
        },
        {
          breakpoint: 1160,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1
          }    
        },
        {
          breakpoint: 1050,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows: false
          }    
        },
        {
          breakpoint: 860,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false
          }    
        },
        {
          breakpoint: 600,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
          }    
        }

    ]
  });

  $('.gallery-slider, .overview-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.slick-dots li').removeClass('color');
    $('.slick-active').prevAll().addClass('color');
  });

  $('.gallery-slider').slick('setPosition');

  
  
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

    /***************** Parallax **************/  
    
    $(window).bind('scroll',function(e){
        parallaxScroll();
  });
  function parallaxScroll(){
      var about = $(window).scrollTop() - 400;
      $('.parallax').css({
        "transform" : "translate(0, "+ (about*0.15) + "px"
      });

      let overview = $(window).scrollTop() - 6600;
      $('#o-1').css({"transform" : "translate("+ overview*0.6 + "px , "+ 0 + "px"});
      $('#o-2').css({"transform" : "translate("+  -overview*0.6 + "px , "+ 0 + "px"});
      //console.log($(window).scrollTop());

      var services1 = $(this).scrollTop() - 2700;
      var services2 = $(this).scrollTop() - 3500;
      var services3 = $(this).scrollTop() - 4200;
      var services4 = $(this).scrollTop() - 4800;
      $('#f-1').css({"top" : + services2 *0.05 + "px"});
      $('#f-2').css({"top" : + services2 *0.05 + "px"});
      $('#f-3').css({"top" : + services2 *0.05 + "px"});
      $('#f-4').css({"top" : + services2 *0.05 + "px"});
      $('#t-1').css({"transform" : "translate(0, "+ services1 *0.20 + "px"});
      $('#t-2').css({"transform" : "translate(0, "+ services2 *0.20 + "px"});
      $('#t-3').css({"transform" : "translate(0, "+ services3 *0.20 + "px"});
      $('#t-4').css({"transform" : "translate(0, "+ services4 *0.10 + "px"});
      $('#h-1').css({"transform" : "translate(0, "+ services1 *0.15 + "px"});
      $('#h-2').css({"transform" : "translate(0, "+ services2 *0.15 + "px"});
      $('#h-3').css({"transform" : "translate(0, "+ services3 *0.15 + "px"});
      $('#h-4').css({"transform" : "translate(0, "+ services4 *0.10 + "px"});
    }

   /***********************************************************/ 

  $('body').on('click', '.tab-nav a', function(){
		$('.tab-nav a').removeClass('active');
		$(this).addClass('active');
		var href = $(this).attr('href');
		$('.pane').removeClass('active').removeClass('in');
		$(href).addClass('active');
		setTimeout(function(){
			$(href).addClass('in');
		}, 200);
		return false;
  });

  $('body').on('click', '.tab__btn a', function(){
    var href = $(this).attr('href');
    console.log(href);
    $('.pane').removeClass('active').removeClass('in');
    $('.tab__item a').removeClass('active');
    $('.tab__item a[href="' + href + '"]').addClass('active');
		$(href).addClass('active');
		setTimeout(function(){
			$(href).addClass('in');
		}, 200);
		return false;
  });


  
  if (window.matchMedia("(max-width: 768px)").matches) {
      $('.tab__item a').removeClass('active');
      $('.tab__item a').click(function(){
        $('.tab-nav').hide(200);
        $('.tabs__body').show();
        $('.tabs__body').css('visibility', 'visible');
      });
      $('.tab__close').click(function(){
        $('.tabs__body').hide(200);
        $('.tab-nav').show();
      });

      $('.tabs__body').removeClass('slideInRight');

      
  } else {
    
  }
  
});
