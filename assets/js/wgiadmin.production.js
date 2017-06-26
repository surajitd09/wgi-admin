(function($) {
  $(document).ready(function() {
    $(".dropdown-button").dropdown({
      belowOrigin: true
    });

    $(".button-collapse").sideNav();
    // Show sideNav
    // $('.button-collapse').sideNav('show');
  });
})(jQuery);