//Usuario agregue un nuevo libro al stack
//Usuario remueva el ultimo libro agregado al stack
//Mostrar el stack
let bookname
const Libreria = []
function agregarLibro(bookname) {
    Libreria.push(bookname)
}

function removerLibro() {
    Libreria.pop()
}

function mostrarLibros () {
    console.log(Libreria)
}

function JugarBiblioteca (){
    let opcion 
    do {
        alert(`Bienvenido a su biblioteca \n
        Introduzca el numero de la accion que desea realizar:
        1. Agregar libro:
        2. Remover libro:
        3. Mostrar estante:
        4. Salir
        `)
        opcion = parseInt(prompt("Ingrese el numero de su opcion"))
        
        if (opcion === 1) {
            bookname = prompt("Ingrese el nombre del libro")
            agregarLibro(bookname)
        } else if (opcion === 2) {
            removerLibro()
        } else if (opcion === 3) {
            mostrarLibros()
        } else {
            return false
        }
    } while (opcion <= 4)
} 

JugarBiblioteca()