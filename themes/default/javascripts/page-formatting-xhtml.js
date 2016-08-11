// PHP-käännetyn XML-transkription muotoilut

$(document).ready(function() {

   $('.textFrame p').each(function() {
 
        if ($(this).children('.pb') && $(this).children('.pb').length == 1) {
	   
	   var child = $(this).find('.pb');
           var content = $(this).html().split(child[0].outerHTML);
           $(this).replaceWith('<p xmlns="http://www.w3.org/1999/xhtml">' + 
           content[0] + '</p>' + child[0].outerHTML + '<p xmlns="http://www.w3.org/1999/xhtml">'
           + content[1] + '</p>');
        }

        if ($(this).children('.pb') && $(this).children('.pb').length > 1) {

	   var div = $('<div xmlns="http://www.w3.org/1999/xhtml"></div');

	   $(this).find('.pb').each(function() {	

	        var thisIndex = $(this).parent().html().indexOf($(this)[0].outerHTML) + $(this)[0].outerHTML.length;

		if ($(this).nextAll(".pb").length) {
                    var nextPb = $(this).nextAll('.pb').first();
		    var nextIndex = $(this).parent().html().indexOf(nextPb[0].outerHTML);
 		    var subst = $(this).parent().html().substring(thisIndex, nextIndex);
	            div.append($(this)[0].outerHTML);
		    div.append('<p xmlns="http://www.w3.org/1999/xhtml">' + subst + '</p>');
                } else {
		    var subst = $(this).parent().html().substring(thisIndex, $(this).parent().html().length);
 	            div.append($(this)[0].outerHTML);
		    div.append('<p xmlns="http://www.w3.org/1999/xhtml">' + subst + '</p>');
                }
           }); 

	   var content = $(this).html().split($(this).find('.pb:eq(0)')[0].outerHTML);
	   $(this).html(content[0]);
	   $(this).after(div.children());
        }

    });

    $('.textFrame .pb').each(function() {
       if ($(this).nextUntil('.pb')) {
           $(this).nextUntil('.pb').andSelf().wrapAll('<div xmlns="http://www.w3.org/1999/xhtml" class="page"></div>');
       } else {
           $(this).nextAll('p').andSelf().wrapAll('<div xmlns="http://www.w3.org/1999/xhtml" class="page"></div>');
       }
     });

    $('#exhibit2b').find('.page').not('.page:eq(0)').hide();
    $('#exhibit3b').find('.page').not('.page:eq(0)').hide();
    $('#exhibit2b').find('.pb').hide();
    $('#exhibit3b').find('.pb').hide();

});
