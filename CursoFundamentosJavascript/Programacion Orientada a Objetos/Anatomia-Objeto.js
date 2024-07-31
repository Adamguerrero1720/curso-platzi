/* 

un objeto es una estructura de datos contiene una propiedad que contiene un valor

Ejemplo:

objeto {
    propiedad1: valor1,
    propiedad2: valor2
}

metodos = son funciones dentro de objetos que nos ayudan a generar interaccion
*/

const persona = {
    nombre: "Jane",
    edad: NaN,
    direccion: {
        calle: "Av. Romulo Betancourt",
        ciudad: "Santo Domingo",
        codigoPostal: "10113"
    },
    Saludar () {
        console.log(`Hola, mi nombre es ${persona.nombre}`)
    }
}

    console.log(persona)
persona.Saludar()

persona.telefono = "8094248203"

console.log(persona.telefono)

persona.despedir = () => {
    console.log(`Un placer, adios`)
}
