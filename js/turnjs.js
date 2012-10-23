(function ($) {

  Drupal.behaviors.exampleModule = {
    attach: function (context, settings) {
      jQuery('.drupal-turnjs').turn({
      width: settings.turnjs.pageWidth,
      height: settings.turnjs.pageHeight,
      display: settings.turnjs.pageDisplay
      });
    }
  };

})(jQuery);
