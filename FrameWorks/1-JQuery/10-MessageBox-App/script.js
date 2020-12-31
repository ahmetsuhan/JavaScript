$(document).ready(function(){

    $("#header").click(function(){
        $("#content").toggle();
    });

    $("#close").click(function(){
        $("#messageBox").hide("2000",function(){
            $("#btn").fadeIn(3000);
        });
    });

    $("#btn").click(function(){
        $(this).css("display","none");
        $("#messageBox").fadeIn(3000);
    });

    


});