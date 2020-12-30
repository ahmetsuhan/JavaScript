//Function declarations
function Sum(a,b){
    return a+b;
}
console.log(Sum(10,20));

//Function Expressions
const Sum2=function(a,b){
    return a+b;
}
console.log(Sum2(15,25));
console.log(Sum2);
console.log(typeof(Sum2));


//Defaults parameters
const Sum3=function(a=0,b=0){ //  a yada b gönderilmezse varsayılan değeri sıfır sayılır.
    return a+b;
}
console.log(Sum3());
console.log(Sum3(10));
console.log(Sum3(50,60));

//farklı parametreler gönderince
function SumAll(){
    var total=0;
    for(let i = 0; i<arguments.length;i++){
        total+=arguments[i];
    }
    return total;
}

console.log(SumAll(10,20,30,50,40,60,98,0,80));
