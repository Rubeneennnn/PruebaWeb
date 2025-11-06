function Comprobar(event) {
    event.preventDefault();
    let rdRespuestasWWW = document.getElementsByName("www");
    let cbRespuestasHTML = document.getElementsByName("html");
    let stRespuestasWEB = document.getElementById("web");
    let dtRespuestasFECHA = document.getElementsByName("fecha");
    let cbRespuestasBASES = document.getElementsByName("bases");
    let puntuacion = 0;
    let respuestawww = false;
    let respuestahtml = false;
    let respuestaweb = false;
    let respuestafecha = false;
    let respuestabases = false;
    document.querySelectorAll(".iconoResultado").forEach(img => img.remove());
    for (let radio of rdRespuestasWWW) {
        if (radio.checked && radio.value == "bernersLee") {
            respuestawww = true;
        }
    }
    if (respuestawww == true) {
        puntuacion++;
        document.getElementById("imgP4").src = "../media/correcta.png";
    } else {
        document.getElementById("imgP4").src = "../media/incorrecta.png";
    }
    let htmlCorrectas = ["enlaces", "tablas", "videos"];
    let htmlSeleccionadas = [];
    for (let checkbox of cbRespuestasHTML) {
        if (checkbox.checked) {
            htmlSeleccionadas.push(checkbox.value);
        }
    }
    if (
        htmlSeleccionadas.length === htmlCorrectas.length &&
        htmlSeleccionadas.every(val => htmlCorrectas.includes(val))
    ) {
        respuestahtml = true;
    }
    if (respuestahtml == true) {
        puntuacion++;
        document.getElementById("imgP5").src = "../media/correcta.png";
    } else {
        document.getElementById("imgP5").src = "../media/incorrecta.png";
    }
    if (stRespuestasWEB.value == "cero") {
        respuestaweb = true;
    }
    if (respuestaweb == true) {
        puntuacion++;
        document.getElementById("imgP6").src = "../media/correcta.png";
    } else {
        document.getElementById("imgP6").src = "../media/incorrecta.png";
    }
    for (let date of dtRespuestasFECHA) {
        if (date.value == "1969-03-12") {
            respuestafecha = true;
        }
    }
    if (respuestafecha == true) {
        puntuacion++;
        document.getElementById("imgP7").src = "../media/correcta.png";
    } else {
        document.getElementById("imgP7").src = "../media/incorrecta.png";
    }
    let basesCorrectas = ["json", "xml"];
    let basesSeleccionadas = [];
    for (let checkbox of cbRespuestasBASES) {
        if (checkbox.checked) {
            basesSeleccionadas.push(checkbox.value.trim());
        }
    }
    if (
        basesSeleccionadas.length === basesCorrectas.length &&
        basesSeleccionadas.every(val => basesCorrectas.includes(val))
    ) {
        respuestabases = true;
    }
    if (respuestabases == true) {
        puntuacion++;
        document.getElementById("imgP8").src = "../media/correcta.png";
    } else {
        document.getElementById("imgP8").src = "../media/incorrecta.png";
    }
    document.getElementById("puntuacionTotal").textContent = puntuacion;
}