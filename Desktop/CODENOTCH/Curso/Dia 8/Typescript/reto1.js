"use strict";
exports.__esModule = true;
exports.PerssoNa = void 0;
var PerssoNa = /** @class */ (function () {
    function PerssoNa(name, age, adrrees) {
        this.name = name;
        this.age = age;
        this.addrees = adrrees;
    }
    PerssoNa.prototype.printName = function () {
        console.log(this.name);
    };
    PerssoNa.prototype.yearOfBirth = function (currentYear) {
        return currentYear - this.age;
    };
    PerssoNa.prototype.setAddres = function (newaddrees) {
        this.addrees = newaddrees;
    };
    PerssoNa.prototype.getAddress = function () {
        return this.addrees;
    };
    return PerssoNa;
}());
exports.PerssoNa = PerssoNa;
var perso = new PerssoNa('Olivia', 5, 'Calle la Paápa');
perso.printName();
console.log(perso.yearOfBirth(2022));
console.log(perso.getAddress());
perso.setAddres('Calle Papanatas');
console.log(perso.getAddress());
