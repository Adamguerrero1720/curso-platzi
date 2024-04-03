/*
Funciones: bloque de codigo que se reutiliza para simplificar el proceso de resolucion
Metodo: funciones asociadas a objetos

function a () {}
function b (a) {}

function a(){
    function b(){}
    return b
}
const a = function () {}

function a(){}
const obj={}
a.call(obj)

function a(){
    function b(){
        function c(){

            }
        c()
    }
    b()
}
a()
*/
const rocket={
    name:'Falcon 9',
    launchMessage: function launchMessage(){
        console.log('ðŸ”¥')
    }
}
rocket.launchMessage()