<?php foreach ($elementsForDisplay as $setName => $setElements): ?>
<div class="element-set">
    <?php if ($showElementSetHeadings): ?>
    <h2><?php echo html_escape(__($setName)); ?></h2>
    <?php endif; ?>
    <?php foreach ($setElements as $elementName => $elementInfo):
              $elementName = str_replace('Title', 'Otsikko', $elementName);
	      $elementName = str_replace('Subject', 'Aihe', $elementName);
	      $elementName = str_replace('Description', 'Kuvaus', $elementName);
	      $elementName = str_replace('Creator', 'Kirjoittaja', $elementName);
	      $elementName = str_replace('Source', 'Lähde', $elementName);
	      $elementName = str_replace('Publisher', 'Julkaisija', $elementName);
	      $elementName = str_replace('Date', 'Päivämäärä', $elementName);
	      $elementName = str_replace('Contributor', 'Tekijät', $elementName);
	      $elementName = str_replace('Rights', 'Oikeudet', $elementName);
	      $elementName = str_replace('Relation', 'Kuuluu kokonaisuuteen', $elementName);
	      $elementName = str_replace('Format', 'Formaatti', $elementName);
	      $elementName = str_replace('Language', 'Kieli', $elementName);
	      $elementName = str_replace('Type', 'Laji', $elementName);
	      $elementName = str_replace('Identifier', 'Tunnus', $elementName);
	      $elementName = str_replace('XML File', 'XML-tiedosto', $elementName);
	      $elementName = str_replace('Image', 'Kuva', $elementName); 
    ?>
    <div id="<?php echo text_to_id(html_escape("$setName $elementName")); ?>" class="element">
        <span id="elementTitle"><?php echo html_escape(__($elementName)); ?></span><br />
        <?php foreach ($elementInfo['texts'] as $text): 
           if ($elementName == 'XML-tiedosto' || strpos($elementName, 'Kuva') !== false) {
		$text = str_replace('http://localhost/uploads/', '', $text);
              } 
	?>
            <div class="element-text"><?php echo $text; ?></div>
        <?php endforeach; ?>
    </div><!-- end element -->
    <?php endforeach; ?>
</div><!-- end element-set -->
<?php endforeach;
