// Etch-a-sketch code
const container = document.querySelector(".grid-container");
const clientWidth = document.documentElement.clientWidth;
const clientHeight = document.documentElement.clientHeight;
const button = document.getElementsByTagName("button")[0];
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
			// If it's the first time the user hovers onto the square
			// create an hsl value for it
			square.style.backgroundColor = `rgb(${(Math.random() * 255) + 1}, 
					${(Math.random() * 255) + 1},${(Math.random() * 255) + 1})`;
				
		});
	});
}
			
function createGrid(gridSize) {
	//Get percentages of the grid for width and height
	let rectHeightPercent = (1/gridSize) * 100;
	let rectWidthPercent = (1/gridSize) * 100;
				
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
	// Delete the previous Grid
	let oldGrid = document.querySelectorAll(".grid-member");
	oldGrid.forEach((square) => {
		square.remove();
	});
				
	createGrid(newGridSize);
	createListeners();
}
			
//TODO add colorChange()

//TODO add resetGrid()
