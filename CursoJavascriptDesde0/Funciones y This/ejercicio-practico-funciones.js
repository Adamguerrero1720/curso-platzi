//Create powerfullGirl

function powerpuffGirl (name, color, superpower) {
    this.name = name,
    this.color = color,
    this.superpower = superpower,
    this.isLeader = false

    this.displayInfo = function () {
        console.log(`The powerpuff girls information:
        Name: ${this.name}
        Color: ${this.color}
        SuperPower: ${this.superpower}
        ${this.isLeader ? `Leader: Yes` :`Leader: No`}
        `)

    this.becomeLeader = function (){
        this.isLeader = true
        console.log(`${this.name} has become the leader of the powerpuff girls`)
    }
    }
}

const blossom = new powerpuffGirl ('Blossom', 'Pink', 'Ice Breath')
const butterCup = new powerpuffGirl ('ButterCup', 'Gren', 'Super Strength')
const bubbles = new powerpuffGirl ('Bubbles', 'Blue', 'Fly')

blossom.displayInfo()
butterCup.displayInfo()
bubbles.displayInfo()

blossom.becomeLeader()

blossom.displayInfo()
butterCup.displayInfo()
bubbles.displayInfo()
