//Inmutables

//every()
const ages = [21, 25, 30, 40]

const allAreAdults = ages.every( age => age > 30)

console.log(ages)
console.log(allAreAdults)

//some()

const atLeastOneIsOver30 = ages.some(age => age > 30)

console.log(ages)
console.log(atLeastOneIsOver30)