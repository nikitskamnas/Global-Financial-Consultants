(function ($) {
    "use strict";
	
	var $window = $(window); 
	
	/* Preloader Effect */
	$window.load(function() {
	    $(".preloader").fadeOut(600);
    });
	
	/* Top Menu */
	$(document).on('click','#navigation ul li a, #responsive-menu ul li a',function(){
		var id = $(this).attr('href');
		var h = parseFloat($(id).offset().top);
		$('body,html').stop().animate({
			scrollTop: h - 70
		}, 800);
		$(".navbar-collapse").collapse("hide");

		return false;
	});
	
	/* Sticky header */
	$window.scroll(function(){
    	if ($window.scrollTop() > 200) {
			$('.navbar').addClass('sticky-header');
		} else {
			$('.navbar').removeClass('sticky-header');
		}
	});
	
	/* slick nav */
	$('#main-menu').slicknav({prependTo:'#responsive-menu', label:'', closeOnClick:true});
	
	/* Init Counter */
    $('.counter').counterUp({ delay: 4, time: 1000 });
	
	/*OwlCarousels Testimonial Start*/
	$('#testimonial-slider').owlCarousel({
		loop: true,
		items: 1,
		margin: 0,
		responsiveClass: true,
		nav: true,
		dots: false,
		autoplay: true,
		autoplaySpeed: 1000,
		navText: [ '<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
		responsive : {
			568 : {
				items: 2,
				margin: 30
			}
		}
	});
	
	/* Popup video */
	$('.popup-video').magnificPopup({
        type: 'iframe',
        preloader: true,
    });
	
})(jQuery);