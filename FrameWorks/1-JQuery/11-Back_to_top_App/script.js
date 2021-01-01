$(function () {

    $(window).scroll(function () {
        //console.log($(this).scrollTop()); --> 66.666
        if ($(window).scrollTop() > 66.666) {
            $(".backtotop").fadeIn();
        }
        else {
            $(".backtotop").fadeOut();
        }
    });

    $(".backtotop").click(function(){
        $("html,body").animate({
            scrollTop:0
        },
        700,);
        return false;
    });


});