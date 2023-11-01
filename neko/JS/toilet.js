$(document).ready(function () {
    $("#on").click(function () {
        $("#off").toggle();
        $("#on").toggle();
        $("#dark").toggle();
        $("#off2").toggle();
        $("#mirror").toggle();
        $("#mirror2").toggle();
        $("#blackcat").toggle();
    });
    $("#off2").click(function () {
        $("#off").toggle();
        $("#on").toggle();
        $("#dark").toggle();
        $("#mirror").toggle();
        $("#mirror2").toggle();
        $("#blackcat").toggle();
    });
});

$(document).ready(function () {
    $("#toilet").click(function () {
        $("#toilet-sound").get(0).play();
    });
});

