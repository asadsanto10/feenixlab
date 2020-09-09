// // nav menu scrool and active
let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");

let lastId;
let cur = [];
window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;
    mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});


// ---------Responsive-navbar-active-animation-----------
function test() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
        $('#navbarSupportedContent ul li').removeClass("active");
        $(this).addClass('active');
        var activeWidthNewAnimHeight = $(this).innerHeight();
        var activeWidthNewAnimWidth = $(this).innerWidth();
        var itemPosNewAnimTop = $(this).position();
        var itemPosNewAnimLeft = $(this).position();
        $(".hori-selector").css({
            "top": itemPosNewAnimTop.top + "px",
            "left": itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
    });
}
$(document).ready(function () {
    setTimeout(function () { test(); });
});
$(window).scroll('resize', function () {
    setTimeout(function () { test(); }, 600);
});
$(".navbar-toggler").click(function () {
    setTimeout(function () { test(); });
});



jQuery(document).ready(function ($) {
    // Initiate the wowjs animation library
    new WOW().init();

    // smooth scrool
    $("a[href^='#']").on('click', function (e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 600);
    });
});

$(document).ready(function () {
    // Header scroll class
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            $("#who .paralax1").addClass("up");
        } else {
            $("#who .paralax1").removeClass("up");
        }
    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            $("#who .paralax2").addClass("down");
        } else {
            $("#who .paralax2").removeClass("down");
        }
    });
    /*who area parallax*/


    /*=============silk slider=====================*/
    $('#silck_clint').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        //dots: true,
        prevArrow: false,
        nextArrow: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    /*=============silk slider=====================*/



    /*=================isotop==================*/

    $(window).on('load', function () {
        $grid.isotope('layout');

    });
    //install
    var $grid = $('.work_image').isotope({

    });
    //grid
    $grid.imagesLoaded().progress(function () {
        $grid.isotope('layout');
    });
    // filter items on button click
    $('.filter-button').on('click', 'ul li', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    $('#our_work ul li').click(function () {
        $('li').removeClass("active");
        $(this).addClass('active');
    });
 /*=================isotop==================*/


});

