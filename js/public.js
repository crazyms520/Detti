/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2019, Ginkgo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */
 
$(function() {
  $('*[data-bgurl]').each(function() {
    var $that = $(this);
    var url = $that.data('bgurl');
    $that.css({'background-image': 'url(' + (url.length ? url : '') + ')'});
  });
});