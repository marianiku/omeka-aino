$(document).ready(function() {


      for (i = 0; i < $('.kaukonen-btn').length; i++) {
        $('.kaukonen-btn')[i].click(function() {
          if ($('.kaukonen-comm')[i].is(':hidden')) {
            $('.kaukonen-comm')[i].slideDown("fast", function() {
            });
          } else {
            $('.kaukonen-comm')[i].slideUp("fast", function() {
            });
          }
        });
      }

});
