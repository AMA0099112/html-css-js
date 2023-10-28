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

})