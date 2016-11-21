// Käsin rakennetun viewerin + XML-transkription zoomaus-, sivutus- ym. toiminnot

$(document).ready(function() {

  // Lataa kommentit listasta ja tekee jokaiselle popupin
  $.each(comments, function(key, value) {
    var first = $('#exhibit2b').text().indexOf(key);
    if (first >= 0) {
      var last = first + key.length;
      var ext = $('#exhibit2b').text().indexOf(' ', last);
      var ending = $('#exhibit2b').text().substring(last, ext);

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

      $('#exhibit2b')
      .html($('#exhibit2b')
      .html()
      .replace(str, '<a class="comm tooltip bt" href="#">' + str + '<span>' + value + '</span></a>'));
    }
  });


  // Kuvien & sivujen näyttö. Aluksi näytetään ensimmäinen kuva & vastavaan sivun transkriptio
  $('.pic').not('.pic:first').hide();

  var i = 0;
  var j = 0;

  // Selaus eteenpäin
  $('#nextPic').click(function() {

    if (i == $('#exhibit2b').find('.page').length-1) {
      return false;
    }

    var currentPage = $('#exhibit2b').find('.page:eq(' + i + ')');
    var nextPage = currentPage.next();
    var currentPic = $('.pic:eq(' + j + ')');
    var nextPic = currentPic.next();

    if (nextPage) {
      nextPage.show().siblings('.page').hide();
      var nextClass = nextPage.find('.pb').attr('class');
      var currentClass = currentPage.find('.pb').attr('class');
      if (nextClass.slice(0, -1) != currentClass.slice(0, -1)) {
        nextPic.show().siblings('.pic').hide();
        j++;
      }
    }

    i++;

  });

  // Selaus taaksepäin
  $('#prevPic').click(function() {

    if (i == 0) {
      return false;
    }

    $('.pic:eq(' + i + ')').hide();
    if ($('.pic:eq(' + i + ')').prev()) {
      $('.pic:eq(' + i + ')').prev().show().prevAll().hide();
    }

    var currentPage = $('#exhibit2b').find('.page:eq(' + i + ')');
    var prevPage = currentPage.prev();
    var currentPic = $('.pic:eq(' + j + ')');
    var prevPic = currentPic.prev();

    if (prevPage) {
      prevPage.show().siblings('.page').hide();
      var prevClass = prevPage.find('.pb').attr('class');
      var currentClass = currentPage.find('.pb').attr('class');
      if (prevClass.slice(0, -1) != currentClass.slice(0, -1)) {
        prevPic.show().siblings('.pic').hide();
        j--;
      }
    }

    i--;
  });

  // Estä sivun skrollaus kuvaa zoomatessa
  $('#picframe').mouseenter(function() {
    $('body').bind('mousewheel', function() {
      return false;
    });
  })
  .mouseleave(function() {
    $('body').bind('mousewheel', function() {
      return true;
    });
  });

  // Kuvan zoomaus
  var scale = 1;
  var xLast = 0;
  var yLast = 0;
  var xImage = 0;
  var yImage = 0;
  var xScreen, yScreen;

  $('#picframe').bind('mousewheel', function(e, delta) {

    // Nykyinen piste ruudulla, vaakasuuntainen laskettava eri tavalla riippuen siitä, onko koko sivu päällä vai ei.
    if ($('#picframe').hasClass('fullscreen')) {
      xScreen = e.pageX - ($(this).width()/2) + ($('.pic').width()/2);
      yScreen = e.pageY - $(this).offset().top;
    } else {
      xScreen = e.pageX - $(this).offset().left;
      yScreen = e.pageY - $(this).offset().top;
    }

    // Nykyinen piste kuvalla tämänhetkisessä koossa.
    xImage = xImage + ((xScreen - xLast) / scale);
    yImage = yImage + ((yScreen - yLast) / scale);

    // Uusi koko
    if (delta > 0) {
      scale += 0.2;
    } else {
      scale -= 0.2;
    }
    scale = scale < 1 ? 1 : (scale > 20 ? 20 : scale);

    // Piste, johon kuvaa siirretään
    var xNew = (xScreen - xImage) / scale;
    var yNew = (yScreen - yImage) / scale;

    // Tallennetaan tämänhetkinen piste ruudulla.
    xLast = xScreen;
    yLast = yScreen;

    // Zoomaus
    $('.pic')
    .css('transform', 'scale(' + scale + ')' + 'translate(' + xNew + 'px, ' + yNew + 'px' + ')')
    .css('transform-origin', xImage + 'px ' + yImage + 'px')
    return false;

  });

  // Kuvan liikuttaminen.
  $('.pic').draggable({
     drag: function(e) {
    	if ($('#picframe').hasClass('fullscreen')) {
      	   xScreen = e.pageX - ($('#picframe').width()/2) + ($('.pic').width()/2);
      	   yScreen = e.pageY - $('#picframe').offset().top;
    	} else {
           xScreen = e.pageX - $('#picframe').offset().left;
           yScreen = e.pageY - $('#picframe').offset().top;
    	}
     }
  });

  // Palauttaa kuvan alkuperäisen koon ja paikan kehyksessä.
  $('#origSize').click(function() {
    $('.pic').css({'transform':'', 'left': '', 'top': ''});
    scale = 1;
    xLast = 0;
    yLast = 0;
    xImage = 0;
    yImage = 0;
  });

  // Koko sivun näkymä, piilotetaan koko sivu-painike ja metadata-painike, nollataan skaalaukset.
  $('#fullScreen').click(function() {
    $('#picframe').addClass('fullscreen');
    $('#fullScreen').hide();
    $('#closeFull').show();
    $('#metadata').hide();
    $('#buttons').css('left', '93%');
    if (!$('#infopanel').is(':hidden')) {
      $('#infopanel').slideUp('fast');
    }
    $('.pic').css({'transform':'', 'left': '', 'top': ''});
    scale = 1;
    xLast = 0;
    yLast = 0;
    xImage = 0;
    yImage = 0;
  });

  // Sulkee koko sivun näkymän, nollaa kuvan koko- ja paikkamuutokset
  $('#closeFull').click(function() {
    $('#picframe').removeClass('fullscreen');
    $('#fullScreen').show();
    $('#closeFull').hide();
    $('#metadata').show();
    $('#buttons').css('left', '');
    $('.pic').css({'transform':'', 'left': '', 'top': ''});
    scale = 1;
    xLast = 0;
    yLast = 0;
    xImage = 0;
    yImage = 0;
  });

  // Metadata-paneelin näyttäminen
  $('#metadata').click(function() {
    if ($('#infopanel').is(':hidden')) {
      $('#infopanel').slideDown('fast');
    } else {
      $('#infopanel').slideUp('fast');
    }
  });

});
