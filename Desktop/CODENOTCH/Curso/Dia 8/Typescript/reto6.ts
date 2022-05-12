import {Book} from "./reto4"

export class Library {
    private book :Book[];
    private address: string;
    private manager: string;
    

    constructor(book :Book[],address: string,manager: string){
        this.book = book
        this.address = address
        this.manager = manager
    }

        public setAddrees(addrees:string):void{
            this.address = addrees
        }
        
        public getaAddrees():string{
            return this.address
        }
        public setManager(maneger:string):void{
            this.manager = maneger
        }
        
        public getManager():string{
            return this.manager
        }
        
        public toString():string{
           let str:string  = ''           
           for(let i = 0; i<this.book.length; i++){

            str += 'Book' + (i+1) +"\n" + this.book[i].toString()+ "\n";
              //str += 'Book '+ this.books[i].tostring()
              
           }
           return str
            }

        
        public getNumberOfBooks():number{
                return this.book.length
        }
        public findByAuthor(author:string):Book[]{
            let count: Book[] = [];

            for(let i=0; i<this.book.length; i++){
                if(author == this.book[i].getauthor()){
                    count.push(this.book[i])
                }
            }
            return count
        }
        }
        


let book6 : Book =new Book ('Teo se tira por un puente', 15,'15wad15','Tealia','Teeoli');
let book7 : Book = new Book ('Teo se tira por un 5', 18,'1ooad15','Tealissa','Teessoli');
let librosEsL: Book[] = [book6,book7];
let libreria: Library = new Library( librosEsL , 'Mostoles' , 'Pepe')
/*
console.log(libreria.toString());
console.log(libreria.toString());
console.log(libreria.getNumberOfBooks());
console.log(libreria.getNumberOfBooks());
console.log(libreria.findByAuthor('Tealissa'));*/