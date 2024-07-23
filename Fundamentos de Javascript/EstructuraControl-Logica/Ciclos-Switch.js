let expr = "Mangos"

switch (expr) {
    case "Naranjas":
        console.log("Las Naranjas cuestan $20 pesos")
        break;
    case "Uvas":
        console.log("Las Uvas cuestan $10 pesos")
        break;
    case "Pera":
        console.log("Las Pera cuestan $40 pesos")
        break;
    case "Sandia":
        console.log("Las Sandia cuestan $35 pesos")
        break;

    default:
        console.log(`Lo siento, no tenemos ${expr} disponibles en nuestro mercado`)
        break;
}

console.log('Algo mas con lo que te pueda ayudar?')