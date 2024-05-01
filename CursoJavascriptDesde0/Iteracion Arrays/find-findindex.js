// find() devuelve el primer elemento que cumpla con la condicion

const number = [5,10,15,20]
//forma original de escribir una funcion
const firstNumber = number.find(function (number){
    return number > 10
} )

console.log(firstNumber)

//findIndex() devuelve el indice

const randomNumbers = [23,12,49,20,45,43]
//arrow function
const indexNumber = randomNumbers.findIndex(number => number > 45)

console.log(randomNumbers)
console.log(indexNumber)

//Excersice: Raffle Winner Verification Program

const winningParticipants = [
    {id: 1, name: 'Jenny', ticketNumber: 1},
    {id: 5, name: 'Lola', ticketNumber: 5},
    {id: 21, name: 'Kael', ticketNumber: 21},
    {id: 45, name: 'Juan', ticketNumber: 45}
]

function findWinnerbyName (name) {
    const winner = winningParticipants.find(winningParticipants => winningParticipants.name === name)
    return winner || "No winner with this name"
}

function findIndexWinnerbyName (ticketNumber){
    const index = winningParticipants.find(winningParticipants => winningParticipants.ticketNumber === ticketNumber)
    return index !== -1 ? index : "No winner found with that ticket number"
}

function displayWinnerInfo (winner){
    if (winner !== undefined && winner !== null && winner !== "No winner with this name") {
        console.log("Winner Information: ", winner)
    } else {
        console.log("No winner found")
    }
}

const winnerByName = findWinnerbyName("Juan")
const winnerByTicket = findIndexWinnerbyName(6)

displayWinnerInfo(winnerByName)
console.log("Index of winner by Ticket", winnerByTicket)