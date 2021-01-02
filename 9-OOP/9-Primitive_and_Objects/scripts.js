var a = 10;
var b = a;
console.log(a);
console.log(b);

var obj1 = {
    name: "Aslı",
    age: 23
}
var obj2 = obj1;
obj2.age = 35;
console.log(obj1.age);
console.log(obj2.age);


var num = 50;
var account = {
    name: "Ahmet",
    accountNumber: 123456

}

function update(c, d) {
    c = 100;
    d.accountNumber = "222222";
}
update(num, account);
console.log(num);
console.log(account);


var products = [
    { name: "product name1", price: 1000 },
    { name: "product name2", price: 500 },
    { name: "product name3", price: 200 },
    { name: "product name4", price: 375 },
    { name: "product name5", price: 1000 },
    { name: "product name6", price: 450 },
    { name: "product name7", price: 800 },
    { name: "product name8", price: 950 },
    { name: "product name9", price: 96 },
    { name: "product name10", price: 12 },
    { name: "product name11", price: 975 },
    { name: "product name12", price: 10548 },

]

function filterProducts(prd) {
    //write your code here
}
filterProducts(products);