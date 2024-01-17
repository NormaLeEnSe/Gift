var cancion; // Declara la variable cancion de manera global

function abrirSobre() {
    var sobre = document.getElementById('sobre');
    var mensajes = document.getElementsByClassName('mensaje');

    // Oculta el sobre
    sobre.style.display = 'none';

    // Muestra los mensajes uno por uno con un intervalo de tiempo
    for (var i = 0; i < mensajes.length; i++) {
        mostrarMensajeConRetraso(mensajes[i], i * 2000); // Ajusta el intervalo según sea necesario
    }

    // Reproduce la canción solo si no se está reproduciendo
    if (cancion.paused) {
        cancion.play();
    }
}

function mostrarMensajeConRetraso(elemento, retraso) {
    setTimeout(function() {
        elemento.style.display = 'block';
    }, retraso);
}

document.addEventListener('DOMContentLoaded', function() {
    // Asigna el elemento de audio a la variable cancion
    cancion = document.getElementById('miCancion');
});
