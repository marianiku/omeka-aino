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

   $('#kaukonen-menu-btn').click(function() {

     if ($('#kaukonen-menu').is(':hidden')) {
       $('#kaukonen-menu').slideDown('fast', function() {});
     } else {
       $('#kaukonen-menu').slideUp('fast', function() {});
     }
   });

   $('#sanat-menu-btn').click(function() {

     if ($('#sanat-menu').is(':hidden')) {
       $('#sanat-menu').slideDown('fast', function() {});
     } else {
       $('#sanat-menu').slideUp('fast', function() {});
     }
   });

   $('#kerrostumat-menu-btn').click(function() {

     if ($('#kerrostumat-menu').is(':hidden')) {
       $('#kerrostumat-menu').slideDown('fast', function() {});
     } else {
       $('#kerrostumat-menu').slideUp('fast', function() {});
     }
   });

   $('#linkit-menu-btn').click(function() {

     if ($('#linkit-menu').is(':hidden')) {
       $('#linkit-menu').slideDown('fast', function() {});
     } else {
       $('#linkit-menu').slideUp('fast', function() {});
     }
   });

   $('#tiedot-menu-btn').click(function() {

     if ($('#tiedot-menu').is(':hidden')) {
       $('#tiedot-menu').slideDown('fast', function() {});
     } else {
       $('#tiedot-menu').slideUp('fast', function() {});
     }
   });
});
