//Ketyboard Events

const input= document.querySelector("#txtTaskName");

//input.addEventListener("keydown",eventHandler);
//input.addEventListener("keyup",eventHandler);
//input.addEventListener("keypress",eventHandler);
//input.addEventListener("focus",eventHandler);
//input.addEventListener("blur",eventHandler);
//input.addEventListener("cut",eventHandler);
//input.addEventListener("paste",eventHandler);
//input.addEventListener("select",eventHandler);



const form = document.querySelector("form");
form.addEventListener("submit",eventHandler);



const select = document.querySelector("#select");
select.addEventListener("change",eventHandler);







function eventHandler(event){
    console.log(`event type : ${event.type}`);
    //console.log("key code:"+event.keyCode);
    console.log("value : "+event.target.value);

   // event.target.style.backgroundColor="red"; // focus olduğunda yapılabilir


   event.preventDefault();
}