//Como crear un Array
//1. new Array() or Array()

const fruits = Array('Apple','Pineapple','Banana')
console.log(fruits)

const justOneNumber = Array(12)
console.log(justOneNumber)

const number = Array(1,2,3,4,5)
console.log(number)

//2. Syntaxis literal de array

const oneNumber = [4]
console.log(oneNumber)

const emptyArray = []
console.log(emptyArray)

const sports = ['Soccer', 'Rugby','Tenis']
console.log(sports)

const recetaBizcocho = [
    'Flour',
    true,
    2,
    {
        ingredient: 'Milk',
        quantity: 3
    },
    false
]
console.log(recetaBizcocho)

const firstFruits = fruits[0]
console.log(firstFruits)

//lenght propiedad

const numberOfFruits = fruits.length
console.log(numberOfFruits)

//Mutabilidad 

fruits.push('Watermelon')
console.log(fruits)

//Inmutabilidad
const newFruits = fruits.concat('Grapes', 'Kiwi')
console.log(fruits)
console.log(newFruits)

//Comprobar que sean arrays 
const isArray = Array.isArray(fruits)
console.log(isArray)

//Ejercicio Practico: suma de todos los elementos

const numerosArray = [1,2,3,4,5]
let sum = 0

for (let i = 0; i < numerosArray.length; i++) {
    sum += numerosArray[i]
}

console.log(sum)