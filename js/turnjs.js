(function ($) {

  if( $.isFunction( $.fn.turn ) ) {

    Drupal.behaviors.turnJS = {
      attach: function (context, settings) {
        $('.drupal-turnjs').turn({
          width: settings.turnjs.pageWidth,
          height: settings.turnjs.pageHeight,
          display: settings.turnjs.pageDisplay
        });
      }
    };

  }

})(jQuery);
