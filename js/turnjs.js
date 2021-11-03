(function ($) {

  if ($.isFunction( $.fn.turn )) {

    Drupal.behaviors.turnJS = {
      attach: function (context, settings) {
        $('.drupal-turnjs').turn({
          width: settings.turnjs.pageWidth,
          height: settings.turnjs.pageHeight,
          display: settings.turnjs.pageDisplay,
          acceleration: true,
          elevation:50,
          when: {
            // Fired when the page is set to 1.
            first: function(e) {
              //console.log('first - removing classes');
              $(this).find('.p1').removeClass('even');
            },
            // Fired before a page starts turning.
            turning: function(e, page, view) {
              //console.log('turning - next page: ' + page);

              if (page != 1) {
                //console.log('turning - adding classes');
                var next_left = view[0];
                var next_right = view[1];
                $(this).find('.p'+next_left).addClass('odd').removeClass('even');
                $(this).find('.p'+next_right).addClass('even').removeClass('odd');
              }

            },
            // Fired when a page has been turned.
            turned: function(e, page, view) {
              //console.log('turned: ', view);
            },
          },
        });
      }
    };

    // Enable page turning with left/right keyboard keys.
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
