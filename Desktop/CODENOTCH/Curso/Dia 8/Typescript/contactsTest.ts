import {PerssoNa} from "./reto1"
import {Contacts} from "./contacts"

let perso0 = new PerssoNa ('Pepa',15,'Calle la Praga');
let perso2 = new PerssoNa ('Pepe',5,'Calle la Grappa');
let perso3 = new PerssoNa ('Cuca',5,'Calle la Pampa');

let con = new Contacts;

con.people.push(perso0,perso2,perso3);

con.printCalendar();
console.log(con.people)