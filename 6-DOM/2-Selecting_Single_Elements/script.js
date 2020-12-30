/// Single Elements
//document.getElementById("");

/*
let val;
val=document.getElementById("header");
val=document.getElementById("header").id;
val=document.getElementById("header").className;


val=document.getElementById("header");
//val=val.id;

val.style.fontSize="45px";
val.style.color="red";
val.style.fontWeight="bold";
//val.style.display="none";

document.getElementById("header").innerText="my to do app";
document.getElementById("header").innerHtml="<b>my to do app</b>";
console.log(val);
*/

//Multiple Elements
//document.querySelector()

console.log(document.querySelector("#header"));
console.log(document.querySelector(".card")); // classı card olan ilk elemanı seçer
console.log(document.querySelector("h1"));
console.log(document.querySelector("div"));
document.querySelector("li").style.color="red";
document.querySelector("li:last-child").style.color="blue";
document.querySelector("li:nth-child(2)").style.color="yellow";
document.querySelector("li:nth-child(3)").textContent="task item";

document.querySelector("li").className="list-group-item list-group-item-primary";
document.querySelector("li").classList.add("active");


