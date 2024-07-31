/*
Funciones puras:
1. Dado una misma entrada vamos a obtener la misma salida
2. No producen efectos secundarios en el codigo (no varia en el tiempo)
    -Side effects (lo que la convierte impura):
        -Modificar variables globales
        -Modificar parametros de una funcion
        -Solicitudes HTTP (llamamdos a API's)
        -Imprimir mensajes en pantalla o consola
        -Manipulacion del DOM
        -Obtener la hora actual
    Ejemplo:

    function sum (a,b){
        return a + b
    }

Funciones impuras:

    function sum (a,b){
        console.log(`A:`, a)
        return a + b
    }   


let total = 0

function sumWithSideEffects() {
    total += a
    return total
}*/
``
//Funcion pura
function square (x) {
    return x * x
}
//Funcion pura
function addTen (y) {
    return y + 10
}

const number = 5
const finalResult = addTen(square(number))
console.log(finalResult)