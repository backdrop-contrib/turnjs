jQuery(document).ready(function(){
  var width = Drupal.settings.turnjs['page-width'];
  var height = Drupal.settings.turnjs['page-height'];

  jQuery('.drupal-turnjs').turn({
    'width': width,
    'height': height,
  });

});
