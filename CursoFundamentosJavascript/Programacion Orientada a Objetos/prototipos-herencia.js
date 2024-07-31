class Animal {
    constructor (nombre, tipo){
        this.nombre = nombre,
        this.tipo = tipo
    }
    emitirSonido(){
        console.log(`El ${this.nombre} es un ${this.tipo}`)
    }
}

//Extend se usa para especificar de cual clase es que se heradara, y el super es para especificar los parametros que se extenderan de esa clase
class Perro extends Animal{
    constructor (nombre, tipo, raza) {
        super(nombre, tipo)
        this.raza = raza
    }
    emitirSonido(){
        console.log(`El perro ladra`)
    }
    correr(){
        console.log(`${this.nombre} corre alegremente`)
    }
}

const perro1 = new Perro('Bobby', 'Perro','Chihuhua')
console.log(perro1)
perro1.correr()
perro1.emitirSonido()

perro1.nuevoMetodo = function () {
    console.log("Este es un metodo")
}

Perro.prototype.segundoMetodo = function(){
    console.log("Es otro nuevo metodo")
}

perro1.segundoMetodo()