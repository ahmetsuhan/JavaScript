/*         
            Person
    *Student     *Teacher
                    -Headmaster

*/

//Person constrcutro
var Person = function(name, lastName, city, country) {
    this.name = name;
    this.lastName = lastName;
    this.city = city;
    this.country = country;
}
Person.prototype.introduce = function() {
    console.log(`Hello my name is ${this.name} ${this.lastName}. I came here ${this.city} in ${this.country}`);
}

//Teacher Constructor
var Teacher = function(name, lastName, city, country, branch) {
    Person.call(this, name, lastName, city, country);
    this.branch = branch;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.teach = function() {
    console.log("I teach " + this.branch);
}
var teacher = new Teacher("Ahmet", "oka", "denizli", "Turkey", "math");
teacher.introduce();
teacher.teach();

//Student Constructor
var Student = function(name, lastName, city, country, studentNumber) {
    Person.call(this, name, lastName, city, country, studentNumber);
    this.studentNumber = studentNumber;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.study = function() {
    console.log("My student number is " + this.studentNumber + " I have already studied har :)");
}
var s1 = new Student("Ömer Faruk", "OKA", "Istanbul", "Turkey", "12345");
s1.introduce();
s1.study();



//Head master constructor
var HeadMaster = function(name, lastName, city, country, branch) {
    Teacher.call(this, name, lastName, city, country, branch);
}
HeadMaster.prototype = Object.create(Teacher.prototype);
HeadMaster.prototype.constructor = HeadMaster;
HeadMaster.prototype.shareTask = function() {
    console.log("I've already shared all the work.");
}
let h1 = new HeadMaster("Mahir", "Oka", "Uşak", "Turkey", "Engish");
h1.introduce(); //Person
h1.teach(); //Teacher
h1.shareTask(); //Headmaster