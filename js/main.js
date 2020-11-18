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
  
});