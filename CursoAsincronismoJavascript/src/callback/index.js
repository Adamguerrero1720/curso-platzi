//Callback, ejemplo de calculadora
function addition(num1,num2) {
    return num1 + num2
}

function subtraction(num1,num2) {
    return num1 - num2
}
function multiplication(num1,num2) {
    return num1 * num2
}
function division(num1,num2) {
    return num1 / num2
}
//el tercer parametro es el que llama la funcion para realizar la operacion aritmetica.
function calculator(num1,num2, callback) {
    return callback(num1, num2)
}

console.log(`The result of the operations is:`,calculator(10, 2, multiplication))

//Uso de setTimeOut
setTimeout(function () {
    console.log('Hola JavaScript')
}, 2000)

//Funcion de saludo

function greeting(name) {
    console.log(`Hola ${name}`)
}

setTimeout(greeting, 2000, `Oscar`)