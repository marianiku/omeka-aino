<?php echo head(array('bodyid'=>'home', 'bodyclass' =>'two-col')); ?>

<div id="primary">
  <?php if ($homepageText = get_theme_option('Homepage Text')): ?>
    <p><?php echo $homepageText; ?></p>
  <?php endif; ?>
  <?php if (get_theme_option('Display Featured Item') == 1): ?>
    <!-- Featured Item -->
    <div id="featured-item">
      <h2><?php echo __('Featured Item'); ?></h2>
      <?php echo random_featured_items(1); ?>
    </div><!--end featured-item-->
  <?php endif; ?>
  <?php if (get_theme_option('Display Featured Collection')): ?>
    <!-- Featured Collection -->
    <div id="featured-collection">
      <h2><?php echo __('Featured Collection'); ?></h2>
      <?php echo random_featured_collection(); ?>
    </div><!-- end featured collection -->
  <?php endif; ?>
  <?php if ((get_theme_option('Display Featured Exhibit')) && function_exists('exhibit_builder_display_random_featured_exhibit')): ?>
    <!-- Featured Exhibit -->
    <?php echo exhibit_builder_display_random_featured_exhibit(); ?>
  <?php endif; ?>

</div><!-- end primary -->

<div id="secondary" style="margin-top:30px;">
  <?php
  $recentItems = get_theme_option('Homepage Recent Items');
  if ($recentItems === null || $recentItems === ''):
    $recentItems = 3;
  else:
    $recentItems = (int) $recentItems;
  endif;
  if ($recentItems):
    ?>
    <div id="recent-items">
      <a href="<?php echo 'http://'.$_SERVER['SERVER_NAME'].'/omeka/items/show/1'; ?>"><img src="<?php echo 'http://'.$_SERVER['SERVER_NAME'].'/omeka/files/original/f0d818605a527c592e530b3d36b24e21.jpg';?>" width="600px" /></a>
    </div><!--end recent-items -->
  <?php endif; ?>

  <?php fire_plugin_hook('public_home', array('view' => $this)); ?>

</div><!-- end secondary -->
<?php echo foot(); ?>
