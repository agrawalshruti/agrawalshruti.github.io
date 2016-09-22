jQuery(document).ready(function($){
  $.get('/img/desk.svg', function(data) {
    $('#desk').replaceWith($(data).contents());
    $.get('/img/desk-light.svg', function(data) {
      $('#desk-light').replaceWith($(data).contents());
      document.getElementById("lamp-p2").addEventListener("mouseleave", function() {
        var desklightsvg = $('#desk-light-svg').detach();
        desksvg.appendTo("#desk-wrapper");
      });
      var desklightsvg = $('#desk-light-svg').detach();
      document.getElementById("lamp-path").addEventListener("mouseover", function() {
        desksvg = $('#desk-svg').detach();
        desklightsvg.appendTo('#desk-wrapper');
      });

    });


  });
});