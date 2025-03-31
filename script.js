`use strict`;

const gridContainer = document.querySelector("#gridContainer");

let gridSize = 100;

for (let i = 1; i <= gridSize; i++) {
  const currGridBox = document.createElement("div");
  currGridBox.id = `box${i}`;
  currGridBox.textContent = currGridBox.id;
  currGridBox.style.width = `${gridContainer.width / gridSize}`;
  currGridBox.style.height = `${gridContainer.height / gridSize}`;
  gridContainer.appendChild(currGridBox);
}
