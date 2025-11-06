function Comprobar() {
    event.preventDefault()
    let rdRespuestasWWW = document.getElementsByName("www")
    let cbRespuestasHTML = document.getElementsByName("html")
    let stRespuestasWEB = document.getElementById("web")
    let dtRespuestasFECHA = document.getElementsByName("fecha")
    let cbRespuestasBASES = document.getElementsByName("bases")
    let respuestawww = false
    let respuestahtml = false
    let respuestaweb = false
    let respuestafecha = false
    let respuestabases = false
    let puntuacion = 0;
    document.querySelectorAll(".iconoResultado").forEach(img => img.remove());
    for (radio of rdRespuestasWWW) {
        if (radio.checked) {
            if (radio.value == "bernersLee") {
                respuestawww = true
            }
        }    
    }
    if (respuestawww = true) {
        puntuacion += 1;
        document.getElementById("imgP4").src="../media/correcta.png";
    } else {
        document.getElementById("imgP4").src="../media/incorrecta.png";
    }
    for (checkbox of cbRespuestasHTML) {
        if (checkbox.checked) {
            if (checkbox.value == "enlaces" and "tablas") {
                respuestahtml = true
            }
        }
    }
    if (respuestahtml = true) {
        puntuacion += 1;
        document.getElementById("imgP5").src="../media/correcta.png";
    } else {
        document.getElementById("imgP5").src="../media/incorrecta.png";
    }
    for (select of stRespuestasWEB) {
        if (select.value == "cero") {
            respuestaweb = true
        }
    }
    if (respuestaweb = true) {
        puntuacion += 1;
        document.getElementById("imgP6").src="../media/correcta.png";
    } else {
        document.getElementById("imgP6").src="../media/incorrecta.png";
    }
    for (date of dtRespuestasFECHA) {
        if (date.value == "1991-03-12") {
            respuestafecha = true
        }
    }
    if (respuestafecha = true) {
        puntuacion += 1;
        document.getElementById("imgP7").src="../media/correcta.png";
    } else {
        document.getElementById("imgP7").src="../media/incorrecta.png";
    }
    for (checkbox of cbRespuestasBASES) {
        if (checkbox.checked) {
            if (checkbox.value == "json, xml") {
                respuestabases = true
            }
        }
    }
    if (respuestabases = true) {
        puntuacion += 1;
        document.getElementById("imgP8").src="../media/correcta.png";
    } else {
        document.getElementById("imgP8").src="../media/incorrecta.png";
    }
}