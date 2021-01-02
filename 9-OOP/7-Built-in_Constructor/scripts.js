// String
var str1 = "Ahmet";
var str2 = new String("Ömer");
console.log(str1);
console.log(typeof(str1));

console.log(str2);
console.log(typeof(str2));

//type control: this will be throw as an answer "yes" because typeof str1 is string.
if (str1 === "Ahmet") {
    console.log("yes");
} else {
    console.log("no");
}

//type control this will be throw as an answer "no" because typeof str2 is object, not a  string.
if (str2 === "Ahmet") {
    console.log("yes");
} else {
    console.log("no");
}

String.prototype.repeat = function(n) {
    return new Array(n + 1).join(this);
}
console.log("Ahmet Suhan".repeat(2));

//Number 
var num1 = 10;
var num2 = new Number(10);

//Boolean 
var bool1 = true;
var bool2 = new Boolean(true);

//Object 
var obj1 = {
    name: "Ahmet",
    lastName: "Oka"
}

var obj2 = new Object({
    name: "Ahmet",
    lastName: "Oka"
});

// Array
var arr1 = ["Ahmet", 10, "Suhan", 20];
var arr2 = new Array("Ahmet", 10, "Suhan", 20);

/*Note: Arrat içerisinde remove methodu daha sonra Eklencek olursa bizim bunun kontrolünüde yapmak adına Array.prototype.remove || kendi fonksiyonumuz  yazıyoruz. 
Yani şu an array içerisinde stardart lib ten gelen bir remove methodu yok fakat ilerleyen günlerde geliştiriciler tarafından bu method eklenecek olursa bizim kendi yazdığımız fonksiyonumuzun hata vermemesi açısından bu kontrolü yapıyoruz.*/
Array.prototype.remove = Array.prototype.remove || function(member) {
    var index = this.indexOf(member);
    if (index > -1) {
        this.splice(index, 1);
    }
    return this;
}

console.log(arr1.remove("Ahmet"));