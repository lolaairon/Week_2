export class PerssoNa {
    public name:string;
    public age:number;
    private addrees:string;
    
    constructor(name:string,age:number, adrrees:string){
        this.name = name
        this.age = age
        this.addrees = adrrees
     }


    public printName():void{
      console.log(this.name)

    }
    public yearOfBirth(currentYear:number):number{
        return currentYear - this.age;
  
      }
   public setAddres(newaddrees:string):void{
       this.addrees = newaddrees;
   }
  public getAddress():string{
      return this.addrees
  }



}

let perso = new PerssoNa ('Olivia',5,'Calle la Paápa');
perso.printName();
console.log(perso.yearOfBirth(2022));
console.log(perso.getAddress());
perso.setAddres('Calle Papanatas');
console.log(perso.getAddress());

