

document.addEventListener("DOMContentLoaded", function() {
    // Color buttons functionality
    const colorButtons = document.querySelectorAll(".colorbuttonwrapper button");
    let selectedColor = ""; // Variable to store the selected color

    // Event listener for color buttons
    colorButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Remove "clicked" class from all color buttons
            colorButtons.forEach(btn => btn.classList.remove("clicked"));
            // Add "clicked" class to the clicked color button
            button.classList.add("clicked");

            selectedColor = window.getComputedStyle(button).getPropertyValue("background-color");
            myp5.drawMode = false; // Disable drawing mode when selecting color
        });
    });

    // Initialize p5.js sketch
    let sketch = function(p) {
        let canvas;
        let gridCells;
        let cellWidth;
        let cellHeight;

        p.setup = function() {
            // Ensure parent element exists
            const canvasParent = document.getElementById('p5canvas');
            if (!canvasParent) {
                console.error("Canvas parent element not found.");
                return;
            }

            // Set canvas size
            canvas = p.createCanvas(518, 518);
            // Append canvas to its parent element
            canvas.parent(canvasParent);

            // Get grid cells
            gridCells = document.querySelectorAll(".p5canvas .grid-cell");
            // Get cell dimensions
            cellWidth = gridCells[0].offsetWidth;
            cellHeight = gridCells[0].offsetHeight;

            // Event listener for grid cells
            gridCells.forEach(cell => {
                cell.addEventListener("click", function() {
                    if (!myp5.drawMode && selectedColor) {
                        // Change cell color only if not in drawing mode and color selected
                        cell.style.backgroundColor = selectedColor;
                    }
                });
            });
        };

        p.draw = function() {
            // Drawing logic
            if (myp5.drawMode && p.mouseIsPressed) {
                // Determine which cell the mouse is in
                let xIndex = Math.floor(p.mouseX / cellWidth);
                let yIndex = Math.floor(p.mouseY / cellHeight);

                // Check if mouse is within grid cell boundaries
                if (xIndex >= 0 && xIndex < 5 && yIndex >= 0 && yIndex < 5) {
                    // Calculate cell boundaries
                    let startX = xIndex * cellWidth;
                    let startY = yIndex * cellHeight;
                    let endX = startX + cellWidth;
                    let endY = startY + cellHeight;

                    // Draw only within the bounds of the current cell
                    p.stroke(255, 196, 135); // Cream color (RGB values)
                    p.strokeWeight(2);
                    p.line(
                        p.constrain(p.mouseX, startX, endX),
                        p.constrain(p.mouseY, startY, endY),
                        p.constrain(p.pmouseX, startX, endX),
                        p.constrain(p.pmouseY, startY, endY)
                    );

                    // Replicate the drawing across all grid cells
                    gridCells.forEach(cell => {
                        let cellIndex = Array.from(gridCells).indexOf(cell);
                        let cellX = (cellIndex % 5) * cellWidth;
                        let cellY = Math.floor(cellIndex / 5) * cellHeight;
                        p.line(
                            p.constrain(p.mouseX - startX + cellX, cellX, cellX + cellWidth),
                            p.constrain(p.mouseY - startY + cellY, cellY, cellY + cellHeight),
                            p.constrain(p.pmouseX - startX + cellX, cellX, cellX + cellWidth),
                            p.constrain(p.pmouseY - startY + cellY, cellY, cellY + cellHeight)
                        );
                    });
                }
            }
        };
    };

    // Attach p5.js sketch to the canvas div
    let myp5 = new p5(sketch);

    // Event listener for brush click
    const brush = document.getElementById('brush');
    if (brush) {
        brush.addEventListener('click', function() {
            // Enable drawing mode when brush is clicked
            myp5.drawMode = true;
        });
    } else {
        console.error("Brush element not found.");
    }
});

