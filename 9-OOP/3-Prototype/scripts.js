//Prototype
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person.prototype.calculateAge = function() {
    return new Date().getFullYear() - this.yearOfBirth;
}
Person.prototype.getName = function() {
    return this.name;
}
Person.prototype.lastName = "Oka";

let ahmet = new Person("Ahmet Suhan", 1997, "Teacher");
let omer = new Person("Omer Faruk", 1997, "Doctor");


console.log(ahmet);
console.log(ahmet.calculateAge());
console.log(ahmet.getName());
console.log(ahmet.lastName);
console.log("*******************");
console.log(omer);
console.log(omer.calculateAge());
console.log(omer.getName());
console.log(omer.lastName);



console.log(omer.hasOwnProperty("name"));
console.log(omer.hasOwnProperty("lastName"));



var Teacher = function(subject, greeting) {
    this.subject = subject;
    this.greetings = function(subject) {
        console.log("Hello " + subject);
    };
}