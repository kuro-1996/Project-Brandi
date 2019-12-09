$(document).ready(function () {
    $('.nav-bar__menu').children().click(function () {
        $('.nav-bar__menu').children().removeClass('active');
        $('.nav-bar__btn').removeClass('active');
        $(this).addClass('active');
    });

    $('.button').click(function () {
        $('.button').removeClass('active');
        $(this).addClass('active');
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.scroll-top').fadeIn('500', 'swing');
        } else {
            $('.scroll-top').fadeOut('500', 'swing');
        }
    });

    $('.scroll-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });


    $('.nav-bar__menu a:first-child').click(function () {
        $('html,body').animate({
            scrollTop: $('.banner').offset().top - $('.nav-bar').height()
        },
            'slow');
    });

    $('.nav-bar__menu a:nth-child(2)').click(function () {
        $('html,body').animate({
            scrollTop: $('.features').offset().top - $('.nav-bar').height()
        },
            'slow');
    });

    $('.nav-bar__menu a:nth-child(3)').click(function () {
        $('html,body').animate({
            scrollTop: $('.work').offset().top - $('.nav-bar').height()
        },
            'slow');
    });

    $('.nav-bar__menu a:nth-child(4)').click(function () {
        $('html,body').animate({
            scrollTop: $('.team').offset().top - $('.nav-bar').height()
        },
            'slow');
    });

    $('.nav-bar__menu a:last-child').click(function () {
        $('html,body').animate({
            scrollTop: $('.discuss').offset().top - $('.nav-bar').height()
        },
            'slow');
    });

    a = 0;
    $(window).scroll(function () {
        if ($(this).scrollTop() > $('.banner').offset().top + $('.banner').height() - $('header').height()) {
            $('header').addClass('change');
        } else if ($(this).scrollTop() <= $('.banner').offset().top + $('.banner').height() - $('header').height()) {
            $('header').removeClass('change');
        }
        var arr = [$('.features'), $('.work'), $('.team'), $('.discuss')]
        arr.forEach(el => {
            if ($(this).scrollTop() > el.offset().top - 350) {
                el.addClass('change');
            }
        });
        if (a == 0 && $(this).scrollTop() > $('.funfact').offset().top - 450) {
            $('.funfact').addClass('change');
            $('.item__counter').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },
                    {
                        duration: 8000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        }
                    });
            });
            a = 1;
        };
        if ($(this).scrollTop() > $('footer').offset().top - 400) {
            $('footer').addClass('change');
        }
    });
    //add animation when scroll

    $('.nav-bar__btn').click(function () {
        $(this).toggleClass('active');
    });

    $('.team-wrap__slick').slick({
        dots: true,
        loop: true,
        infinite: true,
        prevArrow: null,
        nextArrow: null,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
    });

    $('.slick-wrap').slick({
        dots: true,
        loop: true,
        prevArrow: null,
        nextArrow: null,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.features-content').slick({
        dots: true,
        loop: true,
        infinite: true,
        prevArrow: null,
        nextArrow: null,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    var $grid = $('.work-content__grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });

    $('.filter-btn-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    $('.btn-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });
});