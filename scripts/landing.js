 var pointsArray = document.getElementsByClassName('point');
 
 var animatePoints = function(points) {
    
    var revealPoint = function(i) {
     for (i=0; i < points.length; i++) {
        points[i].style.opacity = 1;
        points[i].style.transform = "scaleX(1) translateY(0)";
        points[i].style.msTransform = "scaleX(1) translateY(0)";
        points[i].style.WebkitTransform = "scaleX(1) translateY(0)"; 
        points[i].style.transition = "all 0.75s steps(20, end)";
         
     }
        
    };
    
    revealPoint(0);
    revealPoint(1);
    revealPoint(2);

 };

window.onload = function() {
         if (window.innerHeight > 950) {
         animatePoints(pointsArray);
     }
     var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

     window.addEventListener("scroll", function(event) {
         if (document.body.scrollTop >= scrollDistance) {
             animatePoints(pointsArray);   
         }
     });
 } 