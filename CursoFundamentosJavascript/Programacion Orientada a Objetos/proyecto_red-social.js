
const userDatabase = [
    {
        username: 'Juan',
        password: '1234',
    },
    {
        username: 'Pedro',
        password: '1234',
    },    
    {
        username: 'Agustina',
        password: '1234',
    },
    {
        username: 'Saka',
        password: '1234',
    }
]

const userTimeLine = [
    {
        username: 'Juan',
        timeline: 'Eat, code, repeat',
    },
    {
        username: 'Pedro',
        timeline: '5 + 5 = 10',
    },    
    {
        username: 'Agustina',
        timeline: 'Nada',
    },
    {
        username: 'Saka',
        timeline: 'Todo',
    }
]

const userLogIn = prompt("Ingrese su usuario:");        
const passwordLogIn = prompt("Ingrese su clave:");

// Función para encontrar al usuario en la base de datos
function findUser(username, password) {
    return userDatabase.find(user => user.username === username && user.password === password);
}

let user = findUser(userLogIn, passwordLogIn);

if (user) {
    // Encontrar el mensaje de timeline del usuario
    let userTimeline = userTimeLine.find(t => t.username === userLogIn);
    if (userTimeline) {
        alert(userTimeline.timeline);
    } else {
        alert("Error, no se encontró el timeline del usuario.");
    }
} else {
    alert("Error, usuario o contraseña incorrectos.");
}
