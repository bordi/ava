$(function() {
    $('.js-analytics').on('click', function(e) {
        e.preventDefault();

        console.log(e);
        var $el = $(this);
        var eventCategory = $el.data('a-category') || location.href;
        var eventAction = $el.data('a-action') || 'click';
        var eventLabel = $el.data('a-label') || e.target;

        ga('send', {
            hitType: 'event',
            eventCategory: eventCategory,
            eventAction: eventAction,
            eventLabel: eventLabel
        });

        setTimeout(function() {
            if(e.target.href) {
                location.href = e.target.href;
            }
        },50)
    });
});
