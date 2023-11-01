$(document).ready(function () {
    $("#doorclick").click(function () {
        $("#page").toggle();
    });
    $("#batsu").click(function () {
        $("#page").toggle();
    })

    const password = [3, 5, 2, 7, 9]; // 替换为正确的密码
    const selectedValues = [];
    //const submitButton = $('#lock');
    /*
        $('#cell').on('click', function () {
            const cellValue = $(this).data('value');
            selectedValues.push(cellValue);
            $("submitButton").click(function () {
                if (selectedValues.length === password.length) {
    
                    const isCorrect = JSON.stringify(selectedValues) === JSON.stringify(password);
                    if (isCorrect) {
                        $("#good").toggle();
                        // 在这里执行成功后的操作
                    } else {
                        $("#bad").toggle();
                        // 重置输入的值
                        selectedValues.length = 0;
                    }
                }
    
            });*/



    /*
            if (selectedValues.length === expectedValues.length) {
                // 检查输入的数字是否与期望的数字序列相匹配
    
            }
            */
    //});
    // 点击提交按钮时进行密码验证


    $('#lock').click(function () {
        //if (selectedValues.length === password.length) {
        const isCorrect = JSON.stringify(selectedValues) === JSON.stringify(password);
        if (isCorrect) {
            $("#good").toggle();
            // 在这里执行成功后的操作
            window.location.href = 'text.html';
        } else {

            /*$("#dow").animate({
                rotate(deg: 30);  // 向右移动 100 像素
            }, 1000); // 动画持续时间 1000 毫秒 (1 秒)*/

            // 重置输入的值
            selectedValues.length = 0;
        }
        /*} else {
            $('#result').text('请继续输入数字');
        }*/
        console.log('Password:', password);
        console.log('Selected Values:', selectedValues);
    });

    $('#cell').click(function () {
        const cellValue = parseInt($(this).data('value'));
        selectedValues.push(cellValue);

    });




});