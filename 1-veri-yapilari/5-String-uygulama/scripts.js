/*String Demo */
var sentence = "  Template Literals or Template strings is the ability Have multi-line strings without any funny business.  ";

var url="http://ahmetsuhanoka.com/Modern Javascript Kursu sıfırdan ileri seviye";
//Cümle kaç karakterlidir.
var val=sentence.length;
console.log(val);
// kaç kelimeden oluşuyor.
var sentenceCopy1=sentence.trim();
sentenceCopy1=sentenceCopy1.split(" ").length;
console.log(sentenceCopy1);

//Tüm cümleyi küçük harfe çevirin.
console.log(sentence.toLowerCase());
//Cümlenin başındakiş bve sonundaki boşlkukları siliniz.
sentence=sentence.trim();
console.log(sentence);
// '-' karakterini silin
sentence=sentence.replace("-","");
console.log(sentence);

//url'nin içinden str kısmını çıkarınız
var str="http://";
url= url.slice(str.length);
console.log(url);

//url hangi protocolu kullanmaktadır (http,https)
url=str+url;
console.log(url.startsWith("http"));
console.log(url.startsWith("https"));
//url .com ifadesini içeriyor mu?
console.log(url.indexOf(".com"));
console.log(url.includes(".com"));
//url ifaadesini geçerli bir string olarak düzenleyiniz

console.log(url.toLowerCase().replace(/ /g,"-").replace(/ı/g,"i").replace(/ü/g,"u").replace(/ö/g,"o").replace(/ş/g,"s"));