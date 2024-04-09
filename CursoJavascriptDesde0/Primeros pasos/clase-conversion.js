const string ='42'
const integer = parseInt(string)
console.log(typeof integer)

const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)

const binary = '1010'
const decimal = parseInt(binary, 2)
console.log(decimal)
console.log( typeof decimal)


//Implicit type casting

const sum = '5' +3
console.log(sum)

const sumaconBoolan = '3' + true
console.log(sumaconBoolan)

const sumaconNumero = 2 + true
console.log(sumaconNumero)
console.log('--------------')
const srtingValue = '10'
const numberValue = 10
const booleanValue = true
console.log(srtingValue + srtingValue) //Concatena
console.log(srtingValue + numberValue) //Concatena
console.log(srtingValue + booleanValue) //Concatena
console.log(numberValue + srtingValue) //Concatena
console.log(numberValue + numberValue) //Suma
console.log(numberValue + booleanValue) //Suma
console.log(booleanValue + srtingValue) //Concatena
console.log(booleanValue + numberValue) //Suma
console.log(booleanValue + booleanValue) //Suma
