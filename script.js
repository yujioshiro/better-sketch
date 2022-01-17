let gridContainerContainer = document.getElementById("grid-container-container");
let gridContainer = document.getElementById("grid-container");
let gridSize;


let sketch = (event) => {
  if (event.type == "mouseover") {
    if (event.currentTarget.style.opacity == 0) {
      event.currentTarget.style.opacity = .3;
    } else if (event.currentTarget.style.opacity == .3) {
      event.currentTarget.style.opacity = .6;
    } else {
      event.currentTarget.style.opacity = 1;
    }
  }

  if (event.type == "click") {
    newGridSize = prompt("Choose new grid size from 1 to 100. You may also click cancel to continue working on your drawing.");
      if (newGridSize != "" && newGridSize != null) {
        if (newGridSize > 100 || newGridSize < 0) {
          alert("Please choose a grid size within range.")
        } else {
          gridContainer.innerHTML = "";
          newBoard(parseInt(newGridSize));
        }
      }
  }
}

let newBoard = (gridSize) => {
  for (let i = 1; i <= gridSize ** 2; i++) {
    let gridItem = document.createElement("div");
    gridItem.id = `grid-item-${i}`;
    gridItem.classList.add("grid-item");
    gridItem.addEventListener("mouseover", sketch);
    gridContainer.appendChild(gridItem);
  }
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
}

newBoard(16);
gridContainerContainer.addEventListener("click", sketch);
