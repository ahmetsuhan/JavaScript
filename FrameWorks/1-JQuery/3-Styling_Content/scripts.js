 //JS 
 let c = document.getElementById("header").style.color = "red";

 //JQuery 
 $("#header").css("color", "gold");
 $("li a").css("text-decoration", "none");

 //all a element in HTML page 
 $("a").css("color", "green");

 //multiple css adding with JQuery
 var styles = {
     color: "red",
     fontSize:"50px",
     border:"1px solid red",
     transition:"all 0.3s ease 2ms",
 };
$("a").css(styles);

$("a").css({
        display:"block",
        color:"#f1f1f1",
        textDecoration:"underline"
});

//js multiple css adding
var lists = document.querySelectorAll("li");
for(let i = 0 ; i<lists.length;i++)
{
        lists[i].style.color = "aqua";
}
lists.forEach(function(item){
        item.style.border="1px solid gold";
        item.style.padding="5px 5px";
});


