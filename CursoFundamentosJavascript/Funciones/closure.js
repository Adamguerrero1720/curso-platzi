
function createCounter() {
    let count = 0
    return function(){
        count++
        console.log(count)
    }
}

const counter1 = createCounter()
counter1()
counter1()

const counter2 = createCounter()
counter1()

function outer (){
    let message = 'Hello, '

    function inner(name){
        console.log(`${message}`, name)
    }
    return inner
}

const closureA = outer()
const closureB = outer()

closureA("Juan")
closureB("Pedro")
