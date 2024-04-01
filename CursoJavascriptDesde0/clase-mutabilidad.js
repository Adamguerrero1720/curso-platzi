//Tipo de datos primitivos/inmutables

let numero = 23;
numero = numero + 10;
console.log(numero)

let esVerdadero = true;
esVerdadero = false
console.log(esVerdadero)

//Tipo de datos complejo/mutables
let usuario = {nombre:"Pepito", edad:"15"}
usuario.edad = 20
console.log(usuario)

let frutas = ['Manzana', 'Pera','Banana']
frutas[0] = "Uva"
console.log(frutas)

function cambiarNombre(objeto){
    objeto.nombre = 'Nuevo Nombre'
}

let persona = {nombre: 'Antonio'}
cambiarNombre(persona)

console.log(persona)