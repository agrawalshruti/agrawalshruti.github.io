jQuery(document).ready(function($){

  function desklight (name, onswitch, offswitch) {
    var desksections = [['desk-amma', 'section3', 400], ['desk-is1','section5', 500], ['desk-is2', 'section5', 500], ['desk-prahs', 'section4', 600], ['desk-dm', 'section2', 200], ['desk-brand', 'section7', 800], ['desk-about', 'url=/about.html']];
    var desksvg;
    $.get('/img/' + name + '.svg', function(data) {
      $('#'+name).replaceWith($(data).contents());
      desksections.forEach( function(tuple) {
        deskLink(tuple[0],tuple[1], tuple[2]);
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

  function deskLink(logo, targetName, speed) {
    var element = $('#' + logo);
    var overlay = $("#" + logo + "-overlay");
    $(overlay).hover(function () {
      $(element).css({fill: "#d8cbad", transition: "0.1s"});
      // $(overlay).css({opacity: 0.001, transition: "0.1s"});
    }, function () {
      $(element).css({fill: "#c1ad73", transition: "0.1s"});
      // $(overlay).css({opacity: 0, transition: "0.1s"});
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

  desklight('desk', 'lamp-path', 'lamp-p2');

});