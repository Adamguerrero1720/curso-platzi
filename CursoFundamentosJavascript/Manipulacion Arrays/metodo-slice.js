//Metodo que iteran sobre el array pero no lo modifica (inmutabilidad)

const randomNumbers = [3,1,48,103,42,13]

console.log(randomNumbers.slice(2))
console.log(randomNumbers.slice(1,4))

//Empezar del final al inicio
console.log(randomNumbers.slice(-3))
console.log(randomNumbers.slice(2,-1))