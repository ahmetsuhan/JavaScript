/*
function Person(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function() {
        return new Date().getFullYear() - this.yearOfBirth;
    }
}

let aso = new Person("Ahmet Suhan", 1997, "Frontend Developer");
let ofo = new Person("Ömer Faruk", 1997, "Doctor");
console.log(aso.name);
console.log(aso.yearOfBirth);
console.log(aso.job);
console.log(aso.calculateAge());
console.log("********************");
console.log(ofo.name);
console.log(ofo.yearOfBirth);
console.log(ofo.job);
console.log(ofo.calculateAge());
*/
let Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function() {
        return new Date().getFullYear() - this.yearOfBirth;
    }
}
let aso = new Person("Ahmet Suhan", 1997, "Frontend Developer");
let ofo = new Person("Ömer Faruk", 1997, "Doctor");
console.log(aso.name);
console.log(aso.yearOfBirth);
console.log(aso.job);
console.log(aso.calculateAge());
console.log("********************");
console.log(ofo.name);
console.log(ofo.yearOfBirth);
console.log(ofo.job);
console.log(ofo.calculateAge());