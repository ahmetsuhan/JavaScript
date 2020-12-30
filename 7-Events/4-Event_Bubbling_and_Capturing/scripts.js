/* 

        //event Bubbling

const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const card= document.querySelector(".card");
const container = document.querySelector(".container");
form.addEventListener("click",function(event){
    console.log("Form");
    event.stopPropagation();//Event bubbling i önlemek için
});
cardBody.addEventListener("click",function(event){
    console.log("Card Body");
    event.stopPropagation();//Event bubbling i önlemek için
});
card.addEventListener("click",function(event){
    console.log("card");
    event.stopPropagation();//Event bubbling i önlemek için
});
container.addEventListener("click",function(event){
    console.log("Container");
    event.stopPropagation();//Event bubbling i önlemek için
});

*/

/*
// Event Capturing //dıştan içe doğru event uygulanır
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const card= document.querySelector(".card");
const container = document.querySelector(".container");

form.addEventListener("click",function(event){
    console.log("Form");
},true);
cardBody.addEventListener("click",function(event){
    console.log("Card Body");
},true);
card.addEventListener("click",function(event){
    console.log("card");
},true);
container.addEventListener("click",function(event){
    console.log("Container");
},true);

*/


//sayfada bulunan her fas-fa-times iconunu seçip olay ekleyecem
    /*
    const deleItems=document.querySelectorAll(".fa-times");
    deleItems.forEach(function(item){
        item.addEventListener("click",function(e){
            console.log(e.target);
        });
    });
    */
const ul = document.querySelector("ul");
ul.addEventListener("click",function(e){
    if(e.target.className=="fas fa-times"){
        console.log("e.target:");
        console.log(e.target);
        console.log("e.target.parentElement: ");
        console.log(e.target.parentElement);
        console.log("e.target.parentElement.parentElement :");
        console.log(e.target.parentElement.parentElement);

        e.target.parentElement.parentElement.remove();
        e.preventDefault();
    }
    
});