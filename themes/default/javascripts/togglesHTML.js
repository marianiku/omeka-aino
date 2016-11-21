 // Merkintöjen näyttäminen/piilottaminen HTML-transkriptiossa

  // Piilota/näytä poistot (yliviivaus)
  function toggleMarkingsHTML() {

     var elems = document.getElementsByClassName('del');
     for (var i = 0; i < elems.length; i++) {
        if (elems[i].style.textDecoration == "none" || elems[i].style.color == "#444444") {
           elems[i].style.textDecoration = "line-through";
           elems[i].style.color = "#f22b0e"
        } else {
           elems[i].style.textDecoration = "none";
           elems[i].style.color = "#444444";           
        }
     }

     var elems1 = document.getElementsByClassName('sup');
     for (var i = 0; i < elems1.length; i++) {
        if (elems1[i].style.verticalAlign == "baseline" || elems1[i].style.color == "#444444") {
           elems1[i].style.verticalAlign = "super";
	   elems1[i].style.color = "#3361a1";
        } else {
           elems1[i].style.verticalAlign = "baseline";
           elems1[i].style.color = "#444444";
        }
     }

     var elems2 = document.getElementsByClassName('underline');
     for (var i = 0; i < elems2.length; i++) {
        if (elems2[i].style.textDecoration == "none") {
           elems2[i].style.textDecoration = "underline";
        } else {
           elems2[i].style.textDecoration = "none";
        }
     }
  }

  // Piilota/näytä kommentit
  function toggleCommentsHTML() {
     
     $(document).ready(function() {
       
        function classExists() {
           if ($('.comm').hasClass('tooltip bt')) {
               return true;
           } else {
              return false;
           }
        }

        if (classExists()) {
           $('.comm').removeClass('tooltip bt');
           $('.comm').css('color', '#444444');
           $('.comm').css('border-bottom', 'none');
           $('.comm').find('span').hide();
        } else {
           $('.comm').addClass('tooltip bt');
           $('.comm').css('color', '');
           $('.comm').css('border-bottom');
           $('.comm').find('span').css('display', '');
        }
        
     });
  }

