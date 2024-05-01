//Filter()
const numbers = [1,2,3,4,5,6,7,8,9,10]
const evenNumbers = numbers.filter(number => number % 2 === 0)

console.log(numbers)
console.log(evenNumbers)

//Reduce() Caso 1

const numberReduce = [1,2,3,4,5]
const sum = numberReduce.reduce((accumlutaor, currentValue) => accumlutaor + currentValue, 0)

console.log(numberReduce)
console.log(sum)

//Reduce() Caso 2

const words = ['Buisness','Apple','Banana','Bit','Banana','Apple','Apple']

const wordFrequency = words.reduce((accumlutaor,currentValue)=> {
    if (accumlutaor[currentValue]) {
        accumlutaor[currentValue]++
    } else {
        accumlutaor[currentValue] = 1
    }
    return accumlutaor
},{})

console.log(wordFrequency)


//Excersie: Passing Grade Average

const grades = [90,60,86,93,79,67,97,70,80,89,79,83,76,46,40,79,39,20,81]

const passingGrades = grades.filter(grade => grade >=70)

const averagePassingGrade = passingGrades.reduce((sum, grade) => sum + grade, 0) / passingGrades.length

console.log('Promedio de notas:',averagePassingGrade)