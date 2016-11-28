	function hover(elementName) {
		element = document.getElementById(elementName);
    element.setAttribute('src', '/img/' + element.getAttribute('id') + '-light.svg');
	}
	function unhover(elementName, name) {
		element = document.getElementById(elementName);
    element.setAttribute('src', '/img/' + element.getAttribute('id') + '.svg');
	}

jQuery(document).ready(function($){
	// hide intro text when scrolling
	var intro = $("#intro-text");
	intro.fadeIn(600);

	//headroom
	var bookmark = document.querySelector(".bookmark");
	var headroom = new Headroom(bookmark);
	headroom.init();

	//right-side nav
	var contentSections = $('.cd-section'),
	navigationItems = $('#cd-vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
		event.preventDefault();
		smoothScroll($(this.hash));
	});

		//open-close navigation on touch devices
		$('.touch .cd-nav-trigger').on('click', function(){
			$('.touch #cd-vertical-nav').toggleClass('open');

		});
		//close navigation on touch devices when selectin an elemnt from the list
		$('.touch #cd-vertical-nav a').on('click', function(){
			$('.touch #cd-vertical-nav').removeClass('open');
		});

		function updateNavigation() {
			contentSections.each(function(){
				$this = $(this);
				var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
				if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
					navigationItems.eq(activeSection).addClass('is-selected');
				}else {
					navigationItems.eq(activeSection).removeClass('is-selected');
				}
			});
		}

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