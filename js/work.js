$(document).ready(function() {

  function updateWorkNavigation() {
     workSections.each(function(){
      $this = $(this);
      var activeWorkNavTitle = $('.work-nav-title[data-number="'+$this.attr('id').slice(-1) +'"]');
      var activeWorkNavIndex = $('.work-nav-index[data-number="'+$this.attr('id').slice(-1) +'"]');
      if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
        activeWorkNavTitle.removeClass('hidden');
        activeWorkNavIndex.addClass('work-nav-index-active');
      }else {
        activeWorkNavTitle.addClass('hidden');
        activeWorkNavIndex.removeClass('work-nav-index-active');
      }
    });
  }
  var workSections = $('.work-section');
  var workNavSections = $('#work-nav');
  var workNavTitles = $('.work-nav-title');
  $(window).on('scroll', function() {
    updateWorkNavigation();
  })
  updateWorkNavigation();
})
