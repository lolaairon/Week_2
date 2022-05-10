const { Contacts } = require('./contacts.js');
const { Persona } = require('./retos.js');

let persona4 = new Persona('Marta',25,165,81,1994,['bailar','saltar', 'cantar']);
let persona5 = new Persona('Maria',25,170,81,1996,['pintar','gamer', 'coser'])
let con = new Contacts ();

con.array.push(persona4,persona5);
con.printPersons();