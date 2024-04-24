// const cartas = ['A','B','C','D','A','B','C','D','A','B','C','D']
// const mazoAzar = []

// function shuffle (cartas){
//     const cartaAzar = Math.floor(Math.random() * cartas.length);
//     const cartaElegida = cartas[cartaAzar];
//     return cartaElegida;
// }


// function MazoCompleto (){
//     while (mazoAzar.length < 24) {
//         const carta = shuffle(cartas);
//         mazoAzar.push(carta);
//     }
// }

// MazoCompleto();
// console.log(mazoAzar.splice);


const deck = ['A','B','C','D','A','B','C','D','A','B','C','D','A','B','C','D']

//Fisher-Yates Algorithm
function shuffleDeck(){
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i]],[deck[j]] = [deck[j]],[deck[i]]
    }
}

function dealCards (numCards) {
    const dealCards = deck.splice(0,numCards)
    return dealCards
}

shuffleDeck()

const player1Hand = dealCards(5)
const player2Hand = dealCards(5)
const player3Hand = dealCards(5)

console.log('Player 1 Hand:', player1Hand)
console.log('Player 2 Hand:', player2Hand)
console.log('Player 3 Hand:', player3Hand)