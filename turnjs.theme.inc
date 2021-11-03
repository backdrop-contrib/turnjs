<?php
/**
 * @file
 * Turnjs theme functions.
 */

/**
 * Returns HTML for a Turn.js image field formatter.
 */
function theme_turnjs_image_formatter($variables) {
  $items = $variables['items'];
  $node = $variables['node'];
  $field = $variables['field'];
  $settings = $variables['display_settings'];

  $images = '';

  foreach ($items as $index => $item) {
    $image = array(
      'uri' => $item['uri'],
      'alt' => $item['alt'],
      'title' => $item['title'],
      'style_name' => $settings['turnjs_image_style'],
    );

    if (isset($item['width']) && isset($item['height'])) {
      $image['width'] = $item['width'];
      $image['height'] = $item['height'];
    };

    if ($style_name = $settings['turnjs_image_style']) {
      $path = image_style_url($style_name, $image['uri']);
    }
    else {
      $path = file_create_url($image['uri']);
    };

    $images .= theme('turnjs_page', array('path' => $path, 'image' => $image));

  }

  return $images;
};

/**
 * Returns HTML for an image using a specific Turn.js image style.
 */
function theme_turnjs_page($variables) {
  $path = $variables['path'];
  //$image = $variables['image']; // Not used. Here for alternate theme output.

  $output = '<div style="background-image:url(' . $path . ');"></div>';

  return $output;
};
