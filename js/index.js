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
  $('.items').each(function() {
    var $that = $(this).attr('data-i', 2);
    var $lArrow = $that.find('label').eq(0);
    var $rArrow = $that.find('label').eq(1);
    
    var count = 3;
    var pages = $that.find('> div > *').length - count + 1;

    $that.find('label').click(function() {
      var i = parseInt($that.attr('data-i'), 10);
      $that.attr('data-i', $(this).index() ? (i == pages ? 1 : i + 1) : (i == 1 ? pages : i - 1));
    });
  });
  
  $('.banners').each(function() {
    var $that = $(this).attr('data-i', 1);
    $that.find('.pages').append($('<span />').append($(Array.apply(null, Array($that.find('> .items > *').length)).map(function (_, i) { return $('<label />'); })).map($.fn.toArray).click(function() { $that.attr('data-i', $(this).index() + 1); })))
  })

});