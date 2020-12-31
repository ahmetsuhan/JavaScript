/* 
$(document).ready(function(){
    console.log("ready!");

    $("selector").click(function(){
        console.log("Click Event run!");
    });
});
*/
$(function(){
    //console.log("document ready!");

    $("#p1").click(function(){
        alert("p1 click event");
    });
    $(".paragraph").click(function(){
        alert("paragraph click event");
        $(this).addClass("paragraphColor");//$(".paragraph").addClass classı .paragraph olan tüm classrı değiştirir!!!("paragraphColor");

    });
});