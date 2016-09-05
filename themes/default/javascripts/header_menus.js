$(document).ready(function() {

   $('#searchbtn').click(function() {

     if ($('#ext-search').is(':hidden')) {
       $('#ext-search').slideDown('fast', function() {});
       $('select[title = "Hakutyyppi"]')
       .find('option[value="contains"]')
       .attr('selected', true)
       /*$('select[title = "Hakutyyppi"]').hide();*/
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

   $('#query').attr('placeholder', 'Hae kirjeitä');

});
