`use strict`;

const gridContainer = document.querySelector("#gridContainer");
const gridContainerWidth = parseInt(
  getComputedStyle(gridContainer).width.slice(0, -2)
);

const gridContainerHeight = parseInt(
  getComputedStyle(gridContainer).height.slice(0, -2)
);
let gridSize = prompt("Enter grid size (ex 5 for 5x5 grid)");

for (let i = 1; i <= gridSize * gridSize; i++) {
  const currGridBox = document.createElement("div");
  currGridBox.id = `box${i}`;
  currGridBox.textContent = currGridBox.id;
  currGridBox.style.width = `${100 / gridSize}%`;
  currGridBox.style.height = `${100 / gridSize}%`;
  gridContainer.appendChild(currGridBox);
}
