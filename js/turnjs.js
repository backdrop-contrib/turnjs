jQuery(document).ready(function(){

  jQuery('.drupal-turnjs').turn({
    'width': Drupal.settings.turnjs['page-width'],
    'height': Drupal.settings.turnjs['page-height'],
    'display': Drupal.settings.turnjs['page-display']
  });

});
