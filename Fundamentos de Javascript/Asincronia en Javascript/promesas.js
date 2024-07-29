//Las promesas nos ayudan a que el codigo pase de ser sincrono a asincrono

//Estados de una promesa: pending(la promesa esta pendiente), fullfielled (cuando la promesa se resuelva), rejected (la promesa no se resolvio)

//Callbacks: Resolve (se resolvio de forma satisfactoria), reject (La promesa no se puede resolver)

//then() -> se ejecuta cuando la promesa se resuelve, estado fullfilled y callbacks resolve
//catch() -> la promesa no se resuelve aca se obtiene el error y nos dice que pasa cuando la promesa no se resuelve

const promise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        let operationSuccesful = true
        if (operationSuccesful) {
            resolve("La operacion fue exitosa")
        }else{
            reject("Fallo la operacion")
        }
    }, 2000)
})

promise
    .then((successMessage) => {
        console.log(successMessage)
    })
    .catch((errorMessage) =>{
        console.log(errorMessage)
    })

