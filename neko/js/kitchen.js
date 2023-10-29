$(document).ready(function(){

    $("#refregi").hover(function(){
        $("#open-refregi").show();
    }, function(){
        $("#open-refregi").hide();
    });
    
    $("#Faucet").click(function(){
        $("#water").show();
        setTimeout(function() {
            // 这里放置你希望延迟执行的代码
            $("#water-more").show();
        }, 3000);
    });



})