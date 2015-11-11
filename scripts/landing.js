     // #5
 var animatePoints = function() {
     var revealPoint = function() {
         // #7
         $(this).css({
             opacity: 1,
             transform: 'scaleX(1) translateY(0)'
         });
    };  
        // #6
     $.each($('.point'), revealPoint);
 };

$(window).load(function() {
     if ($(window).height() > 950) {
         animatePoints();
     }
var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;

     // #3
     $(window).scroll(function(event) {
     // #4
         if ($(window).scrollTop() >= scrollDistance) {
             animatePoints();
         }
     });
 });