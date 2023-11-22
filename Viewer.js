// Get all image elements within the elements with class "images"
const images = document.querySelectorAll(".images img");

// Add a click event listener to each image
images.forEach(function(image) {
  image.addEventListener("click", function(event) {
    // Prevent the click event from propagating to the document
    event.stopPropagation();

    // Get the source attribute of the clicked image and set it as the source of the full-image element
    document.getElementById("full-image").src = this.src;
    
    // Show the image viewer
    document.getElementById("image-viewer").style.display = "block";
  });
});

// Add a click event listener to the close button within the element with id "image-viewer"
document.querySelector("#image-viewer .close").addEventListener("click", function() {
  // Hide the image viewer
  document.getElementById("image-viewer").style.display = "none";
});

// Add a click event listener to the document
document.addEventListener("click", function() {
  // Hide the image viewer
  document.getElementById("image-viewer").style.display = "none";
});

// Add a keydown event listener to the document
document.addEventListener("keydown", function(event) {
  // Check if the pressed key is Esc
  if (event.key === "Escape") {
    // Hide the image viewer
    document.getElementById("image-viewer").style.display = "none";
  }
});