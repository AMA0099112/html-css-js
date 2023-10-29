$(document).ready(function () {
    $("#on").click(function () {
        $("#off").toggle();
        $("#on").toggle();
        $("#dark").toggle();
    });
    $("#off").click(function () {
        $("#off").toggle();
        $("#on").toggle();
        $("#dark").toggle();
    });
});

$(document).ready(function () {
    $("#toilet").click(function () {
        $("#toilet-sound").get(0).play();
    });
});

