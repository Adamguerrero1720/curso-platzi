//Metodos que modifican el array original (Mutabilidad)
//Splice, array.splice(posicion del elemento a eliminar, posicion elementos a introducir)
const vegetables = ['Tomate','Carrot','Brocoli','Avocado']
const removeVegetables = vegetables.splice(2,1,'Cucumber','Lettuce')
console.log(vegetables)
console.log(removeVegetables)

//Reverse, array.reverse() pondra el array de atras para alante
const numeros = [1,43,2,23,102]
const reverseNumeros = numeros.reverse()
console.log(numeros)
console.log(reverseNumeros)


//Sort() con numeros pero sin arrow funtion solo toma el primer digito ya que lo toma como un string
const unsortedNumbers = [1,7,2,8,19,192,29,3,31]
const unicodesortedNumbers = unsortedNumbers.sort()
console.log(unicodesortedNumbers)

//Sort con la arrow function para que organice de menor a mayor
const unsortedNumbers2 = [1,7,2,8,19,192,29,3,31]
const sortedNumbers = unsortedNumbers2.sort((a,b) => a-b)
// 4-18 = -14 por ende el 4 va delante del 18. Mientras en la resta de negativo el numero ira delante
console.log(unsortedNumbers)
console.log(sortedNumbers)

//Sort con strings ordena con utf16

const cities = ['New York', 'Buffalo', 'Texas','Michigan']
const sortCities = cities.sort()

console.log(cities)
console.log(sortCities)

//Fill()

const ages = [21,35,32,39]
console.log(ages.fill(0,2,4))
console.log(ages.fill(1,1,4))


