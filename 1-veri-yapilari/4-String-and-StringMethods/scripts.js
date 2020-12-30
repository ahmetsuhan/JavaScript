//Strings 
const firstName="Ahmet Suhan";
const lastName= "Oka";
const age=24;
let val;
let hobies="kitap,spor,sinema,yazılım";
//string concatenation (string birleştirme)
val = firstName+" "+lastName;
val="Ahmet Suhan";
val+=" Oka";
val="My name is"+firstName+" "+lastName+" and i am "+age+" Denizli'de yaşıyorum";

//string concat
val=firstName.concat(" ",lastName);

//string lenght
//val=val.length;

// string uppercase - lowercase
val=val.toUpperCase();
val=val.toLowerCase();

//val=val[0];

//val=val.indexOf("n");
//val=val.indexOf("suhan");

//string içerisinden istediğimiz yeri çıkarma
//val=val.substring(0,5);
//val=val.slice(0,5);
//val=val.slice(5); // 5. indexten sonuna kadar olan kısmı alır


//string search Methodları
//string replace
val=val.replace("ahmet","kemal");
//trim
val= " "+ firstName+" "+lastName+" ";
val=val.trim();// baştaki ve sondaki boşlukları alır.

//string split : ayırma
val=hobies.split(",");
var abc = "Ahmet suhan oka naber";
val=abc.split(" ");
console.log(val);
console.log(typeof(val));

