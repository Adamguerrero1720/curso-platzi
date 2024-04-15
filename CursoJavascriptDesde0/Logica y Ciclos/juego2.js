let intento = 3;
let palabraOculta = "javascript"


function verificacion (suposicion, palabraOculta){
    if(suposicion === palabraOculta){
        return true
    } 
    return false
}

function juego ()  {
    alert("Bienvenido a adivinanzas")
    alert("Tienes 3 intentos")
    alert("La pista es un lenguaje de programacion")
}

juego()

while (intento > 0){
    let suposicion = prompt("Adivina la palabra:")
    if (verificacion(suposicion,palabraOculta)){
        alert("Correcto")
        break
    } else{
        intento--
        if (intento > 0){
            alert(`Incorrecto, te quedan ${intento} intentos restantes`)
        } else{
            alert(`Agotaste tus intentos, la palabra oculta era ${palabraOculta}`)
        }
    }
}

