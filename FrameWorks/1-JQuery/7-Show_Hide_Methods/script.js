/* 
    JQUery Effects
    Hide/Show/toggle --> $(selector).show(speed,callback) : speed:slow,fast or ms 
    Fade
    Slide
    Animate
*/
$(document).ready(function(){

    $("#hide").click(function(){
        $("p").hide();
    });
    $("#show").click(function(){
        $("p").show();
    });
    $("#toggle").click(function(){
        $("p").toggle();
    });

    ///
    $("#hide2").click(function(){
        $(".p2").hide(3000,function(){
            console.log("callback runs!");
            $(".p2").css("color","yellow");
        });
    });
    $("#show2").click(function(){
        $(".p2").show("slow");
        $(".p2").css("color","red");
    
    });
    $("#toggle2").click(function(){
        $(".p2").toggle("fast",function(){
            alert("This is callback func looks like an alert box!");
        });
        
    });

});