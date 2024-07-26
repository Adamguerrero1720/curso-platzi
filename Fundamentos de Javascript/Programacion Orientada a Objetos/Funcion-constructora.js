function Persona (nombre,apellido, edad){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
}

const persona1 = new Persona('Adam','Guerrero',20)

console.log(persona1)

Persona.prototype.telefono = '555-555-5555'

persona1.nacionalidad = 'Dominicano'

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre}${this.apellido} y tengo ${this.edad}`)
}

persona1.saludar()