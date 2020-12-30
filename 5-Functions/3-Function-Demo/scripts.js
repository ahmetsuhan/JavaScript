//Demo : Functions

var hesapA={
    name:"Ahmet Suhan",
    lasName:"Oka",
    hesapNo:"0540",
    bakiye:2020,
    ekHesap:1000
}
var hesapB={
    name:"Ömer Faruk",
    lasName:"Oka",
    hesapNo:"0541",
    bakiye:5060,
    ekHesap:2500
}

function ParaCek(hesap,miktar){
    console.log(`Selam ${hesap.name}`);
    if(hesap.bakiye>= miktar){
        hesap.bakiye-=miktar;
        console.log("paranızı alabilirsiniz.");
        console.log(`Yeni bakiye:${hesap.bakiye}`);

    }else{
        var toplam=hesap.bakiye+hesap.bakiye;
        if(toplam>=miktar){
            if(confirm("Ek hesabınızı kullanmak istermisiniz?")){
                var bakiye = hesap.bakiye;
                var ekHesap=miktar-bakiye;
                hesap.bakiye=0;
                hesap.ekHesap-=ekHesap;
                console.log(`Yeni bakiye:${hesap.bakiye}`);
                console.log(`Yeni Ekhesap:${hesap.ekHesap}`);

                console.log("paranızı alabilirsiniz.");
            }else{
                console.log(`${hesap.hesapNo}'lu hesabınızda ${miktar} bulunmamaktadır.`);
            }
        }else{
            console.log("Yetersiz bakiye");
        }
    }
}

ParaCek(hesapA,1000);
ParaCek(hesapA,2000);
