$(document).ready(function(){

    $("#refregi").hover(function(){
        $("#open-refregi").show();
    }, function(){
        $("#open-refregi").hide();
    });
    
    $("#Faucet").click(function(){
        $("#water").show();
        setTimeout(function() {
            $("#water-more").show();
        }, 3000);
        setTimeout(function() {
            $("#car").show();
            $("#car").animate({bottom: "35%" }, 1000
            );
        }, 3000);

    });



})