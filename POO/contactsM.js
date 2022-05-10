const { Contacts } = require('./contacts.js');
const { Persona } = require('./retos.js');

let persona2 = new Persona('Nuria',25,190,81,1994,['correr','boxeo', 'judo']);
let persona3 = new Persona('Jose',25,190,81,1996,['judo','gamer', 'judo'])
let con = new Contacts ();

con.array.push(persona2,persona3);
con.printPersons();