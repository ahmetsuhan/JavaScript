
/* 
    animate({css kodlari}, animationSpeed, callback func);
    each element was selected me can have multiple animation!!!
*/



var animationSpeed = 3000;
$(document).ready(function () {


    $("#animate").click(function () {
        let box = $("#box");
        box.animate({
            left: "200px",
            width: "300px",
            height: "50px"
        }, animationSpeed,
            function () {
                alert("This is callback func");
            });

        box.animate({
            fontSize: "50px",
            
        }, 3000);
    });



});
