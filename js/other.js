/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2019, Ginkgo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */
 
$(function() {
  $('#product-banner').each(function() {
    var $that = $(this).attr('data-i', 3);
    
    $that.find('label').click(function() {
      var $figures = $that.find('figure');
      if ($(this).index()) {
        $figures.first().clone(true).insertAfter($figures.last());
        $figures.first().remove();
      } else {
        $figures.last().clone(true).insertBefore($figures.first());
        $figures.last().remove();
      }
    });
  });

  $('#images').each(function() {
    var $that = $(this).attr('data-i', 1);

    var $itemDivs = $that.find('.items > div');
    $itemDivs.last().clone(true).insertBefore($itemDivs.first());
    $itemDivs.last().remove();
    var $itemDivs = $that.find('.items > div');

    if ($itemDivs.length == 1) {
      $that.find('label').remove();
      $itemDivs.clone(true).appendTo($that.find('.items'));
      return;
    }

    if ($itemDivs.length == 2) {
      $itemDivs.clone(true).appendTo($that.find('.items'));
    }
    setTimeout(function() {$that.addClass('ani');}, 300);

    $that.find('label').click(function() {
      var $itemDivs = $that.find('.items > div');

      if ($(this).index()) {
        $itemDivs.first().clone(true).insertAfter($itemDivs.last());
        $itemDivs.first().remove();
      } else {
        $itemDivs.last().clone(true).insertBefore($itemDivs.first());
        $itemDivs.last().remove();
      }
    });
  });

  $('#header').each(function() {
    var $that = $(this);
    $that.find('label.icon-menu').click(function() {
      $that.toggleClass('show');
    });
  });
});