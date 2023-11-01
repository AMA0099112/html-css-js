$(document).ready(function(){

    setTimeout(function() {
        $("#opendoor").fadeIn(1000);
        $("#door").fadeOut(1000);
    }, 1000);

    setTimeout(function() {
        $("#opendoor").fadeOut(1000);
    }, 3000);

    setTimeout(function() {
        $("#asasyoku").show();
        $("#asasyoku").animate({ top: "20%" }, 1000);
    }, 4000);

    setTimeout(function() {
        $("#hanamaru").show();
        $("#hanamaru").animate({ top: "15%" }, 1000);
        $("#hanamaru").animate({
            transform: 'rotate(360deg)'
          }, 1000);
     
    }, 5000);

    setTimeout(function() {
        $("#omedetou").show();
        $("#omedetou").animate({ top: "45%" }, 1000);
    }, 6000);

    setTimeout(function() {
        $("#home").show();
        $("#map").show();
        $("#home").animate({ top: "75%" }, 1000);
        $("#map").animate({ top: "75%" }, 1000);
    }, 6000);


})