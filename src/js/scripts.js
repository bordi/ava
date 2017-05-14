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

$(window).resize(loadImage);

function detectMob() {
    return window.innerWidth <= 767;
}

function isRetina() {
    return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)').matches)) || (window.devicePixelRatio && window.devicePixelRatio >= 2)) && /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
}

function loadImage() {
    if(detectMob()) {
        return;
    }
    
    var img = new Image();

    img.src = isRetina() ? "./img/bg-heropage@2x.jpg" : "./img/bg-heropage.jpg";

    img.onload = function() {
        $('#page-hero').addClass('page-hero--loaded');
    };
}
