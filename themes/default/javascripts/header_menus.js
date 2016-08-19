$(document).ready(function() {

   $('#collbtn').click(function() {

     if ($('#collections-list').is(':hidden')) {
       $('#collections-list').slideDown('fast', function() {});
     } else {
       $('#collections-list').slideUp('fast', function() {});
     }
   });

   $('#searchbtn').click(function() {

     if ($('#ext-search').is(':hidden')) {
       $('#ext-search').slideDown('fast', function() {});
     } else {
       $('#ext-search').slideUp('fast', function() {});
     }
   });

});
