const container = document.querySelector(".container");

for (i = 0; i < 16; i++){

    const row = document.createElement("div")
    row.setAttribute("class", "row-normal");
    container.appendChild(row);

    for (j = 0; j < 16; j++) {
        const column = document.createElement("div")
        column.setAttribute("class", "column-normal");
        row.appendChild(column);
        column.addEventListener("mouseover", () => {
            column.setAttribute("class", "column-hover");
        });
    }
}

