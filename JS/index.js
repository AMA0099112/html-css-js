/*$(document).ready(function () {
    $("#menu").click(function () {
        $("#allnav2").toggle();
    });
    $(document).on('click', function (event) {

        if (!$("#allnav2").is(event.target) && !$("#menu").is(event.target)) {
            navContainer.hide();
        }
    });

});*/
$(document).ready(function () {
    // 点击导航图标显示/隐藏导航列
    $('#menuimg').on('click', function () {
        $('#RWDnav').toggle();
    });

    // 点击页面其他地方隐藏导航列
    $(document).on('click', function (event) {
        var navContainer = $('#RWDnav');
        var navIcon = $('#menuimg');

        // 判断点击事件的目标元素是否在导航列以外
        if (!navContainer.is(event.target) && !navIcon.is(event.target) && navContainer.has(event.target).length === 0) {
            navContainer.hide();
        }
    });

    document.querySelector('.background-text').addEventListener('wheel', function (e) {
        var element = this;
        // 计算滚动的距离
        var delta = e.deltaY || e.detail || e.wheelDelta;

        // 如果已经滚动到底部，阻止默认滚动行为，继续整个页面的滚动
        if (element.scrollHeight - element.clientHeight <= element.scrollTop && delta > 0) {
            e.preventDefault();
            window.scrollBy(0, delta);
        } else if (element.scrollTop === 0 && delta < 0) {
            // 如果已经滚动到顶部，阻止默认滚动行为，继续整个页面的滚动
            e.preventDefault();
            window.scrollBy(0, delta);
        }
    });
});






$(document).ready(function () {

    const introduceContent = $('.introduce');
    // 添加點擊事件處理器
    $("#chen").click(function () {

        $("#introduce").fadeOut(function () {
            $("#introduce").html(`
              <p>姓名：陳怡蒨</p>
              <p>性別：女</p>
              <p>專長：彈吉他</p>
              <p>心得感想：肝悲</p>
            `).css({
                'background-color': '#fff1c5',
                'box-shadow': '20px 20px 2px #cf9647'
            }).fadeIn();
        });
        // 更改 introduce 內容，例如：這裡假設為陳先生的介紹
    });

    $("#weng").click(function () {
        // 更改 introduce 內容，例如：這裡假設為翁先生的介紹
        $("#introduce").fadeOut(function () {
            $("#introduce").html(`
          <p>姓名：翁靖瑜</p>
          <p>性別：女</p>
          <p>專長：睡覺</p>
          <p>心得感想：ぴえん</p>
        `).css({
                'background-color': '#ddfccd',
                'box-shadow': '20px 20px 2px #b0d5a9'
            }).fadeIn();
        });
    });


    //Test
    $(window).scroll(function () {
        // 获取触发动画的元素
        var animatedElement = $('#cattt');

        // 获取元素的位置信息
        var rect = animatedElement[0].getBoundingClientRect();
        var windowHeight = $(window).height();

        // 如果元素底边进入视口，则添加动画类
        if (rect.bottom <= windowHeight) {
            /*    $("#left").hide();
                $("#left").css('left', '-100%');
                $("#left").show();
                $("#left").animate({ left: "0%" }, 1500);*/
            if (!animatedElement.hasClass('animating') && !animatedElement.hasClass('already')) {
                setTimeout(function () {
                    $("#ai").click();
                }, 100);
                $('#cattt').addClass('already');
            }
        }
    });
    $('.thumbnail').click(function () {
        var animatedElement = $('#cattt');
        var image = $(this).data('image');
        var title = $(this).data('title');
        var description = $(this).data('description');
        var additional = $(this).data('additional');

        if (!animatedElement.hasClass('animating')) {

            $('#cattt').addClass('animating');

            $("#left").hide();
            $("#left").css('left', '-100%');
            $("#left").show();
            $("#left").animate({ left: "0%" }, 1500, function () {
                // 動畫結束後移除class
                $('#cattt').removeClass('animating');
            });

            $('#image1').attr('src', image);
            $('#content1').html(`
            <h2>${title}</h2>
            <p>${description}</p>
            <p class="additionalContent">${additional}</p>
          `);


        }

    })

    $(window).scroll(function () {
        // 获取触发动画的元素
        var animatedElement = $('#footer');

        // 获取元素的位置信息
        var rect = animatedElement[0].getBoundingClientRect();
        var windowHeight = $(window).height();

        // 如果元素底边进入视口，则添加动画类
        if (rect.bottom <= windowHeight) {
            $("#down").fadeOut();
        }
        else {
            $("#down").fadeIn();
        }

    });




})