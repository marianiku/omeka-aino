<!DOCTYPE html>
<html lang="<?php echo get_html_lang(); ?>">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php if ( $description = option('description')): ?>
    <meta name="description" content="<?php echo $description; ?>" />
  <?php endif; ?>
  <?php
  if (isset($title)) {
    $titleParts[] = strip_formatting($title);
  }
  $titleParts[] = option('site_title');
  ?>
  <title><?php echo implode(' &middot; ', $titleParts); ?></title>

  <?php echo auto_discovery_link_tags(); ?>

  <!-- Plugin Stuff -->

  <?php fire_plugin_hook('public_head', array('view'=>$this)); ?>


  <!-- Stylesheets -->
  <?php
  queue_css_file(array('iconfonts','style'));
  queue_css_url('//fonts.googleapis.com/css?family=PT+Serif:400,700,400italic,700italic');
  echo head_css();

  echo theme_header_background();
  ?>

  <?php
  ($backgroundColor = get_theme_option('background_color')) || ($backgroundColor = "#FFFD0");
  ($textColor = get_theme_option('text_color')) || ($textColor = "#444444");
  ($linkColor = get_theme_option('link_color')) || ($linkColor = "#888888");
  ($buttonColor = get_theme_option('button_color')) || ($buttonColor = "#000000");
  ($buttonTextColor = get_theme_option('button_text_color')) || ($buttonTextColor = "#FFFFFF");
  ($titleColor = get_theme_option('header_title_color')) || ($titleColor = "#000000");
  ?>
  <style>
  body {
    background-color: <?php echo $backgroundColor; ?>;
    color: <?php echo $textColor; ?>;
  }
  #site-title a:link, #site-title a:visited,
  #site-title a:active, #site-title a:hover {
    color: <?php echo $titleColor; ?>;
    <?php if (get_theme_option('header_background')): ?>
    text-shadow: 0px 0px 20px #000;
    <?php endif; ?>
  }
  a:link {
    color: <?php echo $linkColor; ?>;
  }

  a:hover, a:focus {
    color: #888888 !important;
  }

  a:visited {
    color: #444444 !important;
  }

  .button, button,
  input[type="reset"],
  input[type="submit"],
  input[type="button"],
  .pagination_next a,
  .pagination_previous a {
    background-color: <?php echo $buttonColor; ?>;
    color: <?php echo $buttonTextColor; ?> !important;
  }

  #search-form input[type="text"] {
    border-color: <?php echo $buttonColor; ?>
  }

  .mobile li {
    background-color: <?php echo thanksroy_brighten($buttonColor, 40); ?>;
  }

  .mobile li ul li {
    background-color: <?php echo thanksroy_brighten($buttonColor, 20); ?>;
  }

  .mobile li li li {
    background-color: <?php echo thanksroy_brighten($buttonColor, -20); ?>;
  }
  </style>
  <!-- JavaScripts -->
  <?php
  queue_js_file('vendor/modernizr');
  queue_js_file('vendor/selectivizr', 'javascripts', array('conditional' => '(gte IE 6)&(lte IE 8)'));
  queue_js_file('vendor/respond');
  queue_js_file('vendor/jquery-accessibleMegaMenu');
  queue_js_file('globals');
  queue_js_file('default');
  queue_js_file('jquery-1.12.4.min');
  queue_js_file('jquery-ui');
  queue_js_file('jquery.mousewheel.min');
  queue_js_file('header_menus');
  echo head_js();
  ?>
</head>
<?php echo body_tag(array('id' => @$bodyid, 'class' => @$bodyclass)); ?>
<a href="#content" id="skipnav"><?php echo __('Skip to main content'); ?></a>
<?php fire_plugin_hook('public_body', array('view'=>$this)); ?>

<header role="banner">
  <?php fire_plugin_hook('public_header', array('view'=>$this)); ?>
  <div id="site-title" style="width:98%;height:10%;">
    <?php echo link_to_home_page(); ?>
     <a href="http://www.finlit.fi" target="_blank">
      <img width="200px" style="float:right;margin-right:16px;" src="http://localhost/omeka-aino/sks_header_logo.png" />
    </a>
  </div>
  <div id="search-container" role="search">
    <span style="width:99%;float:left;margin-right:16px;margin-top:20px;margin-bottom:0;">
        <a id="infobtn">Aino Kalevalassa</a>
        <a id="sanat-menu-btn">Aino-runon sanat</a>
        <a style="margin-left:40px;font-size:18px;" href="<?php echo html_escape(url('kerrostumat')); ?>">Runon kerrostumat</a>
        <a id="kaukonen-menu-btn">Väinö Kaukosen säetutkimus</a>
      </span>
    </div>
    <div id="sanat-menu" style="display:none;">
      <ul>
        <li><a href="<?php echo html_escape(url('sanat/selitykset')); ?>">Sanaselitykset</a></li>
        <li><a href="<?php echo html_escape(url('sanat/periaatteet')); ?>">Sanaselitysten periaatteet</a></li>
      </ul>
    </div>
    <div id="kaukonen-menu" style="display:none;">
      <ul>
        <li><a href="<?php echo html_escape(url('kaukonen/saetutkimus')); ?>">Kaukosen säeviitteet</a></li>
        <li><a href="<?php echo html_escape(url('kaukonen/taustaa')); ?>">Säetutkimuksen taustaa</a></li>
        <li><a href="<?php echo html_escape(url('kaukonen/ohjeita')); ?>">Säetutkimuksen viitteet ja kommentaarit</a></li>
      </ul>
    </div>
    <div id="instructions" style="display: none;">
      <ul>
        <li><a href="<?php echo html_escape(url('ohjeet/toimitus')); ?>">Lönnrotin toimitustavat</a></li>
      </ul>
    </div>
  </header>

  <div class="menu-button button">Menu</div>

  <div id="wrap">
    <!--<nav id="primary-nav" role="navigation">
    <?php echo public_nav_main(array('role' => 'navigation')); ?>
    <div id="search-container" role="search">
    <?php if (get_theme_option('use_advanced_search') === null || get_theme_option('use_advanced_search')): ?>
    <?php echo search_form(array('show_advanced' => true)); ?>
  <?php else: ?>
  <?php echo search_form(); ?>
<?php endif; ?>
</div>
</nav>-->
<div id="content" role="main" tabindex="-1">
  <?php fire_plugin_hook('public_content_top', array('view'=>$this)); ?>
