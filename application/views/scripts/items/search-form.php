<?php
if (!empty($formActionUri)):
    $formAttributes['action'] = $formActionUri;
else:
    $formAttributes['action'] = url(array('controller'=>'items',
                                          'action'=>'browse'));
endif;
$formAttributes['method'] = 'GET';
?>

<form <?php echo tag_attributes($formAttributes); ?>>
    <!--<div id="search-keywords" class="field">
        <?php echo $this->formLabel('keyword-search', __('Hae hakusanoilla')); ?>
        <div class="inputs">
        <?php
            echo $this->formText(
                'search',
                @$_REQUEST['search'],
                array('id' => 'keyword-search', 'size' => '40')
            );
        ?>
        </div>
    </div>-->
    <div id="search-narrow-by-fields" class="field">
        <div class="label"><?php echo __('Haettavat kentät'); ?></div>
        <div class="inputs">
        <?php
        // If the form has been submitted, retain the number of search
        // fields used and rebuild the form
        if (!empty($_GET['advanced'])) {
            $search = $_GET['advanced'];
        } else {
            $search = array(array('field'=>'','type'=>'','value'=>''));
        }

        //Here is where we actually build the search form
        foreach ($search as $i => $rows): ?>
            <div class="search-entry">
                <?php
                //The POST looks like =>
                // advanced[0] =>
                //[field] = 'description'
                //[type] = 'contains'
                //[terms] = 'foobar'
                //etc
                echo $this->formSelect(
                    "advanced[$i][element_id]",
                    @$rows['element_id'],
                    array(
                        'title' => __("Hakukenttä"),
                        'id' => null,
                        'class' => 'advanced-search-element'
                    ),
                    get_table_options('Element', null, array(
                        'record_types' => array('Item', 'All'),
                        'sort' => 'orderBySet')
                    )
                );
                echo $this->formSelect(
                    "advanced[$i][type]",
                    @$rows['type'],
                    array(
                        'title' => __("Hakutyyppi"),
                        'id' => null,
                        'class' => 'advanced-search-type'
                    ),
                    label_table_options(array(
                        'contains' => __('sisältää'),
                        'does not contain' => __('ei sisällä'),
                        'is exactly' => __('on täsmälleen'),
                        'is empty' => __('on tyhjä'),
                        'is not empty' => __('ei ole tyhjä'))
                    )
                );
                echo $this->formText(
                    "advanced[$i][terms]",
                    @$rows['terms'],
                    array(
                        'size' => '20',
                        'title' => __("Hakusanat"),
                        'id' => null,
                        'class' => 'advanced-search-terms'
                    )
                );
                ?>
                <button type="button" class="remove_search" disabled="disabled" style="display: none;" title="Poista hakukenttä"><?php echo __('-'); ?></button>
            </div>
        <?php endforeach; ?>
        </div>
        <button type="button" class="add_search" style="border-radius: 2px;" title="Lisää hakukenttä"><?php echo __('+'); ?></button>
    </div>

    <div id="search-by-range" class="field">
        <?php echo $this->formLabel('range', __('Hae tunnuksilla (esimerkki: 1-4, 156, 79)')); ?>
        <div class="inputs">
        <?php
            echo $this->formText('range', @$_GET['range'],
                array('size' => '40')
            );
        ?>
        </div>
    </div>

    <div class="field">
        <?php echo $this->formLabel('collection-search', __('Hae kokoelmaa')); ?>
        <div class="inputs">
        <?php
            echo $this->formSelect(
                'collection',
                @$_REQUEST['collection'],
                array('id' => 'collection-search'),
                get_table_options('Collection')
            );
        ?>
        </div>
    </div>

    <!--<div class="field">
        <?php echo $this->formLabel('item-type-search', __('Hae dokumenttityypillä')); ?>
        <div class="inputs">
        <?php
            echo $this->formSelect(
                'type',
                @$_REQUEST['type'],
                array('id' => 'item-type-search'),
                get_table_options('ItemType')
            );
        ?>
        </div>
    </div>

    <?php if(is_allowed('Users', 'browse')): ?>
    <div class="field">
    <?php
        echo $this->formLabel('user-search', __('Search By User'));?>
        <div class="inputs">
        <?php
            echo $this->formSelect(
                'user',
                @$_REQUEST['user'],
                array('id' => 'user-search'),
                get_table_options('User')
            );
        ?>
        </div>
    </div>-->
    <?php endif; ?>

    <div class="field">
        <?php echo $this->formLabel('tag-search', __('Hae tageilla')); ?>
        <div class="inputs">
        <?php
            echo $this->formText('tags', @$_REQUEST['tags'],
                array('size' => '40', 'id' => 'tag-search')
            );
        ?>
        </div>
    </div>


    <!--<?php if (is_allowed('Items','showNotPublic')): ?>
    <div class="field">
        <?php echo $this->formLabel('public', __('Public/Non-Public')); ?>
        <div class="inputs">
        <?php
            echo $this->formSelect(
                'public',
                @$_REQUEST['public'],
                array(),
                label_table_options(array(
                    '1' => __('Only Public Items'),
                    '0' => __('Only Non-Public Items')
                ))
            );
        ?>
        </div>
    </div>
    <?php endif; ?>

    <div class="field">
        <?php echo $this->formLabel('featured', __('Featured/Non-Featured')); ?>
        <div class="inputs">
        <?php
            echo $this->formSelect(
                'featured',
                @$_REQUEST['featured'],
                array(),
                label_table_options(array(
                    '1' => __('Only Featured Items'),
                    '0' => __('Only Non-Featured Items')
                ))
            );
        ?>
        </div>
    </div>-->

    <?php fire_plugin_hook('public_items_search', array('view' => $this)); ?>
    <div>
        <?php if (!isset($buttonText)) $buttonText = __('Hae'); ?>
        <input style="border-radius:2px;" type="submit" class="submit" name="submit_search" id="submit_search_advanced" value="<?php echo $buttonText ?>">
    </div>
</form>

<!--<div style="width:40%;height:100%;float:left;padding:1em;overflow:auto;">
  <h2>Hakutulokset</h2>
  <?php if (isset($total_results) && $total_results > 0): ?>
    <?php
    $pageTitle = __('Haku') . ' ' . __('(yhteensä %s kpl)', $total_results);
    echo head(array('title' => $pageTitle, 'bodyclass' => 'search'));
    $searchRecordTypes = get_search_record_types();
    ?>
  <?php echo pagination_links(); ?>
  <table id="search-results">
      <thead>
          <tr>
              <th><?php echo __('Dokumentin tyyppi');?></th>
              <th><?php echo __('Otsikko');?></th>
          </tr>
      </thead>
      <tbody>
          <?php $filter = new Zend_Filter_Word_CamelCaseToDash; ?>
          <?php foreach (loop('search_texts') as $searchText): ?>
          <?php $record = get_record_by_id($searchText['record_type'], $searchText['record_id']); ?>
          <?php $recordType = $searchText['record_type']; ?>
          <?php set_current_record($recordType, $record); ?>
          <tr class="<?php echo strtolower($filter->filter($recordType)); ?>">
              <td>
                  <?php echo $searchRecordTypes[$recordType]; ?>
              </td>
              <td>
                  <?php if ($recordImage = record_image($recordType, 'square_thumbnail')): ?>
                      <?php echo link_to($record, 'show', $recordImage, array('class' => 'image')); ?>
                  <?php endif; ?>
                  <a href="<?php echo record_url($record, 'show'); ?>"><?php echo $searchText['title'] ? $searchText['title'] : '[Unknown]'; ?></a>
              </td>
          </tr>
          <?php endforeach; ?>
      </tbody>
  </table>
  <?php echo pagination_links(); ?>
  <?php else: ?>
  <div id="no-results">
      <p><?php echo __('Hakusanoilla ei löytynyt kirjeitä.');?></p>
  </div>
  <?php endif; ?>
</div>-->
<?php echo js_tag('items-search'); ?>
<script type="text/javascript">
    jQuery(document).ready(function () {
        Omeka.Search.activateSearchButtons();
    });
</script>
