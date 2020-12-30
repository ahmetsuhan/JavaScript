//Window Object

let val;
var a=10;
function Abc(){
    return 0;
}
val=window;


/*
//alert
alert("Merhaba");
*/
/*
//prompt
var d=prompt("bir sayi giriniz:");
console.log("girdiğiniz sayi:"+d);
*/

/*
//confirm 
var confirm2 = confirm("Emin misiniz?");
console.log(confirm2);
if(confirm2){
    console.log("süper");
}
else{
    console.log("neden emin değilsin?");
}
if(confirm("doğru mu?"))
{
    console.log("evet doğru");
}
else{
    console.log("değil");
}
*/

/*
//scroll
val=window.scrollX;
val=window.scrollY;
val=scrollX;
val=scrollY;
*/

//location
val = location;
val=location.href;
val=location.hostname;
val=location.host;
val=location.protocol;
val=location.search;
//val=location.href="http://sadikturan.com"; // yeni bir sayfaya yönlendirir

//location.reload();//sayfayı sürekli yeniler
val=window.navigator;//tarayıcı ile ilgili yeni bir obje döndürür.
val=window.document;
val=document.getElementById("header");


console.log(val);