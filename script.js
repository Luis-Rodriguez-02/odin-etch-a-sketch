let divContainer = document.querySelector("#container"); // parent div container
const gridButton = document.querySelector("#grid-button");
let numSquares;
const deleteButton = document.querySelector("#delete-button");
const opacityButton = document.querySelector("#opacity-button");



gridButton.addEventListener("click", () => {
  numSquares = prompt("Enter number of squares per side. Must be less than 100");
  numSquares = parseInt(numSquares);
    
    if (numSquares > 0 && numSquares <= 100) {
        divContainer.innerHTML = ""; // clear prev grid
        for (let i = 0; i < numSquares; i++) {
          for (let j = 0; j < numSquares; j++){
            const div = document.createElement('div');
            div.classList.add('grid-square');  // add class to use for event listener
            div.classList.add('color-mode');
            div.style.width = `${100 / numSquares }%`; // divide by nums to make width within parent container - prevent overflow
            div.style.height = `${100 / numSquares }%`;

            div.addEventListener('mouseenter', () => {
              if (div.classList.contains("opacity-mode")) {
                let updatedOpacity = parseFloat(div.style.opacity); // with opacity mode all divs start with opacity 0 so no need to handle empty string
                if (updatedOpacity < 1) {
                  updatedOpacity += 0.1;
                  div.style.opacity = String(updatedOpacity);
                }
              }
              else if (div.classList.contains("color-mode")) {
                let red = Math.floor(Math.random() * 256)
                let green = Math.floor(Math.random() * 256)
                let blue = Math.floor(Math.random() * 256)
                div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
              }
          });

            divContainer.appendChild(div);
          }
        }

    } else {
        alert("Please enter a valid number between 1-100");
    }
  }
);

deleteButton.addEventListener("click", () => {
  const squares = document.querySelectorAll(".grid-square");
  squares.forEach(square => square.style.backgroundColor = "");
});

opacityButton.addEventListener("click", () => {
  const squares = document.querySelectorAll(".grid-square");
  squares.forEach(square =>  {
    square.style.opacity = 0;
    square.style.backgroundColor = "black";
    square.classList.add("opacity-mode");
    square.classList.remove("color-mode");
});
});


