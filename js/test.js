function Comprobar() {
    event.preventDefault()
    rdRespuestasWWW = document.getElementsByName("www")
    cbRespuestasHTML = document.getElementsByName("html")
    stRespuestasWEB = document.getElementById("web")
    dtRespuestasFECHA = document.getElementsByName("fecha")
    cbRespuestasBASES = document.getElementsByName("bases")
    respuestaOk = false
    txtCheck = document.getElementById("txtCheck")
    for (radio of rdRespuestasWWW) {
        if (radio.checked) {
            txtCheck.innerHTML = "Respuesta: " + radio.value
            if (radio.value == "Correcta") {
                respuestaOk = true
            }
        }
    }
    for (checkbox of cbRespuestasHTML) {
        if (checkbox.checked) {
            txtCheck.innerHTML = "Respuesta: " + checkbox.value
            if (checkbox.value == "Correcta") {
                respuestaOk = true
            }
        }
    }
    for (select of stRespuestasWEB) {
        if (select.value == "Correcta") {
            respuestaOk = true
        }
        txtCheck.innerHTML = "Respuesta: " + select.value
    }
    for (date of dtRespuestasFECHA) {
        txtCheck.innerHTML = "Respuesta: " + date.value
    }
    for (checkbox of cbRespuestasBASES) {
        if (checkbox.checked) {
            txtCheck.innerHTML = "Respuesta: " + checkbox.value
            if (checkbox.value == "Correcta") {
                respuestaOk = true
            }
        }
    }
}