$(function() {
	/* top navigation */
	var header_nav = $('.header-nav');
	var nav_btn = $('.nav-btn');
	nav_btn.click(function() {
		header_nav.slideToggle(400);
	});
	$(window).resize(function() {
		if ($(window).width() >= 768) {
			header_nav.css({display: 'block'});
			nav_btn.css({display: 'none'});
		}
		else {
			header_nav.css({display: 'none'});
			nav_btn.css({display: 'block'});
		}
	});

	/* top slider */
	$('.top-slider .slick-wrap').slick({
		dots: true,
		appendDots: $('.top-slider-dots'),
		customPaging: function(slider, i) {
			return '<span class="slider-dots__item"></span>';
		},
		arrows: false
	});

	/* bottom slider */
	$('.bottom-slider .owl-wrap').owlCarousel({
	    center: true,
	    items: 3,
	    loop: true,
	    nav: true,
	    dotsContainer: $('.bottom-slider-dots'),
	    navContainer: $('.owl-nav'),
	    navText: ['<img src="img/bottom-arrow.png" alt="">', '<img src="img/bottom-arrow.png" alt="">'],
	    margin: 0,
	    centerMargin: 30,
	    autoWidth: true,
	});
});