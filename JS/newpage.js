$(document).ready(function(){

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
                'box-shadow': '20px 20px 2px #cf9647'}).fadeIn();
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
            'box-shadow': '20px 20px 2px #b0d5a9'}).fadeIn();
      });
    });

    //Test
    $('.thumbnail').click(function () {
      var image = $(this).data('image');
      var title = $(this).data('title');
      var description = $(this).data('description');
      var additional = $(this).data('additional');

      $('#image1').attr('src', image);
      $('#content1').html(`
        <h2>${title}</h2>
        <p>${description}</p>
        <p class="additionalContent">${additional}</p>
      `);
      $("#left").hide();
      $("#left").css('left', '-100%');
      $("#left").show();
      $("#left").animate({ left: "0%" }, 1500);
    })

})