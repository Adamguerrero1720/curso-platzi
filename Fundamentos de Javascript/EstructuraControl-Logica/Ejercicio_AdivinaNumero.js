const numeroSecreto = Math.floor(Math.random() * 5 + 1)
const prompt = require('prompt-sync')()
const numeroJugador = parseInt(prompt("Adivina el numero secreto entre 1 al 10"))

console.log(`Este es el numero con el que juegas ${numeroJugador}`)

if (numeroJugador === numeroSecreto){
    console.log(`Felicidades el ${numeroSecreto} era el ganador`)
} else {
    console.log(`Lo siento, el numero ganador era ${numeroJugador}`)
}