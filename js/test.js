function Comprobar() {
    event.preventDefault()
    rdRespuestasWWW = document.getElementsByName("www")
    respuestaOk = false
    txtCheck = document.getElementById("txtCheck")
    for (radio of rdRespuestasWWW) {
        if (radio.checked) {
            txtCheck.innerHTML = "Respuesta: " + radio.value
            if (radio.value == "timcorrect") {
                respuestaOk = true
            }
        }
    }
    if (respuestaOk) {
        txtCheck.innerHTML += " ¡Correcto!"
        document.getElementById("siguiente").innerHTML = '<a href="test2.html">Siguiente pregunta</a>'
    } else {
        txtCheck.innerHTML += " Incorrecto. Inténtalo de nuevo."
    }
}