export class Book {
    private title:string;
    private nPages: number;
    private isbn: string;
    private author:string;
    private editorial: string;

        constructor(title:string,nPages: number, isbn: string, author:string, editorial: string){
            this.title = title
            this.nPages = nPages
            this.isbn = isbn
            this.author = author
            this.editorial= editorial
        }
//constructor(private title:string,private nPages: number,private isbn: string,private author:string,private editorial: string)
    public setTitle(title:string):void{
       this.title = title
    }
    
    public getTitle():string{
        return this.title
    }

    public setnPages(title:string):void{
        this.nPages = this.nPages
     }
     
     public getnPages():number{
         return this.nPages
     }
     public setisbn(title:string):void{
        this.isbn = this.isbn
     }
     
     public getisbn():string{
         return this.isbn
     }
     public setauthor(title:string):void{
        this.author = this.author
     }
     
     public getauthor():string{
         return this.author
     }
     public seteditorial(title:string):void{
        this.editorial = this.editorial
     }
     
     public geteditorial():string{
         return this.editorial
     }
     public toString():string{
         return ('Título ' + this.title + "\n"+'Numero de páginas ' + this.nPages + "\n" + 'isbn ' + this.isbn +"\n"+ 'Autor: '  + this.author + "\n"+' Editorial ' + this.editorial )
     }
    }
      let book1= new Book ('Introduccion a Javascript',232,'2344433-BC23333','Joseph Smith','Now Editions')

    //console.log(book1.toString());