
function calcularDescuento (precio, porcentajeDescuento){
    const descuento = (precio * porcentajeDescuento)/100
    const precioDescuento = (precio - descuento)
    
    return precioDescuento
}


const precioOriginal = 100
const porcentajeDescuento = 20
const precioFinal = calcularDescuento(precioOriginal, porcentajeDescuento)

console.log('Precio Original: $' + precioOriginal)
console.log('Descuento: $' + porcentajeDescuento)
console.log('Precio Final: $' + precioFinal)