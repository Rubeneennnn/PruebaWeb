function Comprobar() {
    event.preventDefault();
    let rdRespuestasWWW = document.getElementsByName("www");
    let cbRespuestasHTML = document.getElementsByName("html");
    let stRespuestasWEB = document.getElementById("selectWeb");
    let dtRespuestasFECHA = document.getElementsByName("fecha");
    let cbRespuestasBASES = document.getElementsByName("bases");
    let puntuacion = 0;
    let respuestawww = false;
    let respuestahtml = false;
    let respuestaweb = false;
    let respuestafecha = false;
    let respuestabases = false;
    for (radio of rdRespuestasWWW) {
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
    for (checkbox of cbRespuestasHTML) {
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
    for (date of dtRespuestasFECHA) {
        if (date.value == "1969-01-01") {
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
    for (checkbox of cbRespuestasBASES) {
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
    if (puntuacion == 5) {
        document.getElementById("imgF").src = "../media/final.jpg";
    }
}

function Limpiar() {
    document.querySelectorAll("input[type=radio], input[type=checkbox]").forEach(input => {
        input.checked = false;
    });
    document.getElementById("selectWeb").value = "";
    document.querySelector("input[name='fecha']").value = "";
    ["imgP4", "imgP5", "imgP6", "imgP7", "imgP8", "imgF"].forEach(id => {
        const img = document.getElementById(id);
        if (img) img.src = "";
    });
    document.getElementById("puntuacionTotal").textContent = "";
}