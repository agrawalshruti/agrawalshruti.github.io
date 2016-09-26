jQuery(document).ready(function($){

	//Hovering over images to switch on light
	function light (name) {
		var lightOff = $('#' + name);
		var lightOn = '<object data="/img/' + name +'-light.svg" type="image/svg+xml" id="' + name + '-light"></object>';
		$('#' + name + '-wrapper').mouseenter(
			function() {
				// lightOff = $('#' + name).detach();
				$(this).empty();
				$(this).append(lightOn);
			});
			$('#' + name + '-wrapper').mouseleave(
			function() {
				$(this).empty();
				$(this).append(lightOff);
			}
			);


	}
	light('dm');

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