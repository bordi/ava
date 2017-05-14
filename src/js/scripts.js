$(function() {
    //click on menu button
    $('#js-menuBtn').on('click', function() {
        $(this).toggleClass('button-close--active');
        $('#js-mainNavigation').toggleClass('nav--open');
    });

    //click on navigation items
    $('#js-mainNavigation').on('click', '.nav__item:not(.nav__item--button)', handleClickToScroll);
    $('#js-ScrollToContacts').on('click', handleClickToScroll);
});

function handleClickToScroll(e) {
    e.preventDefault();

    var docFragment = $(this).attr('href');
    var docFragmentOffset = $(docFragment).offset().top || 0;

    $('#js-mainNavigation').removeClass('nav--open');
    $('.button-close').removeClass('button-close--active');
    $('html,body').animate({scrollTop: docFragmentOffset}, 1000);
}

function handleSliderChange(position,value) {
    var multipleFactor = 23;
    var resSum = value*multipleFactor;

    $('.rangeslider__handle').attr('data-value', value);
    $('#js-calcSum').text(resSum);
}

$(window).load(function() {
    $('input[type="range"]').rangeslider({
        polyfill: false,
        onInit: function() {
            handleSliderChange(null, 30);
        },
        onSlide: handleSliderChange,
    });

    $('#page').indyFadeBox();
});
