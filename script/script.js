let numRowsCols = 8;
const container = document.querySelector(".container");
const btn = document.querySelector("button");

function makeGrid(numRowsCols) {
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${numRowsCols}, 1fr)`;
    for (let n = 0; n < numRowsCols; n++) {
        let row = container.appendChild(document.createElement("div"));
        for (let i = 0; i < numRowsCols; i++) {
            let cell = document.createElement("div");
            row.appendChild(cell).className = "grid-item";
        }
    }
}

btn.addEventListener ("click", () => {
    numRowsCols = prompt("Enter the number of rows and columns");
    makeGrid(numRowsCols);
})

makeGrid(numRowsCols);