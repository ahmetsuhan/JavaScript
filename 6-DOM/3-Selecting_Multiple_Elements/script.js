

// *** Single ELements
//      document.getElementById()
//      document.querySelector()


// *** Multiple Elements

/*
//class name :   document.getElementByClassName()
let val = document.getElementsByClassName("list-group-item");
//val = document.getElementsByClassName("list-group-item")[0];
//val = document.getElementsByClassName("list-group-item")[2];

//val = val[2];
val[1].style.color="blue";
val[1].style.fontSize="50px";
val[2].textContent="new item";
for(let i = 0 ; i<val.length;i++){
    val[i].style.color="red";
    val[i].textContent="new item";
}
*/

/*
// document.getElementByTagName()

let val = document.getElementsByTagName("li");
val=document.getElementsByTagName("a");
val=document.getElementById("task-list");
val=val.getElementsByTagName("a");
*/


//document.querySelectorAll()
let val = document.querySelectorAll("li");
/*
val.forEach(function(item,index){
    console.log(item);
    item.style.color="green";
    item.textContent=`${index}-"hello`;
});
*/
val=document.querySelectorAll("li:nth-child(even)");
val.forEach(function(item){
item.style.backgroundColor="#ccc";
});
console.log(val);