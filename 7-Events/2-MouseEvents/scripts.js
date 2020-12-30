// Mouse Events

const btn = document.querySelector("#btnDeleteAll");
const ul = document.querySelector("#task-list");

/*
//click
btn.addEventListener("click",EventHandler);
function EventHandler(event){
    console.log(`${event.type}`);
}
ul.addEventListener("click",EventHandler);
*/
/*
//double Click
btn.addEventListener("dblclick",DoubleClick);
function DoubleClick(event){
    console.log(`${event.type}`);
}
*/
/*
//Mouse down
btn.addEventListener("mousedown",function EventHandler(event){
    console.log(`${event.type}`);
});
//Mouse up
btn.addEventListener("mouseup",function EventHandler(event){
    console.log(`${event.type}`);
});

//Mouse Enter
ul.addEventListener("mouseenter",function EventHandler(event){
    console.log(`${event.type}`);
});

//Mouse leave
ul.addEventListener("mouseleave",function EventHandler(event){
    console.log(`${event.type}`);
});

//Mouse Over
ul.addEventListener("mouseover",function EventHandler(event){
    console.log(`${event.type}`);
});
//Mouse out
ul.addEventListener("mouseout",function EventHandler(event){
    console.log(`${event.type}`);
});
*/

//Mouse move 
ul.addEventListener("mousemove",eventHandler);
const h5 = document.querySelector("h5");
ul.addEventListener("mouseleave",function(e){
    h5.textContent="Task List";
});
function eventHandler(e){
    console.log(`${e.type}`);

    h5.textContent=`mouse X: ${e.offsetX} Mouse Y : ${e.offsetY}`;
    
}