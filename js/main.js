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
  
  
});