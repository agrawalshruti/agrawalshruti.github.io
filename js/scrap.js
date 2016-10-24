      <script>
  $body = $("body");
  console.log('test');
$(document).on({
    ajaxStart: function() { $body.addClass("loading"); console.log("start")},
     ajaxStop: function() { $body.removeClass("loading"); console.log("loaded") }    
});
</script>