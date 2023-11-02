$(document).ready(function () {
    $("#note-b").click(function () {
        $("#page").toggle();
    });

    $("#batsu").click(function () {
        $("#page").toggle();
    });

    $("#aircon-off").click(function () {
        $("#aircon-on").toggle();
        $("#cat-cold").animate({ top: "30%" }, 1000);
    });

    $("#aircon-on").click(function () {
        $("#aircon-on").toggle();
        $("#cat-cold").animate({ top: "90%" }, 1000);
    });

    $("#chair1").click(function () {
        $("#chair1").toggle();
        $("#chair2").toggle();
    });

    $("#chair2").click(function () {
        $("#chair2").toggle();
        $("#chair3").toggle();
        $("#car3").toggle();
    });

    $("#chair3").click(function () {
        $("#chair3").toggle();
        $("#chair1").toggle();
        $("#car3").toggle();
    });

    $("#cucumber").click(function () {
        $("#cucumber").addClass('rotate');
        setTimeout(function () {
            $("#cucumber").removeClass('rotate');
        }, 1000); //持續時間1秒 
        setTimeout(function () {
            $("#apple").animate({ top: "60%" }, 1000);
        }, 1000); //持續時間1秒 
        setTimeout(function () {
            $("#apple-d").show();
            $("#apple").hide();
        }, 2000);
    });

    $("#tail").click(function () {
        $("#cat-stand").toggle();
    });

    $("#cat-stand").click(function () {
        $("#cat-stand").toggle();
    });

});