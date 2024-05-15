const container = document.querySelector(".container");
const button = document.querySelector("button");

function paintGrid (gridSize) {
    
    container.replaceChildren();
    
    for (i = 0; i < gridSize; i++){

        const row = document.createElement("div")
        row.setAttribute("class", "row-normal");
        container.appendChild(row);
    
        for (j = 0; j < gridSize; j++) {
            const column = document.createElement("div")
            column.setAttribute("class", "column-normal");
            row.appendChild(column);
            column.addEventListener("mouseover", () => {
                column.setAttribute("class", "column-hover");
            });
        }
    }    
}

button.addEventListener("click", () => {
    let gridSize = prompt("Please enter the new grid size.");
    paintGrid(gridSize);
});