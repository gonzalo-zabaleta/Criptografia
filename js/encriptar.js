/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var letrasSeleccionadas = ["e", "i", "a", "o", "u"];
var letrasCambiadas = ["enter", "imes", "ai", "ober", "ufat"];


//Función para encriptar el mensaje enviado por el usuario.
function encriptar(textoEntrada){


var textoEncriptado = "";

for (var i = 0; i < textoEntrada.length; i++){

        var bandera = true;
        var letraSeleccionada = 0;

        while (letraSeleccionada < letrasSeleccionadas.length){

                if (textoEntrada[i] == letrasSeleccionadas[letraSeleccionada]) {
                        textoEncriptado = textoEncriptado + letrasCambiadas[letraSeleccionada];
                        bandera = false;
                        break;

                } 

                letraSeleccionada++;
        }

        if (bandera){
                textoEncriptado = textoEncriptado + textoEntrada[i];
        } 
}

        return textoEncriptado;
}




//Declarando el boton y el texto ingresado por el usuario para poder encriptarlo.
var botonEncriptar = document.getElementById("btn-encriptar");

botonEncriptar.addEventListener("click", function (event) {
        event.preventDefault();

        var mensajeIngresado = document.getElementById("input-texto").value;


        if (validarMensaje(mensajeIngresado)){
                var mensajeEncriptado = encriptar(mensajeIngresado);

                var mensajeResuelto = document.getElementById("msg");
                mensajeResuelto.value = mensajeEncriptado;

                mostrarError("");
                cambiarMensaje("Mensaje encriptado:");
        }
        
});



//Función para cambiar el mensaje que se debe mostrar arriba del input-text.
function cambiarMensaje(frase){

       var  texto = document.getElementById("texto-mensaje");
         texto.textContent = frase;

}


//Función para validar que el mensaje ingresado cumpla con las normas.
function validarMensaje(textoIngresado){
        
        
        if (/[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/.test(textoIngresado) || (/[A-Z]/.test(textoIngresado))){
        
                mostrarError("Recuerdá, no se permiten caracteres especiales.");
                return false;        
                
        } else if (textoIngresado == ""){
                
                mostrarError("Introduzca un mensaje, por favor.");
                return false;

        } else {
                return true;
        }

}


//Función para mostrar un mensaje de error en caso de no cumplir con las normas.
function mostrarError(frase){

        var mensajeError = document.querySelector("#mensaje-error");
        mensajeError.textContent = frase;
}
