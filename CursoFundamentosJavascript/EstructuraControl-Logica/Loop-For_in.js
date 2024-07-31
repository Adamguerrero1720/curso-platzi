/*
for in--> objetos
los objetos estan compuestos de propiedades que tienen que tener un valor propiedad = valor

for (variable in object ){
codigo
}
*/

const listaCompras = {
    manzana: 4,
    pera:1, 
    chinola: 5,
    lechoza: 3
}

for (frutas in listaCompras) {
    console.log(frutas)
}

for (frutaa in listaCompras) {
    console.log(`${frutaa}: ${listaCompras[frutaa]}`)
}
