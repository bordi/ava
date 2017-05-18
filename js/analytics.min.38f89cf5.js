$(function(){$(".js-analytics").on("click",function(t){t.preventDefault(),console.log(t);var e=$(this),a=e.data("a-category")||location.href,n=e.data("a-action")||"click",o=e.data("a-label")||t.target;ga("send",{hitType:"event",eventCategory:a,eventAction:n,eventLabel:o}),setTimeout(function(){t.target.href&&(location.href=t.target.href)},50)})});
//# sourceMappingURL=analytics.min.js.map
