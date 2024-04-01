const primeraOpcion = 'Comillas simples'
const segundaOpcion = "Comillas simple"
const terceraOpcion = `Comillas simple`


//1. Concatenacion: Opcion +
const direccion = 'Calle falsa123'
const ciudad = 'Springfield'
const direccionCompleta = direccion +', '+ ciudad
console.log(direccionCompleta)

//2. Concatenacion: Templeate literales
const Nombre = 'Adam'
const Pais = 'RD'
const Presentacion = `Hola, soy ${Nombre} de ${Pais}`
console.log(Presentacion)

//3. Concatenacion: join()
const primeraParte = 'RD la tiene'
const segundaParte = 'Mexico buena cultura'
const terceraParte = 'Tacos'
const pensamiento = [primeraParte, segundaParte, terceraParte]
console.log(pensamiento.join(' '))

//4. Concatenacion: concat()
const hobbie1 = '⚽'
const hobbie2 = '🏀'
const hobbie3 = '🎾'
const hobbies = "Mis hobbies son:".concat(hobbie1, ',',hobbie2, ',', hobbie3)
console.log(hobbies)

//caracteres de escape
//const whatDoIDo = 'I'm software Engineer'
//1. Escape alternativo
const whatDoIDo = "I'm software Engineer"
console.log(whatDoIDo)
//2. Barra invertida
const barraInvertida = 'I\'m software Engineer'
console.log(barraInvertida)
//3. Templeate literals
const escapeComillaInvertida = `I'm software Engineer`
console.log(escapeComillaInvertida)

//Escritura de Strings Largos
const poema = 'Las rosas son rojas,\n' +
            'Las violetas azules,\n' +
            'Caracter inesperado,\n'
console.log(poema)

const poema2 = 'Las rosas son rojas,\n\
Las violetas azules,\n\
Caracter inesperado.'
console.log(poema2)

const poema3 = `Las rosas son rojas,
Las violetas azules,
Caracter inesperado.`
console.log(poema3)