/*----------------------------------------------
-------------------Custom JS-------------------
-------------------Template: EasyLoan-----------
-------------------Author: OnushorIT------------
----------------------------------------------*/

(function($) {
    "use strict"; // Start of use strict

    // Preloader : Makes sure the whole site is loaded
    var preloader=$('#preloader div');
    preloader.fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); 
    // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow':'visible'});

    // Request Form Price Slider
    $("#bootstrap-slider").slider();
    $("#bootstrap-slider").on("slide", function(slideEvt) {
        $("#sliderValue").text(slideEvt.value);
    });    
    $('.slider').on("click", function() {
        var newvalue = $('.tooltip-inner').text();
        $("#sliderValue").text(newvalue);
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    });    

    // Counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Agents
    $('#media').carousel({
        pause: true,
        interval: false,
    });

})(jQuery); // End of use strict


