/*
    Demo : Creating Objects

    ** Dışarıdan name ve salary bilgilerini alan Employee constructor'ı tanımla.
    ** Yıl içinde o ana kadar alınan toplam maaş ve alınan toplam vergi tutarını hesaplayan fonksiyonu olustur.
        Vergi Dilimleri:
            ** 20.000 'e kadar %20 vergi,
            ** 30 000 'e kadar %25 vergi,
            ** 30 000 'den sonra %27 vergi
    **
*/
var Employee = function(name, salary) {
    if (!(this instanceof Employee)) {
        return new Employee(name, salary);
    }
    this.name = name;
    this.salary = salary;
}
Employee.prototype.calculateSalary = function() {
    var month = new Date().getMonth() + 1;
    var tax = 0,
        total = this.salary * month;
    if (total <= 20000) {
        tax = total * .2;
    } else if (total > 20000 && total <= 30000) {
        tax = total * 0.25;
    } else {
        tax = total * 0.27;
    }
    return {
        tax: tax,
        paid: total - tax
    }
}
var emp1 = Employee("Ahmet", 3000);
var emp1Salary = emp1.calculateSalary();
console.log(`${emp1.name} isimli personel toplam ${emp1Salary.tax} kesinti ile ${emp1Salary.paid} maaş almıştır.`);
var emp2 = new Employee("Omer", 6000);
var emp2Salary = emp2.calculateSalary();
console.log(emp2Salary);