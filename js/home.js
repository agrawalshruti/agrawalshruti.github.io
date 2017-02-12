  function hover(elementName) {
    element = document.getElementById(elementName);
    element.setAttribute('src', '/img/' + element.getAttribute('id') + '-light.svg');
  }
  function unhover(elementName, name) {
    element = document.getElementById(elementName);
    element.setAttribute('src', '/img/' + element.getAttribute('id') + '.svg');
  }

jQuery(document).ready(function($){

  //headroom
  var bookmark = document.querySelector(".bookmark-headroom");
  var headroom = new Headroom(bookmark);
  headroom.init();

  if (window.matchMedia("(max-width: 768px)").matches) {
      $('.img-wrapper:parent').each(function () {
    $(this).insertBefore($(this).prev('.text-wrapper'));
    // $('.cd-section').on('click', 'button', function () {
    //   var linkName = $(this).attr('id').slice(2);
    //   console.log(linkName);
    //   // window.location.href = "/work/" + linkName + ".html";
    // });
});
}

  var desksections = [
    ['desk-amma', 'section3', 400, "#f36094"],
    ['desk-is1','section5', 500, '#89B628'],
    ['desk-is2', 'section5', 500, '#89B628'],
    ['desk-prahs', 'section4', 600, '#5fa4c2'],
    ['desk-dm', 'section2', 200, "#BB2340"],
    ['desk-brand', 'section7', 800, '#F58727'],
    ['desk-about', 'url=/about.html', 0, '#7f7977']
  ];

  function desklight (name, onswitch, offswitch) {
    var desksvg;
    $.get('/img/' + name + '.svg', function(data) {
      $('#'+name).replaceWith($(data).contents());
      desksections.forEach( function(tuple) {
        deskLink(tuple[0],tuple[1], tuple[2], tuple[3]);
      });
      deskLink('desk-amma', 'section3');
      $.get('/img/' + name + '-light.svg', function(data) {
        $('#' + name +'-light').replaceWith($(data).contents());
        document.getElementById(offswitch).addEventListener("mouseleave", function() {
          var desklightsvg = $('#' + name + '-light-svg').detach();
          desksvg.appendTo("#" + name + "-wrapper");
        });
        var desklightsvg = $('#' + name + '-light-svg').detach();
        document.getElementById(onswitch).addEventListener("mouseover", function() {
          desksvg = $('#' + name + '-svg').detach();
          desklightsvg.appendTo('#' + name + '-wrapper');
        });
      });
    });
  }

  function smoothScroll(target, duration) {
    duration = typeof duration !== 'undefined' ? duration : 600;
    $('body,html').animate(
      {'scrollTop':target.offset().top - 150},
      duration
      );
  }

  function deskLink(logo, targetName, speed, color) {
    var logoOverlay = logo + "-overlay"
    var element = $('#' + logo);
    var overlay = $("#" + logoOverlay);
    $(overlay).hover(function () {
      $(element).css({fill: color, transition: "0.1s"});
      scaleElement(logo, 1.2);
      scaleInnerElements(logo, 1.2);
      scaleElement(logoOverlay, 1.2);
      if (logo === 'desk-prahs') {
        $('#desk-prahs-flash').css({fill: color, transition: "0.1s"});
      }
    }, function () {
      $(element).css({fill: "#c1ad73", transition: "0.1s"});
      scaleElement(logo, 1.0);
      scaleInnerElements(logo, 1.0);
      scaleElement(logoOverlay, 1.0);
      if (logo === 'desk-prahs') {
        $('#desk-prahs-flash').css({fill: "#c1ad73", transition: "0.1s"});
      }
    });
    $(overlay).click(function () {
      if (targetName.slice(0, 3) == "url") {
        var target_url = targetName.slice(4);
        window.location = target_url;
      }
      else {
        var target = $('#' + targetName);
        smoothScroll(target, speed);
      }

    });
  }

  function scaleElement(element, scale, idParam = true) {
    if (idParam) {
      var element = document.getElementById(element);
    }
    var bbox=element.getBBox();
    var cx=bbox.x+(bbox.width/2), cy=bbox.y+(bbox.height/2);   // finding center of element
    var scalex=scale, scaley=scale;    // your desired scale
    var saclestr=scalex+','+scaley;
    var tx=-cx*(scalex-1);
    var ty=-cy*(scaley-1);
    var translatestr=tx+','+ty;
    if (element.id === 'desk-is2-button' && scale !== 1.0) {
      ty = ty -2.2;
      translatestr=tx+','+ty;
      console.log(translatestr);
    }
    element.setAttribute('transform','translate('+translatestr+') scale('+saclestr+')');
  }

  function scaleInnerElements(elementID, scale) {
    var innerElements = document.getElementsByClassName(elementID + "-inner");
    for (var i = innerElements.length - 1; i >= 0; i--) {
      scaleElement(innerElements[i], scale, false);
    }
  }


  desklight('desk', 'lamp-path', 'lamp-p2');

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

});
