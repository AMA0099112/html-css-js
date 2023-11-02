$(document).ready(function () {
    $("#doorclick").click(function () {
        $("#page").toggle();
    });
    $("#batsu").click(function () {
        $("#page").toggle();
    })

    $("#desk1").click(function () {
        $("#desk2").toggle();
        $("#desk1").toggle();
    });

    $("#desk2").click(function () {
        $("#desk1").toggle();
        $("#desk2").toggle();
    });

    $("#window").click(function () {
        $("#window").toggle();
        $("#window2").toggle();
        $("#window-cat").toggle();
    });

    $("#window2").click(function () {
        $("#window").toggle();
        $("#window2").toggle();
        $("#window-cat").toggle();
    });

    $("#cactus").click(function () {
        $("#cactus-cucumber").toggle();
        $("#cactus").toggle();
    });

    $("#cactus-cucumber").click(function () {
        $("#cactus-cucumber").toggle();
        $("#cactus").toggle();
    });

    const password = [3, 5, 2, 7, 9]; // 正確的密碼
    const selectedValues = [];

    $("#lock").click(function () {
        //if (selectedValues.length === password.length) {
        const isCorrect = JSON.stringify(selectedValues) === JSON.stringify(password);
        if (isCorrect) {

            // 執行成功後的操作
            window.location.href = 'last1.html';
        } else {
            // 重置输入的值
            selectedValues.length = 0;
        }

        console.log('Password:', password);
        console.log('Selected Values:', selectedValues);
    });

    $(".cell").click(function () {
        const cellValue = parseInt($(this).data('value'));
        selectedValues.push(cellValue);

    });
});