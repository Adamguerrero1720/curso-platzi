//Enlace implicito o implicit binding

const house = {
    dogName: 'Fido',
    dogGreeting: function(){
        console.log(`Hi, I'm ${this.dogName}`)
    }
}

house.dogGreeting()

//Enlace Explicito o Explicit binding

function dogGreeting (){
    console.log(`Hi, I'm ${this.dogName}`)
}

const newHouse = {
    dogName: 'Coconut'
}

dogGreeting.call(newHouse)

function newdogGreeting (owner, address){
    console.log(`Hi, I'm ${this.dogName} and I lived with ${owner} on ${address}`)
}

const owner = 'Lucy'
const address = 'Main st'
newdogGreeting.call(newHouse,owner, address)