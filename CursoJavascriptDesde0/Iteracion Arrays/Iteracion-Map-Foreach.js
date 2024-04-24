//Metodo que iteran sobre el array
//Metodo que no modifican el array original (Inmutabilidad)

//Map() devuelve en forma de array

// const numbers = [1,2,3,4,5]
// const numbersPotention = numbers.map(num => num *num)

// console.log(numbers)
// console.log(numbersPotention)

//forEach() no crea un nuevo array, nos devuelve el mismo numero

// const colors = ['Red','White','Blue']
// const iteratedColors = colors.forEach(color => console.log(color))

// console.log(colors)
// console.log(iteratedColors)

//Excercise: Fahrenheit to Celsius conversion

// const temperaturesFahrenheit = [32,68,95,104]
// const temperaturesCelsius = temperaturesFahrenheit.map(fahrenheit => (5/9)*(fahrenheit - 32))

// console.log('Temperatures in Fahrenheit', temperaturesFahrenheit)
// console.log('Temperatures in Celsius', temperaturesCelsius)

//Excercise sum of elements in an array

const number = [1,2,3,4,5]
let sum = 0

number.forEach(number => {sum += number})

console.log('Array of numbers:',number)
console.log ('Sum of array:', sum)