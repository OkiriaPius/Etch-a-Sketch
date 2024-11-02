const containerDiv = document.querySelector(".container");
const root = document.documentElement;

let numberOfBox;
let newBoxNumber;
const promptButton = document.createElement("button");
promptButton.innerText = "How many boxes? Click the button to enter number of boxes";
promptButton.setAttribute("style", "margin: 5px; padding: 4px; width: 350px; box-shadow: 2px 4px rgba(0,0,0, .3); border-radius: 4px; cursor: pointer; position: fixed; top: 20px;");
document.body.append(promptButton);

promptButton.addEventListener("click", () => {
   numberOfBox = parseInt(prompt("Type in the number of boxes:"));
   containerDiv.innerHTML = "";
   newBoxNumber = numberOfBox * numberOfBox;
   
   for (let i = 0; i < (newBoxNumber); i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("numbered");
    containerDiv.appendChild(newDiv);
   }


    const newDivs = document.querySelectorAll(".numbered");
    newDivs.forEach( newDiv => {
    newDiv.addEventListener("mouseover", () => {
        let rgbColor = Math.random() * 225;
        
        newDiv.setAttribute("style", `background-color: rgb(${rgbColor},${rgbColor},${rgbColor});`);
    });
    console.log(numberOfBox-2);     
    });

    if (!isNaN(newBoxNumber) && !isNaN(numberOfBox-2) && newBoxNumber > 0 && numberOfBox > 0) {
        
        if(numberOfBox > 22) {
            const percent = newBoxNumber * (15/100);
            root.style.setProperty("--box-width", `18px`)
            root.style.setProperty("--container-width", `${newBoxNumber - percent}px`);
            console.log(numberOfBox);
        }else{
            root.style.setProperty("--box-width", `${numberOfBox-2}px`);
            root.style.setProperty("--container-width", `${newBoxNumber}px`);
        
        
        }        
           
    }else {
        alert("Please enter valid positive numbers!");
    };
    
});