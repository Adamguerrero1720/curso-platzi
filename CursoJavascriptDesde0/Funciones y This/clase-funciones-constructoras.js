const personalizedMessage = () => 'Goodbye'

function Rocket(name, ownMessage){
    this.name = name
    this.launchmessage = ownMessage
}

const falcon9Rocket = new Rocket('Falcon 9', personalizedMessage)
const falconheavyRocket = new Rocket('Falcon heavy', personalizedMessage)

console.log(falcon9Rocket.name)
console.log(falcon9Rocket.launchmessage())


const RocketWithArrowFunctions = (name, ownMessage) => ({
    name: name,
    launchmessage: ownMessage
})

const personalizedMessageForArrowFunction = () => 'Succesfull launch'
const falcon9Rocket1 = RocketWithArrowFunctions('Falcon 9', personalizedMessageForArrowFunction)

console.group(falcon9Rocket1.name)
console.group(falcon9Rocket1.launchmessage())