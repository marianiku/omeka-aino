  // Merkintöjen näyttäminen/piilottaminen PHP-käännetyssä XML-transkriptiossa (UV-plugin)

        
  function toggleMarkingsXML() {

     var doc = document.getElementById('exhibit3b');

     var elems = doc.getElementsByClassName('del');
     for (var i = 0; i < elems.length; i++) {
        if (elems[i].style.textDecoration == "none" || elems[i].style.color == "#292929") {
           elems[i].style.textDecoration = "line-through";
           elems[i].style.color = "#f22b0e"
        } else {
           elems[i].style.textDecoration = "none";
           elems[i].style.color = "#292929";
        }
     }

     var elems1 = doc.getElementsByClassName('sup');
     for (var i = 0; i < elems1.length; i++) {
        if (elems1[i].style.verticalAlign == "baseline" || elems1[i].style.color == "#292929") {
           elems1[i].style.verticalAlign = "super";
	   elems1[i].style.color = "#3361a1";
        } else {
           elems1[i].style.verticalAlign = "baseline";
           elems1[i].style.color = "#292929";
        }
     }

     var elems2 = doc.getElementsByClassName('underline');
     for (var i = 0; i < elems2.length; i++) {
        if (elems2[i].style.textDecoration == "none") {
           elems2[i].style.textDecoration = "underline";
        } else {
           elems2[i].style.textDecoration = "none";
        }
     }
  }

  function toggleCommentsXML() {
     
     $(document).ready(function() {
       
        function classExists() {
           if ($('#exhibit3b').find('.comm').hasClass('tooltip bt')) {
               return true;
           } else {
              return false;
           }
        }

        if (classExists()) {
           $('#exhibit3b').find('.comm')
           .removeClass('tooltip bt')
           .css({'color':'#444444', 'border-bottom':'none'})
           .hover(function() { $(this).css('text-decoration', 'none'); })
           .find('span').hide();
        } else {
           $('#exhibit3b').find('.comm')
           .addClass('tooltip bt')
           .css({'color':'','border-bottom':''})
           .hover(function() { $(this).css('text-decoration', ''); })
           .find('span')
           .css('display', '');
        }      
     });
  }

// Merkintöjen näyttäminen/piilottaminen PHP-käännetyssä XML-transkriptiossa (jquery-viewer)

  function toggleMarkingsHTML2() {

     var doc = document.getElementById('exhibit2b');

     var elems = doc.getElementsByClassName('del');
     for (var i = 0; i < elems.length; i++) {
        if (elems[i].style.textDecoration == "none" || elems[i].style.color == "#444444") {
           elems[i].style.textDecoration = "line-through";
           elems[i].style.color = "#f22b0e"
        } else {
           elems[i].style.textDecoration = "none";
           elems[i].style.color = "#444444";           
        }
     }

     var elems1 = doc.getElementsByClassName('sup');
     for (var i = 0; i < elems1.length; i++) {
        if (elems1[i].style.verticalAlign == "baseline" || elems1[i].style.color == "#444444") {
           elems1[i].style.verticalAlign = "super";
	   elems1[i].style.color = "#3361a1";
        } else {
           elems1[i].style.verticalAlign = "baseline";
           elems1[i].style.color = "#444444";
        }
     }

     var elems2 = doc.getElementsByClassName('underline');
     for (var i = 0; i < elems2.length; i++) {
        if (elems2[i].style.textDecoration == "none") {
           elems2[i].style.textDecoration = "underline";
        } else {
           elems2[i].style.textDecoration = "none";
        }
     }
  }

  // Piilota/näytä kommentit
  function toggleCommentsHTML2() {
     
     $(document).ready(function() {
       
        function classExists() {
           if ($('#exhibit2b').find('.comm').hasClass('tooltip bt')) {
               return true;
           } else {
              return false;
           }
        }

        if (classExists()) {
           $('#exhibit2b').find('.comm')
           .removeClass('tooltip bt')
           .css({'color':'#444444','border-bottom':'none'})
           .hover(function() { $(this).css('text-decoration', 'none'); })
           .find('span').hide();
        } else {
           $('#exhibit2b').find('.comm')
           .addClass('tooltip bt')
           .css({'color':'','border-bottom':''})
           .hover(function() { $(this).css('text-decoration', ''); })
           .find('span')
           .css('display', '');
        }
        
     });
  }

