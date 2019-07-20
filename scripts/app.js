// Etch-a-sketch code
// Get DOM elements 
const container = document.querySelector(".grid-container");
const clientWidth = document.documentElement.clientWidth;
const clientHeight = document.documentElement.clientHeight;
const colorButton = document.getElementsByTagName("button")[0];
// Define height of container, otherwise the grid doesn't work
// DOM defines width of container, don't worry about that
container.style.height = (clientHeight - 55) + "px";
						
createGrid(16)
createListeners();
			
			
function createListeners() {
	// Has to be run after createGrid for the whole thing to work
	let squares = document.querySelectorAll(".grid-member");
			
	squares.forEach((square) => {
		square.addEventListener('mouseover', () => {
			// Check for the state of the button and decide how to decorate the div
			if(colorButton.dataset.color === "rainbow") {
				square.style.backgroundColor = `rgb(${(Math.random() * 255) + 1}, 
					${(Math.random() * 255) + 1},${(Math.random() * 255) + 1})`
			} else {
				square.style.backgroundColor = "rgb(0,0,0)";
			}
			
				
		});
	});
}
			
function createGrid(gridSize) {
	//Get percentages of the grid for width and height
	let rectHeightPercent = (1/gridSize) * 100;
	let rectWidthPercent = (1/gridSize) * 100;
	
	// Now I realize loops like this are unnecesary
	// Since the DOM positions elements.			
	for(let i = 0; i < gridSize; i++) {
		for(let u = 0; u < gridSize; u++) {
			let div = document.createElement("div");
			div.setAttribute("class", "grid-member");
			div.style.height = rectHeightPercent+"%";
			div.style.width = rectWidthPercent+"%";
						
			container.appendChild(div);
		}
	}
}
			
function resizeGrid() {
	// Ask for new grid size
	let newGridSize = Number(prompt("Input the new number of cells for the grid" , "14"));
	// In case the user cancels out of the prompt
	if(!newGridSize){newGridSize = 14}
	// Delete the previous Grid
	let oldGrid = document.querySelectorAll(".grid-member");
	oldGrid.forEach((square) => {
		square.remove();
	});
				
	createGrid(newGridSize);
	createListeners();
}
			
// Check the status of the button to modify it
function colorChange() {
	if (colorButton.dataset.color === "black") {
		colorButton.dataset.color = "rainbow";
		colorButton.innerText = "Rainbow mode";
	} else {
		colorButton.dataset.color = "black";
		colorButton.innerText = "Black mode";
	}
}

//TODO add resetGrid()
function resetGrid() {
	let squares = document.querySelectorAll(".grid-member");
	
	squares.forEach((square) => {
		square.style.backgroundColor = null;
	});
}
