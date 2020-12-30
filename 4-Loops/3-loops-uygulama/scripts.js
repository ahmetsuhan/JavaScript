/* 
        Demo Loops : Sayı Tahmin oyunu
        
        1-10 arasında rastgele sayı üretilen bir sayıyı aşağı yukarı ifadeleri ile buldurmaya çalılın.
        ** puanlama yapın.
        ** kullanıcı kaç kerede bileceğini beliirtebilsin.
*/

function RastgeleSayiuret(max){
    return Math.floor((Math.random()*10)+1);
}
var hak=5;
var tahmin;
var sayac=0;
var sayi =RastgeleSayiuret(10);
console.log(sayi);

while(hak>0){
    tahmin=Number(prompt("Bir sayı giriniz:"));
    if(sayi==tahmin){
        console.log("tebrikler bildiniz!");
        console.log(`puan : ${100 - (sayac*20)}`);
        break;
    }
    else if(sayi>tahmin){
        console.log("yukarı");
    }
    else{
        console.log("aşağı");
    }
    hak--;
    sayac++;
    if(hak<=0){
        console.log("Hakkınız bitti :)"+sayi);
        break;
    }
}