function moverBoton() {
    var boton = document.getElementById('noBtn');
    var randomX = Math.floor(Math.random() * (window.innerWidth - boton.offsetWidth));
    var randomY = Math.floor(Math.random() * (window.innerHeight - boton.offsetHeight));
    boton.style.position = 'absolute';
    boton.style.left = randomX + 'px';
    boton.style.top = randomY + 'px';
}

document.getElementById('siBtn').addEventListener('click', function() {
    var contenidoEncimaH1 = document.getElementById('contenidoEncimaH1');
    contenidoEncimaH1.style.display = 'block';
});

document.getElementById('noBtn').addEventListener('click', function() {
    var contenidoEncimaH1 = document.getElementById('contenidoEncimaH1');
    contenidoEncimaH1.style.display = 'none';
});
