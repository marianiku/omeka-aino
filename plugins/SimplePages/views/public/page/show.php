<?php
$bodyclass = 'page simple-page';
if ($is_home_page):
  $bodyclass .= ' simple-page-home';
endif;

echo head(array(
  'title' => metadata('simple_pages_page', 'title'),
  'bodyclass' => $bodyclass,
  'bodyid' => metadata('simple_pages_page', 'slug')
));
?>

<div id="primary">
  <script>

  // Simple Pages-sivujen kuvaviewerin toimintoja: zoomaus, kuvissa siirtyminen
  $(document).ready(function() {

    $('.pic').draggable();

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

    var scale = 1;
    var xLast = 0;
    var yLast = 0;
    var xImage = 0;
    var yImage = 0;
    var xScreen, yScreen;

    $('#picframe').bind('mousewheel', function(e, delta) {

      xScreen = e.pageX - $(this).offset().left;
      yScreen = e.pageY - $(this).offset().top;

      xImage = xImage + ((xScreen - xLast) / scale);
      yImage = yImage + ((yScreen - yLast) / scale);

      if (delta > 0) {
        scale += 0.2;
      } else {
        scale -= 0.2;
      }
      scale = scale < 1 ? 1 : (scale > 20 ? 20 : scale);

      var xNew = (xScreen - xImage) / scale;
      var yNew = (yScreen - yImage) / scale;
      xLast = xScreen;
      yLast = yScreen;

      $('.pic2')
      .css('transform', 'scale(' + scale + ')' + 'translate(' + xNew + 'px, ' + yNew + 'px' + ')')
      .css('transform-origin', xImage + 'px ' + yImage + 'px')
      return false;
    });

    $('.pic2').draggable();

    $('.kaukonen-btn').each(function(i, bt) {
      $(bt).click(function() {
        $('.kaukonen-comm').each(function(j, comm) {
          if (j == i && $(comm).is(':hidden')) {
            $(comm).slideDown('fast', function() {});
          } else if (j == i && !$(comm).is(':hidden')) {
            $(comm).slideUp('fast', function() {});
          }
        });
      });
    });

    $('.pic2').not(':first').hide();

    var i = 0;

    $('#fwd').click(function() {
      if (i > $('.pic2').length) {
        return false;
      }

      var current = $('.pic2:eq(' + i + ')');
      var next = current.next();

      next.show();
      next.siblings().hide();
      i++;
    });

    $('#bwd').click(function() {
      if (i == 0) {
        return false;
      }

      var current = $('.pic2:eq(' + i + ')');
      var prev = current.prev();

      prev.show();
      prev.siblings().hide();
      i--;
    });
  });

  </script>
  <?php if (!$is_home_page): ?>
    <h2 style="margin-top: 1em; margin-bottom: 2em;"><?php echo metadata('simple_pages_page', 'title'); ?></h2>
  <?php endif; ?>
  <?php
  $text = metadata('simple_pages_page', 'text', array('no_escape' => true));
  echo $this->shortcodes($text);
  ?>
</div>

<?php echo foot(); ?>
