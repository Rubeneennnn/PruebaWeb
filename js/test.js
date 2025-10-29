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
}