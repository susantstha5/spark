$(document).ready(function(){



    $('.product-carousel').owlCarousel({
        loop:true,
        margin:0,
        dots:false,
        nav:true,
        items:1,
        autoplay:false,
        smartSpeed:2000,
        // dots:true,
        navText : ['<i class="fas fa-caret-left fa-1x"></i>','<i class="fas fa-caret-right fa-1x"></i>'],
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    });
    $('.product-description-slider').owlCarousel({
        loop:true,
        margin:0,
        dots:false,
        nav:true,
        items:1,
        autoplay:false,
        smartSpeed:2000,
        navText : ["<i class=\"fas fa-chevron-right\"></i>","<i class=\"fas fa-chevron-left\"></i>"],
        responsive:{
            0:{
                items:1
            }
        }
    });

    

    $('.owl-carousel').owlCarousel({
        loop:true,
        // margin:10,
        nav:true,
        items:4,
        pagination: false,
        autoplay:false,
        smartSpeed:1000,
        navText : ["<i class='fas fa-chevron-left fa-1x'></i>","<i class='fas fa-chevron-right fa-1x'></i>"],
        dots:true,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });



});
