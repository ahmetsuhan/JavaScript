function Question(hobby) {
    switch (hobby) {
        case "car":
            return function(name) {
                console.log(name + " do you have a car?");
            }
            break;
        case "book":
            return function(name) {
                console.log(name + " what is your favourite book?");
            }
            break;
        case "software":
            return function(name, type) {
                console.log(name + " are you interested in " + type + "?");
            }
            break;
        default:
            return function(name) {
                console.log(name + " how are you?");
            }
    }
}

var carQuestion = Question("car");
carQuestion("Ahmet Suhan");
carQuestion("Ömer Faruk");

var bookQuestion = Question("book");
bookQuestion("Halime");
bookQuestion("Mahir");

var softwareQuestion = Question("software");
softwareQuestion("Feyza", "nodejs");
softwareQuestion("Devrim", "angular");