import {Library} from "./reto6"
import {Book} from "./reto4"

let book9 : Book =new Book ('El día que se perdió la cordura', 350,'978-84-663-4612-2','Castillo, Javier','DeBolsillo');
let book10 : Book =new Book ('El día que se perdió el amor', 320,'978-22-663-3333-2','Castillo, Javier','DeBolsillo');
let book11 : Book =new Book ('La chica de nieve', 250,'666-88-663-4612-2','Castillo, Javier','DeBolsillo');
let librosE: Book[] = [book9,book10,book11];
let libreria: Library = new Library( librosE, 'Alcobendas' , 'Pepa');

console.log(libreria.toString());
console.log(libreria.getNumberOfBooks());
console.log(libreria.findByAuthor('Castillo, Javier'));