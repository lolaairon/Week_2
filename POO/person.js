
const { Contacts } = require('./contacts.js');
const { Persona } = require('./retos.js');

let computador = new Persona

computador.calcularIMC()
computador.calcularEdad()
computador.printAll()
computador.printHobbies()

let persona2 = new Persona('Nuria',25,190,81,1994,['correr','boxeo', 'judo']);
let persona3 = new Persona('Jose',25,190,81,1996,['judo','gamer', 'judo'])
let con = new Contacts ();

con.array.push(persona2,persona3);
con.printPersons();
//console.log(con);
//console.log(persona2.hobbies)