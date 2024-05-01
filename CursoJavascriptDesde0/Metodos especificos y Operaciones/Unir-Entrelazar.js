// Metodo que no modifica el array original

const morseCode1 = ['....','---']
const morseCode2 = ['.-..','.-']

const morseCodeMessage = morseCode1.concat(morseCode2)

console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessage)

//Combine with concat() way 2 para mas de 2 arrays

const morseCodeMessage2 = [].concat(morseCode1,morseCode2)
console.log(morseCodeMessage2)


//Combine with Spread Operator se crea una funcion que permita combinar arrays

function combineMorseMessages (morseCode1, morseCode2){
    console.log([...morseCode1, ...morseCode2])
}

combineMorseMessages(morseCode1, morseCode2)

const number = [1,2,3]
const string = 'String'

combineMorseMessages(number,string)

//Join() junta los caracteres de diferentes arrays, va de la mano con el concat o spread operator

const morseCodeMessageStrings = morseCodeMessage.join('|')

console.log(morseCodeMessageStrings)
