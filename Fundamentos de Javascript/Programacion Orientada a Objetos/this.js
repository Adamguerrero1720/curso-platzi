/**
 * this es una palabra que se usara cuando se trabaje con clases o con objetos, hace referencia al objeto mismo o a la clase que nos estamos refiriendo
 * 
 */

class Persona {
    constructor (nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
}

const persona1 = new Persona ('Adam',20)
console.log(persona1)

persona1.nuevoMetodo = function (){
    console.log(`Hola me llamo ${this.nombre}`)
}

persona1.nuevoMetodo()