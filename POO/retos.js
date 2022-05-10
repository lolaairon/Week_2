/*RETO 1
4. Crea la clase Person de la manera más completa que se te ocurra. Su constructor debe
tener como mínimo 2 parámetros de entrada.
*/ 
 class Persona{
                constructor(nombre,edad,altura,peso,nacimiento,hobbies){
                    this.nombre = nombre;
                    this.edad = edad;
                    this.altura = altura;
                    this.peso = peso;
                    this.nacimiento = nacimiento;
                    this.hobbies = [hobbies];
                                        }
              


/*RETO 2
    Utilizando la clase Person definida en el punto anterior, haz que se pueda calcular el IMC
    (índice de mas corporal) de cualquier persona que se haya creado como un objeto de la
    clase.
*/ 

calcularIMC(){
    return parseInt(this.peso / (this.altura/100*this.altura/100));

}

/*
RETO 3
Añadir el atributo yearOfBirth a la clase Person e implementar el método edad que tome
como parámetro el año y calcule la edad de la persona.
*/
calcularEdad(){
    return 2022 - this.nacimiento
}
/*
RETO 4 
Añadir un método que se denomine printAll que muestre por consola cada uno de los
atributos de la clase Person seguido por “-” y el valor del atributo.
*/ 
printAll(){
    let count = ''
    for(let valores in Persona){
       count = count + valores + '-' + Persona[valores] + ' ';
    }
   return count
}

/*RETO 5
Añadir el atributo hobbies a la clase Person, que es un array de strings, y crear un método
denominado printHobbies, que muestre por consola las aficiones de la persona.
*/
printHobbies(){
     return this.hobbies;
}


}//CIERRE DE LA CLASE 
 //MAIN 
/*
 let persona = new Persona('Pepe',20,165,56,1993,['pescar','correr', 'nadar']);
console.log(persona);
 console.log(persona.calcularIMC())
 console.log(persona.calcularEdad())
 console.log(persona.printAll())
console.log(persona.printHobbies());*/

 module.exports.Persona = Persona ;