

const cow = 20
const countCow = new Promise(function (resolve, reject) {
    if (cow > 15){
        resolve(`We have ${cow} cows on the farm`)
    } else {
        reject(`There is no cows on the farm`)
    }
})    

countCow.then((result) => console.log(result))
        .catch((error) => console.log(error))


