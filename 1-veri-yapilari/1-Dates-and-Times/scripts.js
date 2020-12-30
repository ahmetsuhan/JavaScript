// Date Object

let date=new Date();
console.log("date:"+date);
console.log("date degiskeninin type:"+typeof(date));
let birthday = new Date(1997,0,8);
//set methodları
//date.setFullYear(2050);
date.setMonth(5);
date.setDate(20);
date.setHours(10);
date.setMinutes(7);
//get methodlari
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear()); //2050 yazacak :D
console.log(date.getHours());
console.log(date.getMonth());
console.log(date.getMinutes());
console.log(date.getSeconds());

console.log(date.getFullYear()-birthday.getFullYear());