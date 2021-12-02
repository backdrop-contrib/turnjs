(function ($) {

  if ($.isFunction( $.fn.turn )) {

    // Check for a page number query perameter in the url.
    var req_page = new URLSearchParams(location.search).get('page');
    var calc_page = 1;
    var offset = 0; // @todo UI for a page number offset.
    if (req_page) {
      calc_page = parseInt(req_page) + parseInt(offset);
    }

    Drupal.behaviors.turnJS = {
      attach: function (context, settings) {
        $('.drupal-turnjs').turn({
          page: calc_page,
          width: settings.turnjs.pageWidth,
          height: settings.turnjs.pageHeight,
          display: settings.turnjs.pageDisplay,
          acceleration: true,
          elevation: 50,
          when: {

            // Fired when the page is set to 1.
            first: function(e) {
              // Remove the even class for the first page.
              $(this).find('.p1').removeClass('even');
            },

            // Fired before a page starts turning.
            turning: function(e, page, view) {
              //console.log('turning - next page: ' + page);
              //console.log('turning - view: ', view);
            },

            // Fired when a page has been turned.
            turned: function(e, page, view) {

              // Add even + odd classes to the pages.
              if (page != 1) {
                // Do NOT adjust by offset here.
                var next_left = view[0];
                var next_right = view[1];
                $(this).find('.p'+next_left).addClass('odd').removeClass('even');
                $(this).find('.p'+next_right).addClass('even').removeClass('odd');
              }

              // Add a query perameter to the URL for page number.
              var left = page - offset; // Adjust by offset.
              //console.log('turned - ', left);
              var query = '?page=' + left;
              window.history.replaceState(null, null, query);

            },
          },
        });
      }
    };
  }

})(jQuery);
