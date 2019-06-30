/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2019, Ginkgo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */
 
$(function() {

  $('#index-banner').each(function() {
    var $that = $(this);
    $that.find('label.icon-menu').click(function() {
      $that.toggleClass('show');
    });
  });


  $('#index-sale-items').each(function() {
    var $that = $(this).attr('data-i', 2);
    
    var $itemDivs = $that.find('.items > a');

    if ($itemDivs.length < 3) {
      $that.attr('data-i', 1);
      $that.find('label').remove();
      return;
    }

    if ($itemDivs.length == 3) {
      $itemDivs.clone(true).appendTo($that.find('.items'));
    }
    if ($itemDivs.length > 3) {
      $itemDivs.clone(true).appendTo($that.find('.items'));
    }

    var $itemDivs = $that.find('.items > a');
    $itemDivs.last().clone(true).insertBefore($itemDivs.first());
    $itemDivs.last().remove();

    $that.find('label').click(function() {
      var $itemDivs = $that.find('.items > a');

      if ($(this).index()) {
        $itemDivs.first().clone(true).insertAfter($itemDivs.last());
        $itemDivs.first().remove();
      } else {
        $itemDivs.last().clone(true).insertBefore($itemDivs.first());
        $itemDivs.last().remove();
      }
    });
  });
  
  $('.banners').each(function() {
    var $that = $(this).attr('data-i', 1);
    var count = $that.find('> .items > *').length;
    $that.find('.pages').append($('<span />').append($(Array.apply(null, Array(count)).map(function (_, i) { return $('<label />'); })).map($.fn.toArray).click(function() { $that.attr('data-i', $(this).index() + 1); })))
    setInterval(function() {
      var i = parseInt($that.attr('data-i'), 10) + 1;
      $that.attr('data-i', i > count ? 1 : i)
    }, 7000);
  })

});