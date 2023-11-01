$(document).ready(function(){

    $("#makura").click(function(){
        $("#makura1").show();
        $("#makura").hide();
    })
    $("#makura1").click(function(){
        $("#makura").show();
        $("#makura1").hide();
    })
    $("#tv").click(function(){
        $("#page").show();
        $("#rickroll")[0].currentTime=0;
        $("#rickroll")[0].play();
    })
    $("#batsu").click(function(){
        $("#page").hide();
        $("#rickroll")[0].pause();
    })
    $("#calender").click(function(){
        $("#calender-y").show();
        $("#calender").hide();
    })
    $("#calender-y").click(function(){
        $("#calender-floor").show();
        $("#calender-y").hide();
    })
    $("#bu").click(function(){
        $("#bu").hide();
   
    })

    setTimeout(function() {
        $("#car").animate({ left: "50%" }, 1000);

         
    }, 5000);

})