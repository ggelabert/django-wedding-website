/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        window.history.pushState({}, document.title, $anchor.attr('href'));
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    // (specifically turns the links orange)
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    $('#language_es').on('click', function () {
        console.log('language es');
        $('#language').val('es');
        $('#language_form').submit();
    });

    $('#language_ca').on('click', function () {
        console.log('language ca');
        $('#language').val('ca');
        $('#language_form').submit();
    });

    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date();
    const secondDate = new Date(2020, 10, 3);

    const diffDays = Math.round(Math.abs((secondDate - firstDate) / oneDay));

    $('#dias_restantes').text(diffDays);


})(jQuery); // End of use strict
