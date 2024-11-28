let divContainer = document.querySelector("#container"); // parent div container
const gridButton = document.querySelector("#grid-button");
let numSquares;


gridButton.addEventListener("click", () => {
  numSquares = prompt("Enter number of squares per side. Must be less than 100");
  numSquares = parseInt(numSquares);
    
    if (numSquares > 0 && numSquares <= 100) {
        divContainer.innerHTML = ""; // clear prev grid
        for (let i = 0; i < numSquares; i++) {
          for (let j = 0; j < numSquares; j++){
            const div = document.createElement('div');
            div.classList.add('grid-square');  // add class to use for event listener
            div.style.width = `${100 / numSquares }%`; // divide by nums to make width within parent container - prevent overflow
            div.style.height = `${100 / numSquares }%`;
            divContainer.appendChild(div);
          }
        }

    } else {
        alert("Please enter a valid number between 1-100");
    }
  }
);





