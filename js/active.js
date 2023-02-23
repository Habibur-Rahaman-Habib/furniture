// header slider
$(document).ready(function () {
    $('.our-slider').owlCarousel({
        stagePadding: 170,
        margin: 30,
        items: 1,
        autoplay: false,
        autoplayTimeout: 6000,
        nav: true,
        loop: true,
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 0,
                nav: false,
                dots: false,

            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: true,
                loop: false,
            }
        }
    });
});

// tips slider
$(document).ready(function () {
    $('.ProductSlider').owlCarousel({
        items: 3,
        margin: 25,
        autoplay: false,
        autoplayTimeout: 6000,
        nav: true,
        loop: true,
        responsiveClass: true,
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: false,

            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false,
            }
        }

    });
});

// inspiration
$('.ins').owlCarousel({
    center: true,
    items: 1,
    loop: false,
    stagePadding: 170,
    margin: 20,
    nav: true,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,

        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: true,
            loop: false,
        }
    }
});