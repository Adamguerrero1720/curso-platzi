//Inmutabilidad
//Metodo de busqueda
const numbers = [1,2,3,4,5,2]

const result1 = numbers.includes(3)
console.log(result1)

const result2 = numbers.includes(8)
console.log(result2)

const indice = numbers.indexOf(2)
console.log(indice)

const ultimoIndice = numbers.lastIndexOf(2)
console.log(ultimoIndice)