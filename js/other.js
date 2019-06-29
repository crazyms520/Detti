/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2019, Ginkgo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */
 
$(function() {
  $('#header').each(function() {
    var $that = $(this);
    $that.find('label.icon-menu').click(function() {
      $that.toggleClass('show');
    });
  });
});