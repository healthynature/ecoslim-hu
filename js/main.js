$(document).ready(function () {

    var flag = 0;
    if (window.innerWidth <= 990 && flag === 0) {
        flag = 1;
        $('.slider-eat').slick({
            arrows: true,
            dots: false,
            fade: true,
            prevArrow: $('.wrapper-eating-slider .prev'),
            nextArrow: $('.wrapper-eating-slider .next')
        });
        $('.science-slider').slick({
            arrows: true,
            dots: false,
            fade: true,
            prevArrow: $('.wrapper-science-slider .prev'),
            nextArrow: $('.wrapper-science-slider .next')
        });
        $('.review-slider').slick({
            arrows: true,
            dots: false,
            prevArrow: $('.wrapper-review-slider .prev'),
            nextArrow: $('.wrapper-review-slider .next')
        });
    }
    $(window).on('resize', function (event) {
        windowWidth = $(window).width();
        if (event.target.innerWidth <= 990 && flag === 0) {
            flag = 1;
            $('.slider-eat').slick({
                arrows: true,
                dots: false,
                fade: true,
                prevArrow: $('.wrapper-eating-slider .prev'),
                nextArrow: $('.wrapper-eating-slider .next')
            });
            $('.science-slider').slick({
                arrows: true,
                dots: false,
                fade: true,
                prevArrow: $('.wrapper-science-slider .prev'),
                nextArrow: $('.wrapper-science-slider .next')
            });
            $('.review-slider').slick({
                arrows: true,
                dots: false,
                prevArrow: $('.wrapper-review-slider .prev'),
                nextArrow: $('.wrapper-review-slider .next')
            });
        }
        else if (event.target.innerWidth > 990 && flag === 1) {
            flag = 0;
            $('.slider-eat').slick('unslick');
            $('.science-slider').slick('unslick');
            $('.review-slider').slick('unslick');
        }
    });

    var flagWow = 0;
    if (window.innerWidth <= 990 && flagWow === 0) {
        $('.science-list-item').each(function () {
            $(this).removeClass('wow');
        });
        $('.woman-bg').removeClass('js-parralax');
        $('.vantage-list-item .check').each(function () {
            $(this).removeClass('wow');
            $(this).css('visibility','visible');
        });
    }

    $(".go_form").on("touchend, click", function (e) {
        e.preventDefault();
        $('body,html').animate({scrollTop: $('.order-form').offset().top}, 400);
    });


});


var counterTop;
var topScrollDocument = window.pageYOffset;
var heightWindow = window.innerHeight;
var viewPort = 0;
var viewPortFifty = 0;
var flag = 0;
var flagBar = 0;
var flagBar2 = 0;
$(window).on('load', function () {
    var rellax = new Rellax('.js-parralax', {
        center: true
    });
    new WOW().init();

    counterTop = $('.counter').offset();
    $(window).on('scroll', function () {
        topScrollDocument = window.pageYOffset;
        viewPort = window.pageYOffset + heightWindow;
        if (viewPort - 20 > counterTop.top && flag === 0) {
            flag = 1;
            $('.counter').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).find('.number').data('count')
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).find('.number').text(Math.ceil(now));
                    }
                });
            });
        }

        viewPortFifty = window.pageYOffset + (heightWindow / 2);

        var offsetBar = $('.calculate-left .progress-bar').offset();
        if (viewPortFifty > offsetBar.top && flagBar === 0) {
            flagBar = 1;
            $('.calculate-left .line').addClass('full');
            $('.calculate-left .arrow-red').addClass('full');
        }
        var offsetBar2 = $('.calculate-right .progress-bar').offset();
        if (viewPortFifty > offsetBar2.top && flagBar2 === 0) {
            flagBar2 = 1;
            $('.calculate-right .line').addClass('full');
            $('.calculate-right .arrow-green').addClass('full');
        }
    });
});

