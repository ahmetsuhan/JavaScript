// Object.create


let personProto = {
    calculateAge: function() {
        return (new Date().getFullYear() - this.yearOfBirth);
    }
}

let aso = Object.create(personProto);
aso.name = "Ahmet";
aso.yearOfBirth = 1997;
aso.job = "Student";



let omer = Object.create(personProto, {
    name: { value: "Ömer Faruk" },
    yearOfBirth: { value: 1997 },
    job: { value: "Doctor" }
});

console.log(omer);
console.log(omer.calculateAge());



console.log(aso);
console.log(aso.calculateAge());