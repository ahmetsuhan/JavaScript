/*
(function(){

}());
*/

(function(name, lastName) {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var today = new Date();
    var msg = "Welcome. " + name + " " + lastName + " Today is " + days[today.getDay()];
    console.log(msg);
})("Ahmet Suhan", "Oka");