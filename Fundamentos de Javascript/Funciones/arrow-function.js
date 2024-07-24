/*
//Arrow function 
const greeting = function (name) {
    return `Hi, ${name}`
}
//Arrow function -> explicit return
const newGreeting = (_name) => {
    return `Hi, ${_name}`
}
//Arrow function -> implicit return
const newGreetingImplicit = _name => `Hi, ${_name}`
const newGreetingImplicitTwoParameters = (_name,lastName) => `Hi, ${_name} ${lastName}`

//Lexical binding   

const fictionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: (message) => { 
        console.log (`${this.name} says: ${message}`)
    }
}

fictionalCharacter.messageWithTraditionalFunction('~With great powers comes with great responsabilities~')
fictionalCharacter.messageWithArrowFunction('~Beware of doctor octopus~')
*/


const saludoPersonal = {
    nombre: `Adam`,
    apellido: `Guerrero Tejada`,
    mensajePersonalArrowFunction: function (mensaje) {
        console.log(`Un placer saludarle ${this.nombre} ${this.apellido}:`, mensaje)
    }
}

saludoPersonal.mensajePersonalArrowFunction(`Pase a la siguiente habitacion`)