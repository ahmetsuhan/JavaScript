
// LOCAL STORAGE --> eşleştirilen url deki bilgileri tarayıcı kapansa bile tutar

//set item
const firstName = localStorage.setItem("firstName","Ahmet Suhan");
const lastName = localStorage.setItem("lastName","Oka");
let hobbies = ["sinema","araba","gezmek"];
let val ;

// ** get item
//val = localStorage.getItem("firstName");
//console.log(val);

// ** remove item
//localStorage.removeItem("firstName");


// ** clear
//localStorage.clear();

// ** set aray to storage
localStorage.setItem("hobbies",JSON.stringify(hobbies));

// ** get array to storage
let getHobbies = JSON.parse(localStorage.getItem("hobbies"));
console.log(getHobbies);
console.log(getHobbies[0]);
console.log(localStorage);



/*
//SESSION STORAGE --> Tarayıcı açık kaldığı sürece bilgileri tutar
const city = sessionStorage.setItem("city","Denizli");
const country = sessionStorage.setItem("country","Turkey");

console.log(sessionStorage);
*/

