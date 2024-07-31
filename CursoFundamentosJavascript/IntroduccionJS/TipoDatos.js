//PRIMITIVOS

//string
let nombre = 'Adam Guerrero'
//number
let edad = 20
//boolean
let mayorEdad = true
//null
let dinero = null
//undefined
let graduado = undefined
//symbol
let simboloUnico = Symbol('Cedula')
//bigint
let valorPi = 2n

//COMPLEJO

//object
const Carro = {
    marca: 'Changan',
    modelo: 'CS55 Plus',
    ultimoModelo: true
}
//array
const frutas = ['Aguacate','Guineo','Mango','Uva']
//functions

function Saludar () {
}

console.log(nombre)
console.log(edad)
console.log(mayorEdad)
console.log(dinero)
console.log(graduado)
console.log(simboloUnico)
console.log(valorPi)

console.log(`La marca de este carro es: ${Carro.marca} \nEl modelo de este carro es: ${Carro.modelo}`)
console.log(frutas)
