jQuery(document).ready(function($){
  if (window.matchMedia("(max-width: 768px)").matches) {
    $("#prahs-mobile-img-wrapper").html('<img src="/img/prahs-mobile-final.jpg" alt="" id="prahs-mobile-img">');
  } else {
    $("#prahs-mobile-img-wrapper").html('<iframe width="438" height="930" src="//invis.io/U99ESHNE5" frameborder="0" allowfullscreen class="prahs-image prahs-mobile" id="prahs-mobile-iframe"></iframe>');
  }
});
