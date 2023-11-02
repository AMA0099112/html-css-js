$(document).ready(function () {
    $("#menu").click(function () {
        $("#block").animate({
            left: '-1%'
        }, 1000);
        $("#noblock").show();
    });
    $("#noblock").click(function () {
        $("#block").animate({
            left: '-20%'
        }, 1000);
        $("#noblock").hide();
    });




});