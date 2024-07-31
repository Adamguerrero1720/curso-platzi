/*// Capacidades que tienen las funciones al igual que otros objetos

// 1. Pasar funciones como argumentos -> callback

function a () {}
function b (a) {}
b(a)

// Retornar funciones

function a () {
  function b () {}
  return b
}

// Asignar funciones a variables -> Expresion de funcion

const a = function () {}

// Tener propiedades y metodos

function a () {}
const obj = {}
a.call(obj)

// Anidar funciones -> Nested functions

function a () {
  function b () {
    function c () {
    
    }
    c()
  }
  b()
}
a()*/

// ¿Es posible almacenar funciones en objetos? Si, un método es esencialmente una función que opera sobre propiedades o comportamientos de un objeto.
const fuvol = {
    jugador: "CR7",
    narrador: function narrarGol() {
        console.log("Golllllllllllllllllll")
    }
}

fuvol.narrador()