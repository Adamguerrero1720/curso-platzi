//Metodo que iteran sobre el array pero no lo modifica (inmutabilidad)

//find()

const multiplesOfFive = [5,10,15,20,25]
const firstNumberGreaterThanTen = multiplesOfFive.find(number => number > 20)
console.log(multiplesOfFive)
console.log(firstNumberGreaterThanTen)

//findIndex()
const IndexFirstNumberGreaterThanTen = multiplesOfFive.findIndex(number => number > 15)
console.log(IndexFirstNumberGreaterThanTen)
