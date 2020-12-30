//Demo Arrays:

// "Bmw,Mercedes,Opel,Mazda" elemanlarına sahip bir dizi oluşturun
let cars=["Bmw","Mercedes","Opel","Mazda"];
console.log("cars:"+cars);
    // let cars2={
    //     arabaMarka:["Bmw","Mercedes"]
    // }
    // console.log(cars2.arabaMarka);

// Dizi kaç elemanlıdır?
let elemanSayisi=cars.length;
console.log("eleman sayısı:"+elemanSayisi);

//Dizinin ilk ve son elemanı nedir?
console.log("Dizinin ilk elemanı:"+cars[0]);
let lastIndex=cars.length-1;
console.log("Dizinin son elemanı:"+cars[lastIndex]);

//Renault Degerini dizinin sonuna ekleyin
cars[cars.length]="Fiat";
cars.push("Renault");
console.log(cars);
//Toyota değerini n dizin başına ekleyin
cars.unshift("Toyota");
console.log(cars);
//Renault değerini siliniz
let renaultIndex = cars.indexOf("Renault");
console.log(renaultIndex);
cars.pop(renaultIndex);
console.log(cars);
//Toyota değerini silin 
let toyotaIndex = cars.indexOf("Toyota");
cars.splice(0,1);
console.log(cars);

//Dizi elemanlarını ters çevirin:
cars.reverse();
console.log(cars);

//Dizi Elemanlarını alfabetik olarak sıralayın
cars.sort();
console.log(cars);
//[1,2,5,80,15] dizisini sıralayın
let newArr= new Array(1,2,5,80,15);
console.log(newArr);
newArr.sort();
console.log(newArr);

    //sayısal sıralmak için
    function SortLikeNumber(num1,num2){
        if(num1>num2)return 1;
        if(num1==num2)return 0;
        if(num1<num2)return -1;
    }
    console.log(newArr.sort(SortLikeNumber));
//Opel değeri bu dizinin elemanımıdır.
console.log(cars.includes("Opel"));
function IsElementOfArray(element,arr){
    return arr.indexOf(element)!=-1?true:false;
}
console.log(IsElementOfArray("Opel",cars));

/* 
var str = "Chevrolet,Dacia";
ifadesini diziye çeviriniz.
*/
var str="Chevrolet,Dacia";
str=str.split(",");
console.log(str);
console.log(typeof(str));

// oluşturulan 2 dizinin elemanlarını bir başka dizi ile birleştirin
var arr3 = cars.concat(str);
console.log(arr3);
//oluşturulan dizin son 2 elemanı silin
arr3.splice(arr3.length-2,2);
console.log(arr3);

/* Aşağıda verilen elemanları bir dizi içerisinde saklayınız.
    studentA : Yiğit Bilgi 2010
    studentB : Ahmet Suhan Oka 2015
    studentC : Ömer Faruk Oka 2012
*/

var arr4={
    studentA:["Yiğit","Bilgi",2010],
    studentB:["Ahmet Suhan","Oka",2015],
    studentC:["Ömer Faruk","Oka",2012]
}
var arr5={
    studentA:["Yiğit","Bilgi",2010],
    studentB:["Ahmet Suhan","Oka",2015],
    studentC:["Ömer Faruk","Oka",2012]
}
console.log(arr4);
var studentA=["Yiğit","Bilgi",2010];
var studentB=["Ahmet Suhan","Oka",2015];
var studentC=["Ömer Faruk","Oka",2010];

var students =[studentA,studentB,studentC];
console.log(students);
var deneme=[arr4,arr5];
console.log(deneme);