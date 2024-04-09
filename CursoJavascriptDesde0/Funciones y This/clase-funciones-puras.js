//Funciones puras
//Side effects
/* 
1. Modificar variables globales
2. Modificar parametros de una funcion
3. Solicitudes HTTP
4. Imprimir mensajes en pantallas
5. Manipulacion del DOM
6. Obtener hora actual
 */

function sum (a,b){
    return a + b
}

//Funciones impuras
function sum (a,b){
    console.log('A: ', a)
    return a + b
}

function square(x){
    return x*x}

function addTen(y){
    return y+10}

const number=5

const finalResut = addTen(square(number))
console.log(finalResut)