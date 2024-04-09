/* 
let numeroSecreto
let respuesta = input("ingresa el numero que deseas adivinar:")

function random (numeroSecreto) {
    numeroSecreto = Math.random(1,10)
}

if (random === respuesta){
    console.log(`Felicidades haz adivinado el numero aleatorio`)
} else{
    console.log(`Lo sentimos, intenta de nuevo`)
}
*/

const numeroSecreto = Math.floor(Math.random()*10 +1)

let jugada = parseInt(prompt("Adivine el numero: "))

console.log(`Esta es su jugada ${jugada}`)

if (numeroSecreto === jugada){
    console.log(`Felicidades has adivinado el numero aleatorio`)
} else if (jugada < numeroSecreto){
    console.log(`El numero es muy bajo`)
} else{
    console.log(`El numero es muy alto`)
}