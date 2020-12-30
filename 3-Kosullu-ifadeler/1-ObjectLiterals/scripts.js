//Object Literals
let person={
    firstName:"Ahmet Suhan",
    lastName:"Oka",
    age:24,
    hobbies:["music","coding","cycling"],
    //object içinde object
    address:{
        city:"Denizli",
        country:"Turkey"
    },
    GetBirthYear:function(){
        return new Date().getFullYear() - this.age;
    }
}

console.log(person);
console.log(typeof(person));

let val= person.firstName;
console.log(val);
val=person.lastName;
console.log(val);
val=person.age;
console.log(val);
val=person.hobbies;
console.log(val);
val=person.hobbies[0];
console.log(val);

val=person.address;
console.log(val);
val=person.address.city;
console.log(val);
val=person.address["country"];
console.log(val);

val=person.GetBirthYear();
console.log(val);

console.log("**********************");

let people=[
    {firstName:"Ahmet Suhan",lastName:"Oka"},
    {firstName:"Ömer Faruk",lastName:"Oka"},
    {firstName:"Mahir",lastName:"Oka"}
];
console.log(people);
console.log(typeof(people));
let val2=people[0];
val2=people[0].firstName;
console.log(val2);

for(let i=0; i<people.length;i++){
    console.log("first name:"+`${people[i].firstName}`);
}