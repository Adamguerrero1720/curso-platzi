//String primitivos
const stringPrimitivo = 'Soy un string primitivo'
console.log(typeof stringPrimitivo)

const stringPrimitivotoo = String('Soy un string primitivo tambien')
console.log(typeof stringPrimitivotoo)

//String objeto
const stringObjeto = new String('Soy un string objeto')
console.log(typeof stringObjeto)

//Acceder a caracteres

const Saludo = 'Hola Como estas?'

console.log(Saludo[2])
console.log(Saludo.charAt(2))
console.log(Saludo.indexOf('como'))
console.log(Saludo.lastIndexOf('o'))
console.log(Saludo.slice(2,7))
console.log(Saludo.length)
console.log(Saludo.toLowerCase())
console.log(Saludo.toUpperCase())

const saludoDivido = Saludo.split(' ')
console.log(saludoDivido)
console.log(saludoDivido[0])

const saludoconEspacios = 'Hola Mundo'
const saludosinEspacios = saludoconEspacios.trim()
console.log(saludosinEspacios)

const saludoOriginal = 'Hola Mundo'
const nuevoSaludo = saludoOriginal.replace('Hola','Adios')
console.log(nuevoSaludo)