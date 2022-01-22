//Función para desencriptar el mensaje ingresado por el usuario.
function desencriptar(textoEntrada){
    
    var textoDesencriptado = "";

    for (var i = 0; i < textoEntrada.length; i++){

        textoDesencriptado = textoEntrada.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
    } 

    return textoDesencriptado;
}

//Declarando el boton y dandole un evento.

var botonDesencriptar = document.getElementById("btn-desencriptar");

botonDesencriptar.addEventListener("click", function (event){
    event.preventDefault();

    var mensajeIngresado = document.getElementById("input-texto").value;

    if (validarMensaje(mensajeIngresado)){
        var mensajeDesencriptado = desencriptar(mensajeIngresado);

        var mensajeResuelto = document.getElementById("msg");
        mensajeResuelto.value = mensajeDesencriptado;

        mostrarError("");
        cambiarMensaje("Mensaje desencriptado:")
    }
});