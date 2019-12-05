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

    $('.nav-bar__menu a:first-child').click(function() {
        $('html,body').animate({
            scrollTop: $('.banner').offset().top - $('.nav-bar').height()},
            'slow');
    });

    $('.nav-bar__menu a:nth-child(2)').click(function() {
        $('html,body').animate({
            scrollTop: $('.features').offset().top - $('.nav-bar').height()},
            'slow');
    });

    $('.nav-bar__menu a:nth-child(3)').click(function() {
        $('html,body').animate({
            scrollTop: $('.work').offset().top - $('.nav-bar').height()},
            'slow');
    });

    $('.nav-bar__menu a:nth-child(4)').click(function() {
        $('html,body').animate({
            scrollTop: $('.team').offset().top - $('.nav-bar').height()},
            'slow');
    });

    $('.nav-bar__menu a:last-child').click(function() {
        $('html,body').animate({
            scrollTop: $('.discuss').offset().top - $('.nav-bar').height()},
            'slow');
    });

    $(function () {
        var banner = $('.banner');
        var header = $('header');
        pos = banner.offset();

        $(window).scroll(function () {
            if ($(this).scrollTop() > pos.top + banner.height() - header.height()) {
                $(header).addClass('change'); 
            } else if ($(this).scrollTop() <= pos.top + banner.height() - header.height() && header.hasClass('change')) {
                $(header).removeClass('change');
            }
        });
    });

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

    var a = 0;
    $(window).scroll(function () {
        var pos = $('.funfact').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > pos) {
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
        }
    });

    var $grid = $('.grid').isotope({
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

    var wow = new WOW(
        {
            boxClass: 'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0,          // distance to the element when triggering the animation (default is 0)
            mobile: true,       // trigger animations on mobile devices (default is true)
            live: true,       // act on asynchronously loaded content (default is true)
            callback: function (box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null,    // optional scroll container selector, otherwise use window,
            resetAnimation: true,     // reset animation on end (default is true)
        }
    );
    wow.init();
    
    $("img.lazyload").lazyload();
});