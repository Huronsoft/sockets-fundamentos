var socket = io();

socket.on('connect', function() {

    console.log('Conectado al servidor ');
});

//son para escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexion con el servidor');
});

// son para enviar informacion 
socket.emit('enviarMensaje', {
    usuario: 'HURON',
    mensaje: 'hola huron'

}, function(resp) {

    console.log('respuesta server: ', resp);

});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);

});