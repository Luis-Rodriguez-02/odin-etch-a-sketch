`use strict`;

const gridContainer = document.querySelector("#gridContainer");
const gridContainerWidth = parseInt(
  getComputedStyle(gridContainer).width.slice(0, -2)
);

const gridContainerHeight = parseInt(
  getComputedStyle(gridContainer).height.slice(0, -2)
);
let gridSize = prompt("Enter grid size (ex 5 for 5x5 grid)");

// grid creation
for (let i = 1; i <= gridSize * gridSize; i++) {
  const currGridBox = document.createElement("div");
  currGridBox.classList.add("gridBox");
  currGridBox.style.width = `${100 / gridSize}%`;
  currGridBox.style.height = `${100 / gridSize}%`;
  gridContainer.appendChild(currGridBox);
}

// hover effect on grids
const gridBoxes = document.querySelectorAll(".gridBox");
console.log(gridBoxes);

gridBoxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "blue";
  });
});
