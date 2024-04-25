let elementoTextoTemporizador = document.getElementById("textoTemporizador")

function enviarDatos(){
    alert("Felicidades haz completado las respuestas \n respuesta 1: " + document.getElementById("respuesta1").value)
}

function comenzar(){
    setTimeout(tiempoCumplido, 1000 * 10)
}

function tiempoCumplido(){
    alert(" Game over!!!")
}
