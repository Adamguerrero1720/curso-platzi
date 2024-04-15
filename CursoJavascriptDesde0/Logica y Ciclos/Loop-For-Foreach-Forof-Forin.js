/*
for(variable; condicion; incremento){
     codigo a ejecutar
}

let list = ["eat","sleep","code","repeat"]

for (let i = 0; i < list.length; i++) {
    console.log(list[i])  
}




array.forEach(element => {
    codigo a ejecutar
});

list.forEach(item => {
    console.log(item)
});


for of arrays, strings [algo] solo funciona en arrays o strings
for (variable of objeto){
    codigo a ejecutar
}

let canasta = ["Manzana","Uva","Pera","Naranja"]

for (const fruta of canasta) {
    console.log(fruta )
}


forin ---> objetos
propiedades = valor

*/

const listadeCompras = {
    manzana: 5,
    pera: 3,
    uva: 2,
    melocoton: 1
}

for (fruta in listadeCompras) {
    console.log(fruta)
} 
for (fruta in listadeCompras) {
    console.log(`${fruta} : ${listadeCompras[fruta ]}`)
}

