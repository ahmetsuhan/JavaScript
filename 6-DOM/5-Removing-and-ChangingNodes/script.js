const taskList=document.querySelector("#task-list");

//removing Element
//taskList.remove();
//taskList.childNodes[1].remove();
//taskList.children[0].remove();
//taskList.removeChild(taskList.children[0]);

// *** removing attribute
//taskList.children[2].removeAttribute("class");
/*
for(let i = 0 ; i<taskList.children.length;i++){
    taskList.children[i].removeAttribute("class");
}

console.log(taskList);

*/

// *** Replacing Element
//const cardHeader= document.querySelector(".card-header");

/*
// create element
const h2=document.createElement("h2");
h2.setAttribute("class","card-header");
h2.appendChild(document.createTextNode("My list"));
const parent = document.querySelector(".card");
parent.replaceChild(h2,cardHeader);
*/


// ** Classes
let val;
let link = taskList.children[0].children[0];
//val = link.className;
//val = link.classList;
//val = link.classList[0];
//val = link.classList[1];

link.classList.add("new");
link.classList.remove("new");

// Attribute
val=link.getAttribute("data-id");
val=link.getAttribute("href");
val=link.setAttribute("href","http://www.google.com");

val=link.hasAttribute("href");
val=link.hasAttribute("data-val");

console.log(val);
