// ** Şimdi tarih-ay gün ve yıl bilgisini yazdırın.
console.log("curren date:"+ new Date());

// ** Tarih ve saat bilgisini içeren bir Date objesi oluşturun
var date = {
    tarih:new Date(),
    saat:new Date().getHours()
}
console.log(date);

// ** 1/1/1990 tarihinden bir gün öncesini gösteriniz.
var prevDate = new Date(1990,1,1);
var dayOfMonth = prevDate.getDate();
prevDate.setDate(dayOfMonth-1);
console.log("prevdate:"+prevDate);

// **İki tarih arasında geçen zamanı hesaplayınız:
var myBirthDate= new Date(1997,0,8);
var currentDate=new Date();
var miliSeconds=currentDate-myBirthDate;
console.log("miliseconds:"+miliSeconds);
var saniye=miliSeconds/1000;
console.log("saniye:"+saniye);
var dakika = saniye/60;
console.log("dakika:"+dakika);
var saat= dakika/60;
console.log("saat:"+saat);
var gun=saat/24;
console.log("gün:"+gun);


// ** Her yıl mayıs ayının 2.hftası pazar günü kutlanan anneler günü 2021 yılında ne zaman kutlanacaktır.
var annelerGunu = new Date();
var simdikiYear=new Date().getFullYear();
annelerGunu.setHours(0,0,0,0);
annelerGunu.setFullYear(simdikiYear);
annelerGunu.setDate(1);
annelerGunu.setMonth(4);

while(annelerGunu.getDay() != 0){
    annelerGunu.setDate(annelerGunu.getDate()+1);
}
annelerGunu.setDate(annelerGunu.getDate()+7);
console.log("anneler gunu:"+annelerGunu);


// ** Yaş hesaplama nasıl yapılır
var bday = new Date('8/1/1995');
var ageDifMs = Date.now() - bday.getTime();
console.log(ageDifMs);
var ageDate=new Date(ageDifMs);
console.log(ageDate.getFullYear()-1970);
// console.log(bday.getTime());
// console.log(Date.now());