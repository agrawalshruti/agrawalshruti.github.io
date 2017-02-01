jQuery(document).ready(function($){
	// hide intro text when scrolling
	var intro = $("#intro-text");
	intro.fadeIn(600);

		//set smoothscroll parameters
		var smoothscrolldiff = 150;
		if (window.matchMedia("(max-width: 768px)").matches) {
			smoothscrolldiff = 20;
		}
		function smoothScroll(target) {
			$('body,html').animate(
				{'scrollTop':target.offset().top - smoothscrolldiff},
				600
				);
		}
	});
