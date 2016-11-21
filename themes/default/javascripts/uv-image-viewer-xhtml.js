// painiketoimintoja XML-transkriptiossa

// popup-kommentit; sivutus (edellinen- ja seuraava-painikkeet)
$(document).ready(function() {

   // hakee comments.js-listan avaimet tekstistä ja luo niille linkin ja tooltipin

      $.each(comments, function(key, value) {
         var first = $('#exhibit3b').text().indexOf(key);
         if (first >= 0) {
            var last = first + key.length;
            var ext = $('#exhibit3b').text().indexOf(' ', last);
            var ending = $('#exhibit3b').text().substring(last, ext);

            if (ending.indexOf(",") >= 0) {
              ending = ending.substring(0, ending.indexOf(","));
            } else if (ending.indexOf(".") >= 0) {
              ending = ending.substring(0, ending.indexOf("."));
            } else if (ending.indexOf(";") >= 0) {
              ending = ending.substring(0, ending.indexOf(";"));
            } else if (ending.indexOf(":") >= 0) {
              ending = ending.substring(0, ending.indexOf(":"));
            }

            var str = key + ending;

            $('#exhibit3b')
            .html($('#exhibit3b')
            .html()
            .replace(str, '<a class="comm tooltip bt" href="#">' + str + '<span>' + value + '</span></a>'));
         }
     });

   var i = 0;

   // takaisin-painike: näyttää edellisen, piilottaa muut; laukaisee UV:n takaisin-painikkeen
   $('#btPrevXML').click(function() {
        if (i == 0) {
           return false;
        }

      	var current = $('#exhibit3b').find('.page:eq(' + i + ')');
        var prev = current.prev();

        current.hide();
        if (prev) {
          prev.show().prevAll().hide();
        }

        var bt = $("div.uv.omeka-test-letters:eq(0) iframe").contents().find("div.paging.btn.prev");
        var prevClass = prev.find('.pb').attr('class');
        var currentClass = current.find('.pb').attr('class');
        if (prevClass.slice(0, -1) != currentClass.slice(0, -1)) {
          bt.trigger("click");
        }
        i--;
    });

   // seuraava-painike, skrollaa seuraavan sivun kohtaan ja laukaisee kuvakehyksen seuraava-painikkeen
   $('#btNextXML').click(function() {

       if (i == $('#exhibit3b').find('.pb').length-1) {
          return false;
       }

      	var current = $('#exhibit3b').find('.page:eq(' + i + ')');
        var next = current.next();

        var nextBt = $("div.uv.omeka-test-letters:eq(0) iframe").contents().find("div.paging.btn.next");
        var prevBt = $("div.uv.omeka-test-letters:eq(0) iframe").contents().find("div.paging.btn.prev");

        current.hide();
        if (next) {
           next.show().siblings('.page').hide();
        }

        var nextClass = next.find('.pb').attr('class');
        var currentClass = current.find('.pb').attr('class');
        if (typeof next != undefined && nextClass.slice(0, -1) != currentClass.slice(0, -1)) {
          nextBt.trigger('click');
        } else if (typeof next == undefined) {
          return false;
        }
        i++;
     });

});
