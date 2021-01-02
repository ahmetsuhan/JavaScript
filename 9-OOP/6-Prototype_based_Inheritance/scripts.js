// Prototypal Inheritance

let Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person.prototype.calculateAge = function() {
    return (new Date().getFullYear() - this.yearOfBirth);
}


let Teacher = function(name, yearOfBirth, job, subject) {
    Person.call(this, name, yearOfBirth, job);
    this.subject = subject;
}


//inherit the Person prototype methods
Teacher.prototype = Object.create(Person.prototype);

//set Teacher constructor
Teacher.prototype.constructor = Teacher;


Teacher.prototype.greeting = function() {
    return "Hello my name is " + this.name;
}

let ahmet = new Teacher("Ahmet Suhan", 1997, "Teacher", "Math");
console.log(ahmet);
console.log(ahmet.calculateAge());