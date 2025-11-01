function Comprobar() {
    event.preventDefault()
    let rdRespuestasWWW = document.getElementsByName("www")
    let cbRespuestasHTML = document.getElementsByName("html")
    let stRespuestasWEB = document.getElementById("web")
    let dtRespuestasFECHA = document.getElementsByName("fecha")
    let cbRespuestasBASES = document.getElementsByName("bases")
    let respuestaOk = false
    let txtCheck = document.getElementById("txtCheck")
    let puntuacion = 0;
    let totalPreguntas = 5;
    document.querySelectorAll(".iconoResultado").forEach(img => img.remove());
    for (radio of rdRespuestasWWW) {
        if (radio.checked) {
            txtCheck.innerHTML = "Respuesta: " + radio.value
            if (radio.value == "bernersLee") {
                respuestaOk = true
            }
        }
        if (respuestaOk) {
            puntuacion++;
            txtCheck.innerHTML += " (Correcta)";
            document.getElementById("Pregunta_4").innerHTML += '<img class="iconoResultado" src="../media/correcta.png" alt="Correcto">';
        } else {
            txtCheck.innerHTML += " (Incorrecta)";
            document.getElementById("Pregunta_4").innerHTML += '<img class="iconoResultado" src="../media/incorrecta.png" alt="Incorrecto">';
        }
    }
    for (checkbox of cbRespuestasHTML) {
        if (checkbox.checked) {
            txtCheck.innerHTML = "Respuesta: " + checkbox.value
            if (checkbox.value == "enlaces, tablas, videos") {
                respuestaOk = true
            }
        }
        if (respuestaOk) {
            puntuacion++;
            txtCheck.innerHTML += " (Correcta)";
            document.getElementById("Pregunta_5").innerHTML += '<img class="iconoResultado" src="../media/correcta.png" alt="Correcto">';
        } else {
            txtCheck.innerHTML += " (Incorrecta)";
            document.getElementById("Pregunta_5").innerHTML += '<img class="iconoResultado" src="../media/incorrecta.png" alt="Incorrecto">';
        }
    }
    for (select of stRespuestasWEB) {
        if (select.value == "cero") {
            respuestaOk = true
        }
        txtCheck.innerHTML = "Respuesta: " + select.value
        if (respuestaOk) {
            puntuacion++;
            txtCheck.innerHTML += " (Correcta)";
            document.getElementById("Pregunta_6").innerHTML += '<img class="iconoResultado" src="../media/correcta.png" alt="Correcto">';
        } else {
            txtCheck.innerHTML += " (Incorrecta)";
            document.getElementById("Pregunta_6").innerHTML += '<img class="iconoResultado" src="../media/incorrecta.png" alt="Incorrecto">';
        }
    }
    for (date of dtRespuestasFECHA) {
        txtCheck.innerHTML = "Respuesta: " + date.value
        if (date.value == "1991-03-12") {
            respuestaOk = true
        }
        if (respuestaOk) {
            puntuacion++;
            txtCheck.innerHTML += " (Correcta)";
            document.getElementById("Pregunta_7").innerHTML += '<img class="iconoResultado" src="../media/correcta.png" alt="Correcto">';
        } else {
            txtCheck.innerHTML += " (Incorrecta)";
            document.getElementById("Pregunta_7").innerHTML += '<img class="iconoResultado" src="../media/incorrecta.png" alt="Incorrecto">';
        }
    }
    for (checkbox of cbRespuestasBASES) {
        if (checkbox.checked) {
            txtCheck.innerHTML = "Respuesta: " + checkbox.value
            if (checkbox.value == "json, xml") {
                respuestaOk = true
            }
        }
        if (respuestaOk) {
            puntuacion++;
            txtCheck.innerHTML += " (Correcta)";
            document.getElementById("Pregunta_8").innerHTML += '<img class="iconoResultado" src="../media/correcta.png" alt="Correcto">';
        } else {
            txtCheck.innerHTML += " (Incorrecta)";
            document.getElementById("Pregunta_8").innerHTML += '<img class="iconoResultado" src="../media/incorrecta.png" alt="Incorrecto">';
        }
    }
}