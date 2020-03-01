// Comando para establecer la conexion
var socket = io();

var label = $("#lblNuevoTicket");

// On para escuchar
socket.on("connect", function() {
    console.log("Conectado al servidor!");
});

socket.on("disconnect", function() {
    console.log("Perdimos conexion con el servidor");
});

socket.on("estadoActual", function(resp) {
    //let ultimoString = JSON.stringify(resp.ultimoTicket); // "Ticket 0" Salia con comillas
    label.text(resp.ultimoTicket);
});

$("button").on("click", function() {

    socket.emit("siguienteTicket", null, function(siguienteTicket) {

        label.text(siguienteTicket);

    });

});