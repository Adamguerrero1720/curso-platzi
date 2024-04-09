const owner = 'Lucy'
const address = 'main st'

function dogGreeting (owner, address){
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} in ${address}`)
}

const newHouse = {
    dogName:'Coconut'
}

dogGreeting.call(newHouse, owner, address)

const necessaryValues = [owner, address]
dogGreeting.apply(newHouse, necessaryValues)



const bindingwithBind = dogGreeting.bind(newHouse, owner, address)
bindingwithBind()


const caricatura = {
    nombre: 'Vaca y Pollito'
}

function recuerdo(personaje){
    console.log(`${this.nombre} era mi caricatura favorita.
    Me encantaba ver las aventuras de ${personaje}`)
}


recuerdo.call(caricatura, 'Pollito')