// Template Literals
const fullName="Ahmet Suhan";
const city="Denizli";
const yearOfBirth=1997;

let val;

val="My name is "+fullName+" I'm "+(new Date().getFullYear()-yearOfBirth)+" years old."+" and I live in "+city;

//ternary operator with template literals
val=`my name is ${fullName} I'm ${new Date().getFullYear()-yearOfBirth>=18?"over 18":"under 18"} and I live in ${city}`;

console.log(val);