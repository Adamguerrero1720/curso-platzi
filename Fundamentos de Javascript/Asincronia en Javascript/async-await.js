//Se devuelve una promesa, se pasa a la seccion de webAPI

//Diferencias: forma mas legible de leer los pasos

/*
function fecthData() {
    fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
}
*/
//Funcion Async
async function fecthData() {
    try {
        let response = await fetch("https://rickandmortyapi.com/api/character")
        let data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

//Funcion For await of
const urls = [
    "https://rickandmortyapi.com/api/character",
    "https://rickandmortyapi.com/api/location",
    "https://rickandmortyapi.com/api/episode"
]

async function fecthNewData() {
    try {
        for await (let url of urls){
            let response = await fetch(url)
            let data = await response.json()
            console.log(data)
        }
    } catch (error) {
        console.log(error)
    }
}

//Reto personal

async function fecthCountries() {
    try {
        let response = await fetch("https://restcountries.com/v3.1/all")
        let data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}