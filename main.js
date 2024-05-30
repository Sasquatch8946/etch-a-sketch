const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let i = 0; i < 16; i++) {
        const child = document.createElement("div");
        child.classList.add("child");
        row.appendChild(child);
    }
    container.appendChild(row);
}

const btn = document.querySelector("#changegrid");
btn.addEventListener("click", setGrid);

function setGrid() {
    const userSetting = parseInt(prompt("Please enter the number of squares (between 2 and 100) that you would like going down and across for your sketch pad."));
    if (userSetting < 2 || userSetting > 100) {
        alert("The number you entered is too small or too large. Please try again and enter a number between 2 and 100.");
        return;
    }
    // clear existing grid
    clearGrid();
    createGrid(userSetting);

}

function createGrid(numSquares) {
    for (let i = 0; i < numSquares; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let i = 0; i < numSquares; i++) {
            const child = document.createElement("div");
            child.classList.add("child");
            row.appendChild(child);
        }
        container.appendChild(row);
    }
}

function clearGrid() {
    const container = document.querySelector(".container");
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}