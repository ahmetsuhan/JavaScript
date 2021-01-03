//ES5 ile gelen bir kavramdır.
/*
Kendi Getter Setter fonksiyonumuzu yazmış olduk
const Person = {
    firstname: "Ahmet Suhan",
    lastName: "Oka",
    getFullName: function() {
        return (`${this.firstname} ${this.lastName}`);
    },
    setFullName: function(firstName, lastName) {
        this.firstname = firstName;
        this.lastName = lastName;
    }
}

console.log(Person.getFullName());
Person.setFullName("Ömer Faruk", "Oka");
console.log(Person.getFullName());
*/


const Person = {
    firstname: "Ahmet Suhan",
    lastName: "Oka",
    get fullName() {
        return (`${this.firstname} ${this.lastName}`);
    },
    set fullName(value) {
        const parts = value.split(" ");
        this.firstname = parts[0]
        this.lastName = parts[parts.length - 1];
    }
}

//defining Property
Object.defineProperty(Person, "age", {
    value: 50,
    writable: true // if i set this variable false, i cannot change age's value
})

console.log(Person.fullName);
Person.fullName = "ali ibrahim";
console.log(Person.fullName);
console.log(Person);
Person.fullName = "Ahmet Oka";
console.log(Person.fullName);

console.log(Person.age);
Person.age = 24;
console.log(Person.age);