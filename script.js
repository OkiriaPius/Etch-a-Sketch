const containerDiv = document.querySelector(".container");
const root = document.documentElement;
const boxSize = 10;
root.style.setProperty("--container-width", ``);

let numberOfBox;
let newBoxNumber;
const promptButton = document.createElement("button");
promptButton.innerText = "How many boxes? Click the button to enter number of boxes";
promptButton.setAttribute("style", "margin: 5px; padding: 4px; width: 350px; box-shadow: 2px 4px rgba(0,0,0, .3); border-radius: 4px; cursor: pointer; position: fixed; top: 20px;");
document.body.append(promptButton);

promptButton.addEventListener("click", () => {
   numberOfBox = Number(prompt("Type in the number of boxes:"));
   containerDiv.innerHTML = "";
   newBoxNumber = numberOfBox * numberOfBox;
   if (numberOfBox > 100) {
    alert("HEY!, NOT BEYOND 100");
    }else{
        for (let i = 0; i < (newBoxNumber); i++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("numbered");
            containerDiv.appendChild(newDiv);
        }
    }
   


    const newDivs = document.querySelectorAll(".numbered");
    newDivs.forEach( newDiv => {
    newDiv.addEventListener("mouseover", () => {
        let rgbColor = Math.round(Math.random() * 225);
        
        newDiv.setAttribute("style", `background-color: rgb(${rgbColor},${rgbColor},${rgbColor}); opacity: 0.1;`);
        console.log(`background-color: rgb(${rgbColor},${rgbColor},${rgbColor})`)
    });
    console.log(numberOfBox);     
    });
    if (numberOfBox > 100) {
        root.style.setProperty("--container-width", ``);
         
    }else if (!isNaN(newBoxNumber) && !isNaN(numberOfBox-2) && newBoxNumber > 0 && numberOfBox > 0) {
            
        console.log(`${numberOfBox * boxSize}px`);
        root.style.setProperty("--container-width", `${numberOfBox * boxSize}px`);
         
           
    } else {
        alert("Please enter valid positive numbers!");
        console.log("no");
    };
    
});