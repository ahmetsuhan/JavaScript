//Functions

function YasHesapla(dogumYili){
    return new Date().getFullYear()-dogumYili;
}

let val = YasHesapla(1997);
console.log(val);

function EmekliligeKacYilKaldi(dogumYili,isim){
    let yas = YasHesapla(dogumYili);
    let emeklilik=65-yas;
    if(emeklilik>0){
        console.log(`Emekli olamnıza ${emeklilik} yıl kaldı ${isim}.`);
    }else{
        console.log("zaten emeklisiniz :)");
    }
}

EmekliligeKacYilKaldi(2012,"Ahmet Suhan");
EmekliligeKacYilKaldi(1852,"Ahmet Suhan");
