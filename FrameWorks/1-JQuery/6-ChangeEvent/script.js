/* 
        JQuery Events
        $(document).ready() --> 
        click() --> all elements
        dblclick() --> all elements
        change() --> Select, input elements
        mouseenter()
        mouseleave()
        mousedown()
        mouseup()
        hover()
        focus()
        blur()
        on()
*/ 
$(document).ready(function(){

    $(".control").change(function(){

        //console.log("Change event runs!");
        let a = $(this).val();
        console.log(a);
    });




});
