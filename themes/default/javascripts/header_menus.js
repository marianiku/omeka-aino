$(document).ready(function() {

   $('#searchbtn').click(function() {

     if ($('#ext-search').is(':hidden')) {
       $('#ext-search').slideDown('fast', function() {});
     } else {
       $('#ext-search').slideUp('fast', function() {});
     }
   });

   $('#infobtn').click(function() {

     if ($('#instructions').is(':hidden')) {
       $('#instructions').slideDown('fast', function() {});
     } else {
       $('#instructions').slideUp('fast', function() {});
     }
   });

   /*$('#submit_search_advanced').click(function() {
     if (!$('select[title = "Hakukenttä"]').is(':selected') ||
        !$('select[title = "Hakutyyppi"]').is(':selected')) {
       alert('Valitse hakukenttä ja hakurajoite!');
       return false;
     } else {
       return true;
     }
   });*/

   $('#query').attr('placeholder', 'Hae kirjeitä');

});
