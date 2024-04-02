//Tipo entero y decimal
const entero = 42
const decimal = 3.14

console.log(typeof entero, typeof decimal)

//Notacion cientifica
const cientifico = 5e3

//Infinitos y NaN
const infinito = Infinity
const noEsunNumero = NaN

//Operaciones artimeticas

const suma = 3+4
const resta = 3-4
const multiplicacion = 3*4
const division = 3/4

console.log(suma, resta, multiplicacion, division)

//Modulo y exponenciacion

const modulo = 12%4
const potencia = 2 ** 3

console.log(modulo, potencia)

//Precision

const resultado  = 0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(2))
console.log(resultado === 0.3)

//Operaciones avanzadas

const raizCuadrada = Math.sqrt(100)
const valorAbsoluto = Math.abs(-7)
const aletorio = Math.random()

console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aletorio)