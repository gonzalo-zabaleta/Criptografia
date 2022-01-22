//Declarando el boton y dandole una función, para que limpie el input-texto del ingreso del mensaje. 
var botonLimpiar1 = document.getElementById("btn-limpiar1");
botonLimpiar1.addEventListener("click", function(event){
    event.preventDefault();

    mostrarError("");

    var textoEntrada = document.getElementById("input-texto");
    textoEntrada.value = "";

});


//Declarando el boton y dandole una función, para que limpie el input-texto de la salida del mensaje.
var botonLimpiar2 = document.getElementById("btn-limpiar2");
botonLimpiar2.addEventListener("click", function(event){
    event.preventDefault();

    var textoSalida = document.getElementById("msg");
    textoSalida.value = "";

    cambiarMensaje("Mensaje por mostrar...");
});