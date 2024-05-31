initializeGrid();

function initializeGrid() {

    const container = document.querySelector(".container");

    for (let i = 0; i < 16; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let i = 0; i < 16; i++) {
            const child = createChildElement();
            row.appendChild(child);
        }
        container.appendChild(row);
    }

    const btn = document.querySelector("#changegrid");
    btn.addEventListener("click", setGrid);
}



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
            const child = createChildElement();
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

function generateRGB() {
    let threeColors = [];
    for (let i = 0; i < 3; i++) {
        let num = Math.floor(Math.random() * 255);
        threeColors.push(num);
    }

    let rgb = "rgb" + `(${threeColors.join(" ")})`;
    return rgb;
}

function createChildElement() {
    const child = document.createElement("div");
    child.classList.add("child");
    child.style.opacity = "0.1";
    child.style.backgroundColor = "white";
    child.addEventListener("mouseover", () => {
        if (child.style.opacity != "1") {
            child.style.opacity -= "-0.1";
            const rgb = generateRGB();
            child.style.backgroundColor = rgb;
        } else if (child.style.opacity = "1") {
            child.style.backgroundColor = "black";
        } else {
            console.log(child.style.opacity);
        }
    });

    return child;
}