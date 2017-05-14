$(function() {
    //click on menu button
    $('#js-menuBtn').on('click', function() {
        $(this).toggleClass('button-close--active');
        $('#js-mainNavigation').toggleClass('nav--open');
    });

    //click on navigation items
    $('#js-mainNavigation').on('click', '.nav__item:not(.nav__item--button)', handleClickToScroll);
});

function handleClickToScroll(e) {
    e.preventDefault();

    var docFragment = $(this).attr('href');
    var docFragmentOffset = $(docFragment).offset().top || 0;

    $('#js-mainNavigation').removeClass('nav--open');
    $('.button-close').removeClass('button-close--active');
    $('html,body').animate({scrollTop: docFragmentOffset}, 1000);
}

function handleSliderChange(position, value) {
    var multipleFactor = 23;
    var resSum = value * multipleFactor;

    $('.rangeslider__handle').attr('data-value', value);
    $('#js-calcSum').text(resSum);
}

$(window).on('load', function() {
    $('input[type="range"]').rangeslider({
        polyfill: false,
        onInit: function() {
            handleSliderChange(null, 30);
        },
        onSlide: handleSliderChange,
    });

    $('#page').indyFadeBox();

    loadImage();
});

function loadImage() {
    var img = new Image();

    img.src = "./img/bg-heropage.jpg";

    img.onload = function() {
        $('#page-hero').addClass('page-hero--loaded');
        //$('#page-hero').css('background-image', 'url('+img.src+')');
    };
}
