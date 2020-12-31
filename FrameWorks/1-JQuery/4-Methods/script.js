/* 
        // JQuery Methods
    css() 
    text()
    val()
    attr()
    html()
    addClass()
    removeClass()
    toggleClass()
    show() --> herhangi bir elemnaı ekranda gösterir
    hide() --> herhangi bir elemanı ekranda saklar
*/

var a = $("h1").text();
console.log(a);
a=$("ul").text();
console.log(a);

a=$("ul li").text();
console.log(a);

$("h1").text("JavaScript");


console.log("*****************************");
a= $("input").val();
console.log(a);
$("input").val("soyad");

console.log("*****************************");
function adSoyad(){
    var ad = $("#ad").val();
    var soyad = $("#soyad").val();
    console.log(`adınız:${ad} Soyad: ${soyad}`);
    $("#ad").addClass("highlight");
    $("#soyad").removeClass("green");


    $("#btnKaydet").toggleClass("toggleClass");

}

console.log("*****************************");
$("img").attr("width","400");
