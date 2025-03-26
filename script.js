`use strict`;

const gridContainer = document.querySelector("#gridContainer");

let gridSize = 100;

for (let i = 0; i < gridSize; i++) {
  const currGridBox = document.createElement("div");
  currGridBox.id = `box${i}`;
  currGridBox.textContent = "text box";
  gridContainer.appendChild(currGridBox);
}
