class Persona {
    constructor(nombre, apellido, edad, sexo, cedula)  {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.sexo = sexo
        this.cedula = cedula
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}, tengo la edad ${this.edad}. Soy un ${this.sexo} con el numero de identificacion: ${this.cedula}`)
    }
}

const persona1 = new Persona('Adam', 'Guerrero Tejada', 20, 'Masculino', '402-3013157-1')

persona1.saludar()