// Loops in array & Objects

/*

let cars=["bmw","mercedes","toyota"];
for (let index = 0; index < cars.length; index++) {
    console.log(cars[index]);
}

//For-in
for(let i in cars)
{
    console.log(`index : ${i} value : ${cars[i]}`);
}
console.log(typeof(cars));


//Foreach

cars.forEach(function(item){
console.log(item);
});
*/
// *********************************************************
/*
let cars=["bmw","mercedes","toyota"];
let people=[
    {firstName:"ahmet suhan",lastName:"Oka"},
    {firstName:"Ömer Faruk",lastName:"Oka"},
    {firstName:"Mahir",lastName:"Oka"}
];
people.forEach(element => {
    console.log(element);
});
people.forEach(element => {
    console.log(element.firstName);
});
*/

//Map : returns an array
let cars=["bmw","mercedes","toyota"];
let people=[
    {firstName:"ahmet suhan",lastName:"Oka"},
    {firstName:"Ömer Faruk",lastName:"Oka"},
    {firstName:"Mahir",lastName:"Oka"}
];

/*
let val=people.map(function(item){
    return item.firstName+" "+item.lastName;
});
console.log(val); */

let numbers =[1,5,6,8,10];
let num = numbers.map(function(item){
    return item*item;
});
console.log(num);