<?php
/**
 * @file
 * Megaturn theme functions.
 */

/**
 * Returns HTML for a Turn.js image field formatter.
 *
 *  @param $variables
 *  An associative array containing:
 *  - item: An array of image data.
 *  - image_style: An optional image style.
 *  - path: An array containing the link 'path' and link 'options'.
 */
function theme_turnjs_image_formatter($variables) {
  $items = $variables['items'];
  $node = $variables['node'];
  $field = $variables['field'];
  $settings = $variables['display_settings'];

  $images = '';

  foreach ($items as $index => $item) {
    $image = array(
      'path' => $item['uri'],
      'alt' => $item['alt'],
      'title' => $item['title'],
      'style_name' => $settings['turnjs_image_style'],
    );

    if (isset($item['width']) && isset($item['height'])) {
      $image['width'] = $item['width'];
      $image['height'] = $item['height'];
    };

    if ($style_name = $settings['turnjs_image_style']) {
      $path = image_style_url($style_name, $image['path']);
    }
    else {
      $path = file_create_url($image['path']);
    };

    $images .= theme('turnjs_imagefield', array('image' => $image, 'path' => $path));

  };

  return $images;

};

/**
 * Returns HTML for an image using a specific Turn.js image style.
 *
 *  @param $variables
 *  An associative array containing:
 *  - image: image item as array.
 *  - path: The path of the image that should be displayed Turn.js pages.
 */
function theme_turnjs_imagefield($variables) {

  $class = array('turnjs');

  if (!empty($variables['image']['style_name'])) {
    $image = theme('image_style', $variables['image']);
  }
  else {
    $image = theme('image', $variables['image']);
  }

  return $image;

};
