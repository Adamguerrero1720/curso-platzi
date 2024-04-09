const greeting = function(name){
    return `Hi, ${name}`
}

const newGreeting = (name) => {
    return `Hi, ${name}`
}

//arrow function - implicit return

const newGreetingImplicit = (name) => `Hi, ${name}`
const newGreetingImplicitwithParameters = (name, lastname) => `Hi, I'm ${name} ${lastname}`


//Lexical binding
const fictionalCharacter = {
    name: 'Uncle Ben',
    messagewithTraditionalFunction: function(message) {
        console.log(`${this.name} says: ${message}`)
    },
    messagewithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}

fictionalCharacter.messagewithTraditionalFunction('With great powers comes with greats responsabilities')
fictionalCharacter.messagewithArrowFunction('Spiderman love mary j')