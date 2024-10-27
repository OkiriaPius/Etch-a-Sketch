const containerDiv = document.querySelector(".container");
for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("numbered");
    containerDiv.appendChild(newDiv); 
}
const newDivs = document.querySelectorAll(".numbered");
newDivs.forEach(newDiv => {
    newDiv.addEventListener("mouseover", () => {
        newDiv.setAttribute("style", "background-color: yellow;")
    });    
});
