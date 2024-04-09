const isActive = true
const hasPermission = false

//Conversion implicita

const result = 5 > 3
console.log(result)

const name = 'Platzi'
console.log(!!name)

//Conversion explicita

const value = 0
const explicitBoolean = Boolean(value)
console.log(explicitBoolean)


//Symbol identificador unico

const uniqueId = Symbol('id')
const symbol1 = Symbol(1)
const symbol2 = Symbol(1)
console.log(symbol1 === symbol2)

const ID = Symbol('id')
let user = {}
user = '1234'
console.log(user)