//1. Tipo entero y decimal
const entero = 42
const decimal = 3.14
console.log(typeof entero, typeof decimal)

//2. Notacion cientfica
const cientifico = 5e3
console.log(typeof cientifico)

//3. Infinito y Nan
const infinito = Infinity
const noNumero = NaN
console.log(typeof infinito, typeof noNumero)

//Operaciones Aritmeticas

//1. Suma, resta, multiplicacion y division

const suma = 1 + 3
const resta = 3 - 1
const multiplicacion = 5 * 5
const division = 20 / 5

console.log(suma)
console.log(resta)
console.log(multiplicacion)
console.log(division)

//2. Modulo y exponenciacion

const modulo = 22 % 5
const exponenciacion = 4 ** 4
console.log(modulo)
console.log(exponenciacion)

//3. Precicion

const sumaPrecisa = 0.1 + 0.2
console.log(sumaPrecisa)
console.log(sumaPrecisa.toFixed(1))

//Operaciones avanzadas

const raizCuadrada = Math.sqrt(100)
const valorAbsoluto = Math.abs(-3)
const aleatorio = Math.random()

console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)
