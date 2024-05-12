// // Wrap your code in a DOMContentLoaded event listener
// document.addEventListener("DOMContentLoaded", function() {
//   // Function to capture canvas image
//   function captureCanvasImage() {
//       var canvas = document.getElementById("defaultCanvas0");
//       var imgData = canvas.toDataURL("image/png");

//       var img = new Image();
//       img.src = imgData;

//       var newDiv = document.createElement("div");
//       newDiv.classList.add("canvas-image-container");
//       newDiv.appendChild(img);

//       document.body.appendChild(newDiv);
//   }

//   // Add event listener to the submit button
//   var submitButton = document.getElementById("submit-button");
//   if (submitButton) {
//       submitButton.addEventListener("click", function() {
//           captureCanvasImage();
//       });
//   } else {
//       console.error("Submit button not found.");
//   }
// });
// function captureCanvasImage() {
//   // Capture the canvas as an image
//   var canvas = document.getElementById("defaultCanvas0");
//   var imgData = canvas.toDataURL("image/png");

//   // Create a new image element
//   var img = new Image();
//   img.src = imgData;

//   // Create a new div to hold the image
//   var newDiv = document.createElement("div");
//   newDiv.classList.add("canvas-image-container");
//   newDiv.appendChild(img);

//   // Append the new div to the document body or another container element
//   document.body.appendChild(newDiv);
// }

// // Assuming you have a submit button with the id "submit-button"
// document.getElementById("submit-button").addEventListener("click", function() {
//   captureCanvasImage();
// });
