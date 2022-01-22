//Función para copiar el mensaje de salida.
function copiar() {
    var copiarTexto = document.querySelector("#msg");
    copiarTexto.select();
    document.execCommand("copy");

  }
  
  var botonCopiar = document.querySelector("#btn-copy");
  botonCopiar.addEventListener("click", copiar);