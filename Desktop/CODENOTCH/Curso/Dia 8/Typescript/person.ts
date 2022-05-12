import {PerssoNa} from "./reto1"

let per1 = new PerssoNa('Ayron',11,'Calle el Cacas');

per1.printName();
console.log(per1.yearOfBirth(2022));
console.log(per1.getAddress());
per1.setAddres('Calle Papanatas');
console.log(per1.getAddress());
