//Como crear un array?

//1. new array() o array()

const fruits = Array('apple','pera','banana')
console.log(fruits)

const justOneNumber = Array(12)
console.log(justOneNumber)

const numbers = Array(12, 13, 14, 15)
console.log(numbers)

//2. Array literal syntax

const oneNumber = [4]
console.log(oneNumber)

const empryArray = []
console.log(empryArray)

const recipeIngredients = [
    'Flour',
    12,
    true,
    undefined,
    {
        ingredient: 'Milk', quantity: 'One Cup'
    }
]

console.log(recipeIngredients)

//Accediendo a un array

const firstFruit = fruits[0]
console.log(firstFruit)

//Longitud de un array

const lenghtFruit = fruits.length
console.log(lenghtFruit)


//-----------------------------Mutability-----------------------------------

fruits.push('Watermelon')
console.log(fruits)
fruits.pop('Watermelon')
console.log(fruits)

//-----------------------------Inmutability-----------------------------------

const newFruits = fruits.concat('grape','kiwi')
console.log(fruits)
console.log(newFruits)

//Checking arrays with array.isarray()

const isArray = Array.isArray(fruits)
console.log(isArray)


//----------------------------Practical Excersie-----------------------------------------//




const numeroPares = [2,4,6,8,10]
let suma = 0

for (let i = 0; i < numeroPares.length; i++) {
    suma = suma + numeroPares[i];
}

console.log(suma)