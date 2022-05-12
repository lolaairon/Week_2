export class Vector {

    private elements: number[] 
    
    constructor(n:number, k:number){
        this.elements = vectoreS(n,k)

        function vectoreS(n,k):number[]{
        let count:number[]=[]
            for(let i=0; i<n ;i++){
            count[i] = Math.round(Math.random() *k ) ;
            // count.push(count[i])
            }
                return count
    }

    }
        public getprint(){
            console.log(this.elements);
        }

        public add(v1:Vector):Vector{
           // let result1= new Vector(v1.elements.length,0);

                for(let i=0; i< this.elements.length; i++){
                  this.elements[i] = this.elements[i]+ v1.elements[i];
                   
                  // console.log(Vector[i])
                }
                return  this
        }
        public subs(v1:Vector):Vector{
            // let result1= new Vector(v1.elements.length,0);
 
                 for(let i=0; i< this.elements.length; i++){
                   this.elements[i] = this.elements[i] - v1.elements[i];
                    
                   // console.log(Vector[i])
                 }
                 return  this
         }
         public mult(v1:Vector):Vector{
            // let result1= new Vector(v1.elements.length,0);
 
                 for(let i=0; i< this.elements.length; i++){
                   this.elements[i] = this.elements[i] * v1.elements[i];
                    
                   // console.log(Vector[i])
                 }
                 return  this
         }
         public multNumer(n:number):Vector{
            // let result1= new Vector(v1.elements.length,0);
 
                 for(let i=0; i< this.elements.length; i++){
                   this.elements[i] = this.elements[i] * n;
                    
                   // console.log(Vector[i])
                 }
                 return  this
         }
 
 
 




}
let vector1 = new Vector (5,20);
let v1 = new Vector(5,20);
let v2 = new Vector(9,100);
v1.getprint();
vector1.getprint()
console.log(vector1.add(v1));
console.log(vector1.subs(v1));
console.log(vector1.mult(v1));
console.log(vector1.multNumer(2));