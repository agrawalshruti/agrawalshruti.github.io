$(document).ready(function() {

  function updateWorkNavigation() {
     workSections.each(function(){
      $this = $(this);
      var dataNumber = $this.attr('id').slice(-1);
      var activeWorkNavTitle = $('.work-nav-title[data-number="'+ dataNumber +'"]');
      var activeWorkNavIndex = $('.work-nav-index[data-number="'+ dataNumber +'"]');
      if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
        activeWorkNavTitle.removeClass('hidden');
        activeWorkNavIndex.addClass('work-nav-index-active');
        $('.bookmark').removeClass('hidden');
      } else {
        activeWorkNavTitle.addClass('hidden');
        activeWorkNavIndex.removeClass('work-nav-index-active');
      }
    });
  }

  function hoverNavIndex(dataNumber) {
    workNavTitles.each(function(){
      $this = $(this);
      if ($this.data("number") === dataNumber) {
        $this.removeClass('hidden');

      }
      else {
        $this.addClass('hidden');
      }
    })

    workNavIndices.each(function() {
       $this = $(this);
      if ($this.data("number") === dataNumber) {
        $this.addClass('work-nav-index-active');

      }
      else {
        $this.removeClass('work-nav-index-active');
      }
    })
  }

  var workSections = $('.work-section');
  var workNavSections = $('#work-nav');
  var workNavTitles = $('.work-nav-title');
  var workNavIndices = $('.work-nav-index');

  $(window).on('scroll', function() {
     if($(window).scrollTop() + $(window).height() > $(document).height() - 150 ) {
     $('.bookmark').addClass('hidden');
    } else {
      $('.bookmark').removeClass('hidden');
      updateWorkNavigation();
    }
  });

  $(workNavIndices).hover(
    function() {
      hoverNavIndex($(this).data("number"))
      // console.log($(this).data("number"))
    },
    function() {
      updateWorkNavigation();
    });

  updateWorkNavigation();
})
