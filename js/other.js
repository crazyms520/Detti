$(function(){$("#product-banner").each(function(){var i=$(this).attr("data-i",3);i.find("label").click(function(){var e=i.find("figure");$(this).index()?(e.first().clone(!0).insertAfter(e.last()),e.first().remove()):(e.last().clone(!0).insertBefore(e.first()),e.last().remove())})}),$("#images").each(function(){var e,i=$(this).attr("data-i",1);if((e=i.find(".items > div")).last().clone(!0).insertBefore(e.first()),e.last().remove(),1==(e=i.find(".items > div")).length)return i.find("label").remove(),void e.clone(!0).appendTo(i.find(".items"));2==e.length&&e.clone(!0).appendTo(i.find(".items")),setTimeout(function(){i.addClass("ani")},300),i.find("label").click(function(){var e=i.find(".items > div");$(this).index()?(e.first().clone(!0).insertAfter(e.last()),e.first().remove()):(e.last().clone(!0).insertBefore(e.first()),e.last().remove())})}),$("#header").each(function(){var e=$(this);e.find("label.icon-menu").click(function(){e.toggleClass("show")})})});