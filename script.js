const containerDiv = document.querySelector(".container");
for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("numbered");
    containerDiv.appendChild(newDiv); 
}
