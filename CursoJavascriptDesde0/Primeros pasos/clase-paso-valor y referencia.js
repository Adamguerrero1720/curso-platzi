//paso por valor
let x = 1
let y = 'Hola'
let z = null

let a = x
let b = y
let c = z

console.log(a,b,c,x,y,z)


//paso por referencia

let frutas = {
    naranja:'🍊'
}

let vegetales = frutas

vegetales.naranja = '🥦'

console.log(frutas)

let ropa = {
    blusa:'👚'
}

ropa.pantalon = '👖'
console.log(ropa)