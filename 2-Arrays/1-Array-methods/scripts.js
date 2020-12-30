//Array

let names =["ahmet","suhan","oka"];
let years=[2018,2025,2019,2020];
let mix=["ahmet","suhan",1997,null,undefined,["sinema","kitap"]];

console.log(names);
console.log(years);
console.log(mix);


// get a array item
console.log(names[0]);

//set array item
names[0]="Ömer";
console.log(names);
//add array an item
names[names.length]="Ada";
console.log(names);

years.push(1999); // 1999u dizinin son elemanı olarak atar
console.log(years); 
years.unshift(1111);//dizinin en başına 1111 ekler
console.log(years);


//remove item
years.pop();//dizinin son elemanını siler
console.log(years);
years.shift();//dizinin ilk elemanını diziden siler.


//indexOf
let index = names.indexOf("Ada");
console.log("index:"+index);

//dizi elemanlarını ter çevirme 
console.log("reverse den önce:"+names);
names.reverse();
console.log("reverse ten sonra:"+names);

//dizi sıralama 
console.log("years sort olmadan:"+years);
years.sort();//küçükten büyüğe sıralar //string ise alfabetik olarak sıralar
console.log("years sort olduktan sonra:"+years);

//concat
let val =years.concat(names);
console.log(val);

//splice(başlangıç indexi,silinecek eleman sayısı,eklenecek eleman)
names.splice(0,3,"mahir");//0. indexten itibaren 3elemanı siler yerine "mahir" ekler
console.log(names);
names.splice(0,0,"ahmet","suhan");//0. indexten başlar 0 eleman siler yerine "ahmet" ve "suhan elemanlarını ekler"
console.log(names);
//splice(0,1) --> 0.indexten itibaren bir elemanı sil demek. Eleman eklemek zorunda değiliz.!!!
let denemeArray = [1,2,3,4,5,6,7,8,9,0,"Ahmet","Suhan"];
console.log("denemeArray--->"+denemeArray);
denemeArray.splice(0,5);//0. ,ndexten itibaren 5 eleman sildi.
console.log(denemeArray);


//Find
function Over18(year){
    let age = 2020-year;
    return age>=18?true:false;
}
let agh= years.find(Over18); //find methodu içerisine bir function gönder. Koşulu sağlayan ilk değer döndürülür.
console.log(agh);


//Filter içerisine bir function alır. Koşulu sağlayan değerlerin hepsini döndürür
function IsGreaterThanZero(num){
    return num>0?true:false;
}
let values = [1,23,3,4,5,6,8,52];
let result= values.filter(IsGreaterThanZero);
console.log(result);