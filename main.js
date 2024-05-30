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