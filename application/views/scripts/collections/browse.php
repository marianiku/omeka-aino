<?php
$pageTitle = __('Kirjeiden vastaanottajat');
echo head(array('title'=>$pageTitle,'bodyclass' => 'collections browse'));
?>

<?php echo pagination_links(); ?>

<?php
$sortLinks[__('Nimi')] = 'Dublin Core,Title';
$sortLinks[__('Lisätty')] = 'added';
?>
<div id="sort-links">
    <span><?php echo __('(%s kokoelmaa)', $total_results); ?></span>
    <span class="sort-label"><?php echo __('Järjestä: '); ?></span><?php echo browse_sort_links($sortLinks); ?>
</div>

<?php foreach (loop('collections') as $collection): ?>

<div class="collection">

    <h2><?php echo link_to_items_browse(metadata('collection', array('Dublin Core', 'Title')), array('collection' => metadata('collection', 'id'))); ?></h2>
    <?php if ($collectionImage = record_image('collection', 'square_thumbnail')): ?>
        <div class="image"><?php echo $collectionImage; ?></div>
    <?php endif; ?>

    <?php if (metadata('collection', array('Dublin Core', 'Description'))): ?>
    <div class="collection-description">
        <?php echo text_to_paragraphs(metadata('collection', array('Dublin Core', 'Description'), array('snippet'=>150))); ?>
    </div>
    <?php endif; ?>

    <?php if ($collection->hasContributor()): ?>
    <div class="collection-contributors">
        <p>
        <strong><?php echo __('Contributors'); ?>:</strong>
        <?php echo metadata('collection', array('Dublin Core', 'Contributor'), array('all'=>true, 'delimiter'=>', ')); ?>
        </p>
    </div>
    <?php endif; ?>

    <p class="view-items-link"><?php echo link_to_items_browse(__('Kokoelman kirjeet', metadata('collection', array('Dublin Core', 'Title'))), array('collection' => metadata('collection', 'id'))); ?></p>

    <?php fire_plugin_hook('public_collections_browse_each', array('view' => $this, 'collection' => $collection)); ?>

</div><!-- end class="collection" -->

<?php endforeach; ?>

<?php echo pagination_links(); ?>

<?php fire_plugin_hook('public_collections_browse', array('collections'=>$collections, 'view' => $this)); ?>

<?php echo foot(); ?>
