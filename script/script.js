const container = document.querySelector(".container");

function makeGrid(rows, cols) {
    for (n = 0; n < (rows * cols); n++) {
        let cell = document.createElement("div");
        cell.innerText = (n + 1);
        container.appendChild(cell).className = "grid-item";
    }
}

makeGrid(16, 16);