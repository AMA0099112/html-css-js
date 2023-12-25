$(document).ready(function () {
    //查詢打進去的值
    $("#search").on("keyup", function () {
        //抓搜尋的關鍵字
        var value = $(this).val().toLowerCase();//大小寫都可用
        //抓網頁裡有沒有符合
        $(".block").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    //test
    const firebaseConfig = {
        apiKey: "AIzaSyB30VfIVqhTJBbhBwAmedBFd18J7xtapqo",
        authDomain: "final-37839.firebaseapp.com",
        databaseURL: "https://final-37839-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "final-37839",
        storageBucket: "final-37839.appspot.com",
        messagingSenderId: "16625538397",
        appId: "1:16625538397:web:7881b1e4b9d2ddf0e5c4b4",
        measurementId: "G-JT3H0YMPMC"
    };

    firebase.initializeApp(firebaseConfig);

    // 获取实时数据库引用
    const database = firebase.database();

    // 获取表单和留言列表
    const messageForm = $('#message-form');
    const messagesList = $('#messages');

    // 监听留言表单提交事件
    messageForm.submit(function (e) {
        e.preventDefault();

        // 获取输入的姓名和留言
        const name = $('#name').val();
        const message = $('#message').val();

        // 将留言添加到数据库
        database.ref('messages').push({
            name: name,
            message: message
        });

        // 清空表单
        messageForm[0].reset();
    });

    // 监听实时数据库变化，更新留言列表
    database.ref('messages').on('value', function (snapshot) {
        messagesList.empty(); // 清空留言列表

        // 遍历每条留言
        snapshot.forEach(function (childSnapshot) {
            const messageData = childSnapshot.val();
            const li = $('<li>').text(`${messageData.name}: ${messageData.message}`);
            messagesList.append(li);
        });
    });

});

