/* 
    JQuery Fading --> belli bir nesneyi gösreip kaybet için

    $(selector).fadeIn(speed,callback); -->görünmez elemanı görünür yaparken opacity ayarında 

    $(selector).fadeOut(speed,callback); --> görünür bir elemanı belirli bir süre içerisinde efektli bir şekilde kaybediyor. 

    $(selector).fadeToggle(speed,callback); -->Nesne görünür ise ona fadeout, görünmez ise fadeın efekti uyguluyor.

    $(selector).fadeTo(speed,callback); -->Bir nesnenin opacity değerini bir değerden bir diğer değere kadar götürüyor. Örn:Opacity:0 iken 0.7 kadar belirli bir sürede götürülebiliyor.
*/

/* 
    JQuery Sliding --> bu da belli bir nesneyi gösreip kaybet için

    $(selector).slideDown(speed,callback); -->
    $(selector).slideUp(speed,callback); --> 
    $(selector).slideToggle(speed,callback); -->
   
*/

/*
 /// Sliding
$(document).ready(function(){

    $("#slideUp").click(function(){
        $("p").slideUp(3000,function(){
            alert("slideUp");
        });
    });
    $("#slideDown").click(function(){
        $("p").slideDown("slow",function(){
            alert("slideDown");
        });
    });
    $("#slideToggle").click(function(){
        $("p").slideToggle("fast",function(){
            alert("slideToggle");
        });
    });

});
 */


var i = 0;
 $(document).ready(function(){

    $("#fadeIn").click(function(){
        $(".p2").fadeIn(3000,function(){
            alert("fadeIn");
        });
    });
    $("#fadeOut").click(function(){
        $(".p2").fadeOut("slow",function(){
            alert("FfadeOut");
        });
    });
    $("#fadeToggle").click(function(){
        $(".p2").fadeToggle("fast",function(){
            alert("fadeToggle");
        });
    });
    $("#fadeTo").click(function(){
       i++;
       if(i%2!=0)
            $(".p2").fadeTo("5000",0.4);
        else
        $(".p2").fadeTo("5000",1);
        i=i>5?0:i;
        console.log(i);
    });



 });
 