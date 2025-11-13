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
    const imgP4 = document.getElementById("imgP4");
    if ([...rdRespuestasWWW].some(r => r.checked)) {
        imgP4.style.display = "inline";
        imgP4.src = respuestawww ? "../media/correcta.png" : "../media/incorrecta.png";
        if (respuestawww) puntuacion++;
    } else {
        imgP4.style.display = "none";
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
    const imgP5 = document.getElementById("imgP5");
    if ([...cbRespuestasHTML].some(c => c.checked)) {
        imgP5.style.display = "inline";
        imgP5.src = respuestahtml ? "../media/correcta.png" : "../media/incorrecta.png";
        if (respuestahtml) puntuacion++;
    } else {
        imgP5.style.display = "none";
    }
    if (stRespuestasWEB.value == "cero") {
        respuestaweb = true;
    }
    const imgP6 = document.getElementById("imgP6");
    if (stRespuestasWEB.value !== "") {
        imgP6.style.display = "inline";
        imgP6.src = respuestaweb ? "../media/correcta.png" : "../media/incorrecta.png";
        if (respuestaweb) puntuacion++;
    } else {
        imgP6.style.display = "none";
    }
    for (date of dtRespuestasFECHA) {
        if (date.value == "1969-01-01") {
            respuestafecha = true;
        }
    }
    const imgP7 = document.getElementById("imgP7");
    if ([...dtRespuestasFECHA].some(d => d.value)) {
        imgP7.style.display = "inline";
        imgP7.src = respuestafecha ? "../media/correcta.png" : "../media/incorrecta.png";
        if (respuestafecha) puntuacion++;
    } else {
        imgP7.style.display = "none";
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
    const imgP8 = document.getElementById("imgP8");
    if ([...cbRespuestasBASES].some(c => c.checked)) {
        imgP8.style.display = "inline";
        imgP8.src = respuestabases ? "../media/correcta.png" : "../media/incorrecta.png";
        if (respuestabases) puntuacion++;
    } else {
        imgP8.style.display = "none";
    }
    document.getElementById("puntuacionTotal").textContent = puntuacion;
    const imgF = document.getElementById("imgF");
    if (puntuacion == 5) {
        imgF.src = "../media/final.png";
        imgF.style.display = "inline";
    } else {
        imgF.style.display = "none";
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
    ["imgP4", "imgP5", "imgP6", "imgP7", "imgP8", "imgF"].forEach(id => {
    const img = document.getElementById(id);
    if (img) {
        img.src = "";
        img.style.display = "none";
    }
    });
}