var welcome = function() {
    console.log("Welcome " + this.name);
}
var ahmet = {
    name: "Ahmet"
}
var asli = {
    name: "Aslı"
}
welcome.call(ahmet);
welcome.call(asli);

welcome.apply(ahmet);
welcome.apply(asli);
/*Note: Eğer fonksiyon parametre almıyorsa apply ve call methodunun kullanımı aynıdır. */
console.log("******");
welcomeAhmet = welcome.bind(ahmet);
welcomeAhmet();

welcomeAsli = welcome.bind(asli);
welcomeAsli();

console.log("*************************");

/*call ve apply farkı  */
var greeting = function(a, b) {
    console.log("Hi! " + this.name + ".Are you interested in " + a + " and " + b);
}
greeting.call(ahmet, "asp.net", "angular");
greeting.call(asli, "asp.net", "angular");
console.log("********");
greeting.apply(ahmet, ["asp.net", "angular"]);
greeting.apply(asli, ["asp.net", "angular"]);

greetingAhmet = greeting.bind(ahmet);
greetingAhmet("asp.net", "angular");

greetingAsli = greeting.bind(asli);
greetingAsli("asp.net", "angular");