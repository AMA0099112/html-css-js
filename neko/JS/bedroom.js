$(document).ready(function () {
    $("#note-b").click(function () {
        $("#page").toggle();
    });
    $("#batsu").click(function () {
        $("#page").toggle();
    })
    $("#aircon-off").click(function () {
        $("#aircon-on").toggle();
    })
    $("#aircon-on").click(function () {
        $("#aircon-on").toggle();
    })
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
});