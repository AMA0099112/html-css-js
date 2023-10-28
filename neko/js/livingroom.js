$(document).ready(function(){

    $("#makura").click(function(){
        $("#makura1").css("display", "block");
        $("#makura").css("display", "none");
    })
    $("#makura1").click(function(){
        $("#makura").css("display", "block");
        $("#makura1").css("display", "none");
    })
    $("#tv").click(function(){
        $("#page").css("display", "block");
        $("#rickroll")[0].currentTime=0;
        $("#rickroll")[0].play();
    })
    $("#batsu").click(function(){
        $("#page").css("display", "none");
        $("#rickroll")[0].pause();
    })

})