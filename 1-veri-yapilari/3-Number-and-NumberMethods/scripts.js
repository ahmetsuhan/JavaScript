// NUmbers
let val;
val=Number('10');
console.log(isNaN(val));//is not a number? 
console.log(val);
console.log(typeof(val));

console.log("****************");
var num1=10.12456789;
val = num1.toPrecision(5); // 5basamak degitir ve en son basamagi yuvarlar
val=num1.toFixed(5);
console.log(val);
console.log(typeof(val));
console.log("**************");
val=Math.PI;
val=Math.round(2.7);//2.7 sayısını en yakın tam sayıya yuvarlar
val=Math.round(2.4);//2.4 sayısını en yakın tam sayıya yuvarlar
val=Math.ceil(2.1); //bu herzaman yukarı yuvarlar
val=Math.ceil(2.8);
val = Math.floor(2.9);//bu her zaman aşağı yuvarlar
val = Math.floor(2.2);//bu her zaman aşağı yuvarlar
val=Math.sqrt(64);
val=Math.pow(2,4);
val=Math.abs(-500);
val=Math.min(1,2,3,4,5,6,7,8,9,10);//içerisine gönderilen sayılardan en küçüğünü döndürür
val=Math.max(1,2,3,4,5,6,7,8,98);//içerisine gönderilen sayılardan en büyüğünü döndürür
val=Math.random();//burda 0 ile 1 arasında rastgele sayılar üretilir.
val = Math.floor(Math.random()*100); // 0 ile 100(100 dahil değil) arasında tam sayılar üretilir.

console.log(val);
