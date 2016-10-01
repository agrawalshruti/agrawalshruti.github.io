	function hover(element) {
    element.setAttribute('src', '/img/' + element.getAttribute('id') + '-light.svg');
	}
	function unhover(element, name) {
    element.setAttribute('src', '/img/' + element.getAttribute('id') + '.svg');
	}

jQuery(document).ready(function($){
	// hide intro text when scrolling
	var intro = $("#intro-text");
	var pos = intro.position();
	var prevWindowpos = 0;
	$(window).scroll(function () {
		var windowpos = $(window).scrollTop();
		if (windowpos >= pos.top - 400 && windowpos > prevWindowpos && intro.is(':visible')) {
			intro.fadeOut(500);
			prevWindowpos = windowpos;
			console.log('fading out');
			console.log(windowpos);
			console.log(pos.top);
		}

		else if (windowpos <= pos.top - 100 && windowpos < prevWindowpos && intro.is(':hidden')) {
			intro.fadeIn(700);
			console.log('fading in');
			console.log(windowpos);
			console.log(pos.top);
		}
		prevWindowpos = windowpos;

	});

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

		function smoothScroll(target) {
			$('body,html').animate(
				{'scrollTop':target.offset().top - 150},
				600
				);
		}
	});