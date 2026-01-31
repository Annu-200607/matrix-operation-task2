let rows, cols;

function createMatrices() {
    rows = parseInt(document.getElementById("rows").value);
    cols = parseInt(document.getElementById("cols").value);

    let html = `<h3>Matrix A</h3><div class="matrix">`;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++)
            html += `<input id="a${i}${j}" type="number">`;
        html += "<br>";
    }
    html += `</div><h3>Matrix B</h3><div class="matrix">`;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++)
            html += `<input id="b${i}${j}" type="number">`;
        html += "<br>";
    }
    html += "</div>";

    document.getElementById("matrices").innerHTML = html;
}

function addMatrices() {
    let result = "<div class='matrix'>";
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let sum =
                Number(document.getElementById(`a${i}${j}`).value) +
                Number(document.getElementById(`b${i}${j}`).value);
            result += `<input value="${sum}" readonly>`;
        }
        result += "<br>";
    }
    result += "</div>";
    document.getElementById("result").innerHTML = result;
}

function multiplyMatrices() {
    let result = "<div class='matrix'>";
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let sum = 0;
            for (let k = 0; k < cols; k++) {
                sum +=
                    document.getElementById(`a${i}${k}`).value *
                    document.getElementById(`b${k}${j}`).value;
            }
            result += `<input value="${sum}" readonly>`;
        }
        result += "<br>";
    }
    result += "</div>";
    document.getElementById("result").innerHTML = result;
}

function transposeMatrix() {
    let result = "<div class='matrix'>";
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            result += `<input value="${
                document.getElementById(`a${j}${i}`).value
            }" readonly>`;
        }
        result += "<br>";
    }
    result += "</div>";
    document.getElementById("result").innerHTML = result;
}
