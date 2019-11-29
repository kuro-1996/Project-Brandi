$(document).ready(function () {
    $("a").click(function () {
        $("a").removeClass("active");
        $(this).addClass("active");
    });
});

$(document).ready(function () {
    $('.button').click(function () {
        $('.button').removeClass('active');
        $(this).addClass('active');
    });
});

$(function () {
    var banner = $('.banner');
    var header = $('header');
    var anchor = $('.nav-bar_menu').children();
    var para = $('.nav-bar_brand p');
    pos = banner.offset();

    $(window).scroll(function () {
        if ($(this).scrollTop() > pos.top + banner.height() - header.height()) {
            $(header).addClass('change');
            $(para).css('opacity', '1');
            $(para).addClass('fix');
            $(anchor).addClass('fix');
            $(anchor).hover(function () {
                $(this).css('color', '#1B4F72 ');
            },
                function () {
                    $(this).css('color', '#ffffff');
                });
        } else if ($(this).scrollTop() <= pos.top + banner.height() - header.height() && header.hasClass('change')) {
            $(header).removeClass('change');
            $(para).removeClass('fix');
            $(anchor).removeClass('fix');
            $(anchor).hover(function () {
                $(this).css('color', '#32b0ee');
            },
                function () {
                    $(this).css('color', '#ffffff');

                });
        }
    });
});

$('.nav-bar_btn').click(function () {
    $(this).toggleClass('active');
    $('.nav-bar_menu').toggleClass('active');
    $('.btn_icon').toggleClass('active');
});
$('.nav-bar_menu').children().click(function () {
    $('.nav-bar_btn').removeClass('active');
    $('.nav-bar_menu').removeClass('active');
    $('.btn_icon').removeClass('active');
});

$(document).ready(function () {
    $('.content_slick').slick({
        dots: true,
        loop: true,
        infinite: true,
        arrow: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
    });
});

$(document).ready(function () {
    $('.slick-wrap').slick({
        dots: true,
        loop: true,
        arrow: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});

$(document).ready(function () {
    $('.features-content').slick({
        dots: true,
        loop: true,
        infinite: true,
        arrow: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});

var a = 0;
$(window).scroll(function () {
    var pos = $('.funfact').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > pos) {
        $('.item_counter').each(function () {
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
  // bind filter button click
  $('.filter-btn-group').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('.btn-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });

  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();