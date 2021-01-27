﻿//Similar Product Owl Js
$(document).ready(function () {
    $("#productSimilar").owlCarousel({
        margin: 30,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        loop: true,
        center: false,
        mouseDrag: true,
        nav: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            720: {
                items: 2
            },
            960: {
                items: 2
            },
            1140: {
                items: 3
            }
        },
        navText: ["<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>", "<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"]
    });
});
