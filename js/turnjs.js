(function ($) {

  if( $.isFunction( $.fn.turn ) ) {

    Drupal.behaviors.turnJS = {
      attach: function (context, settings) {
        $('.drupal-turnjs').turn({
          acceleration: true,
          gradients: true,
          elevation: 50,
          width: settings.turnjs.pageWidth,
          height: settings.turnjs.pageHeight,
          display: settings.turnjs.pageDisplay,
          when: {
            turned: function(e, page) {
              console.log('Current view: ', $(this).turn('view'));
            }
          }
        });
      }
    };

    /* Enable page turning with left/right keys */
    $(window).bind('keydown', function(e){
      if (e.keyCode == 37) {
        $('.drupal-turnjs').turn('previous');
      }
      else if (e.keyCode == 39) {
        $('.drupal-turnjs').turn('next');
      }
    });

  }

})(jQuery);
