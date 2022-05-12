"use strict";
exports.__esModule = true;
var reto1_1 = require("./reto1");
var per1 = new reto1_1.PerssoNa('Ayron', 11, 'Calle el Cacas');
per1.printName();
console.log(per1.yearOfBirth(2022));
console.log(per1.getAddress());
per1.setAddres('Calle Papanatas');
console.log(per1.getAddress());
