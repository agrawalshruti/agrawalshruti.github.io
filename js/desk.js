jQuery(document).ready(function($){
  function desklight (name, onswitch, offswitch) {
    var desksvg;
    $.get('/img/' + name + '.svg', function(data) {
      $('#'+name).replaceWith($(data).contents());
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

  function smoothScroll(target) {
    $('body,html').animate(
      {'scrollTop':target.offset().top - 150},
      600
      );
  }

  function deskLink(logo, targetName) {
    console.log(logo);
    console.log(document.getElementById('desk-amma'));
    $('#' + logo).hover(function () {
      $(this).addClass("selected");
    }, function () {
      $(this).removeClass("selected");
    });
    $('#' + logo).click(function () {
          console.log(logo);
    console.log(targetName);
      var target = $('#' + targetName);
      smoothScroll(target);
    });
  }

  desklight('desk', 'lamp-path', 'lamp-p2');

  deskLink('desk-amma', 'section3');

});