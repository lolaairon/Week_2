//let persona = require('./person.js');
const { Persona } = require('./retos.js');

//let computador1 = new Persona()
/*
computador1.calcularIMC()
computador1.calcularEdad()
computador1.printAll()
computador1.printHobbies()
*/
let persona1 = new Persona('Lucas',25,195,80,1986,['correr','boxeo', 'judo']);
console.log(persona1);
console.log(persona1.calcularIMC())
console.log(persona1.calcularEdad())
persona1.printAll()
console.log(persona1.printHobbies());


