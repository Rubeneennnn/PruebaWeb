function Comprobar() {
    event.preventDefault()
    let rdRespuestasWWW = document.getElementsByName("www")
    let cbRespuestasHTML = document.getElementsByName("html")
    let stRespuestasWEB = document.getElementById("web")
    let dtRespuestasFECHA = document.getElementsByName("fecha")
    let cbRespuestasBASES = document.getElementsByName("bases")
    let respuestaOk = false
    let puntuacion = 0;
    document.querySelectorAll(".iconoResultado").forEach(img => img.remove());
    for (radio of rdRespuestasWWW) {
        if (radio.checked) {
            puntuacion.innerHTML = "Respuesta: " + radio.value
            if (radio.value == "bernersLee") {
                respuestaOk = true
            }
        }
        if (respuestaOk = true) {
            puntuacion += 1;
            document.getElementById("Pregunta_4").src="../media/correcta.png";
        } else {
            document.getElementById("Pregunta_4").src="../media/incorrecta.png";
        }
    }
    for (checkbox of cbRespuestasHTML) {
        if (checkbox.checked) {
            puntuacion.innerHTML = "Respuesta: " + checkbox.value
            if (checkbox.value == "enlaces, tablas, videos") {
                respuestaOk = true
            }
        }
        if (respuestaOk = true) {
            puntuacion += 1;
            document.getElementById("Pregunta_5").src="../media/correcta.png";
        } else {
            document.getElementById("Pregunta_5").src="../media/incorrecta.png";
        }
    }
    for (select of stRespuestasWEB) {
        if (select.value == "cero") {
            respuestaOk = true
        }
        puntuacion.innerHTML = "Respuesta: " + select.value
        if (respuestaOk = true) {
            puntuacion += 1;
            document.getElementById("Pregunta_6").src="../media/correcta.png";
        } else {
            document.getElementById("Pregunta_6").src="../media/incorrecta.png";
        }
    }
    for (date of dtRespuestasFECHA) {
        puntuacion.innerHTML = "Respuesta: " + date.value
        if (date.value == "1991-03-12") {
            respuestaOk = true
        }
        if (respuestaOk = true) {
            puntuacion += 1;
            document.getElementById("Pregunta_7").src="../media/correcta.png";
        } else {
            document.getElementById("Pregunta_7").src="../media/incorrecta.png";
        }
    }
    for (checkbox of cbRespuestasBASES) {
        if (checkbox.checked) {
            puntuacion.innerHTML = "Respuesta: " + checkbox.value
            if (checkbox.value == "json, xml") {
                respuestaOk = true
            }
        }
        if (respuestaOk = true) {
            puntuacion += 1;
            document.getElementById("Pregunta_8").src="../media/correcta.png";
        } else {
            document.getElementById("Pregunta_8").src="../media/incorrecta.png";
        }
    }
}