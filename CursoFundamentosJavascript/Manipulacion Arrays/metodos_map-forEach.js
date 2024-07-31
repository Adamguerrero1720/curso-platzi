//Metodo que iteran sobre el array pero no lo modifica (inmutabilidad)

//map()
const numbers = [2,4,8,10,12]

const squareNumbers = numbers.map(num => num * num)

console.log(numbers)
console.log(squareNumbers)

//forEach()

const colors = ['red','blue','green']
const iteratedColors = colors.forEach(color => console.log(color))

console.log(colors)
console.log(iteratedColors)

//Ejercicio Practico F to C temperature map()

const temperatureFahrenheit = [32,68,95,104,212]

const temperatureCelsius = temperatureFahrenheit.map(fahrenheit => (5/9) * (fahrenheit - 32))

console.log('Temperature in Fahrenheit:',temperatureFahrenheit)
console.log('Temperature in Celsius:',temperatureCelsius)

//Ejercicio Practico suma de un array forEach()
const newNumbers = [1,2,3,4,5]
let sum = 0

newNumbers.forEach(number => sum = sum + number)

console.log('Array de numeros',newNumbers)
console.log(sum)