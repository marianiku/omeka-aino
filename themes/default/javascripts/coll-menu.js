$(document).ready(function() {

   $('#collbtn').click(function() {

     if ($('#collections-list').is(':hidden')) {
       $('#collections-list').slideDown('fast', function() {});
     } else {
       $('#collections-list').slideUp('fast', function() {});
     }
   });

});
