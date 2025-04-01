`use strict`;
const gridContainer = document.querySelector("#gridContainer");

function createGrid(gridSize, opacityMode) {
  for (let i = 1; i <= gridSize * gridSize; i++) {
    const currGridBox = document.createElement("div");
    currGridBox.classList.add("gridBox");
    currGridBox.style.width = `${100 / gridSize}%`;
    currGridBox.style.height = `${100 / gridSize}%`;
    gridContainer.appendChild(currGridBox);
  }

  const gridBoxes = document.querySelectorAll(".gridBox");
  console.log(gridBoxes);

  gridBoxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      if (opacityMode) {
        let currentOpacity = parseFloat(box.style.opacity) || 0;
        box.style.backgroundColor = "black";
        box.style.opacity = Math.min(currentOpacity + 0.1, 1);
      } else {
        box.style.backgroundColor = `rgb(${Math.random() * 256},${
          Math.random() * 256
        },${Math.random() * 256})`;
      }
    });
  });
}
function clearGrid() {
  gridContainer.replaceChildren();
}

// grid creation

// hover effect on grids

// adding button to change grid size
let gridSize = 0;
const gridButton = document.createElement("button");
gridButton.textContent = "Click to generate grid";

const clearButton = document.createElement("button");
clearButton.textContent = "Clear grid";

const opacityButton = document.createElement("button");
opacityButton.textContent = "Opacity mode";

let opacityMode = false;

gridButton.addEventListener("click", () => {
  do {
    clearGrid();
    opacityMode = false;
    gridSize = prompt("Enter grid size (Max size 100x100)");
    createGrid(gridSize, opacityMode);
  } while (gridSize > 100 || gridSize < 1);
});

clearButton.addEventListener("click", () => {
  clearGrid();
});

opacityButton.addEventListener("click", () => {
  opacityMode = true;
  clearGrid();
  gridSize = prompt("Enter grid size (Max size 100x100)");
  createGrid(gridSize, opacityMode);
});

const buttons = document.querySelector("#buttons");
buttons.appendChild(gridButton);
buttons.appendChild(opacityButton);
buttons.appendChild(clearButton);
