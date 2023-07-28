// JavaScript code
// Add an event listener to the buttons
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("a.enter-button");
  buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default link behavior

      // Fade out the body content
      document.body.classList.add("fade-out");

      // Wait for the fade out animation to complete
      setTimeout(function () {
        // Navigate to the target URL
        window.location.href = button.href;
      }, 500); // Adjust the delay (in milliseconds) to match the animation duration
    });
  });

  // Add an event listener to the View More buttons
  const viewMoreButtons = document.querySelectorAll(".section-button");
  viewMoreButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default link behavior

      // Fade out the body content
      document.body.classList.add("fade-out");

      // Wait for the fade out animation to complete
      setTimeout(function () {
        // Navigate to the target URL
        window.location.href = button.href;
      }, 500); // Adjust the delay (in milliseconds) to match the animation duration
    });
  });
});

// Add a class to fade-in the body content when the page loads
window.addEventListener("load", function () {
  document.body.classList.add("fade-in");
});

// Array of predefined image URLs
const imageUrls = [
  "assets/images/enter/p1.png",
  "assets/images/enter/p2.png",
  "assets/images/enter/p3.png",
  "assets/images/enter/p4.png",
  "assets/images/enter/p5.png",
  "assets/images/enter/p6.png",
  "assets/images/enter/p7.png",
  "assets/images/enter/p8.png",

  // Add more image URLs as needed
];

// Function to change the image every 0.5 seconds
function changeImage() {
  const imgElement = document.getElementById("changing-image");
  let currentIndex = 0;

  setInterval(() => {
    imgElement.src = imageUrls[currentIndex];
    currentIndex = (currentIndex + 1) % imageUrls.length;
  }, 200); // 500 milliseconds = 0.5 seconds
}

// Call the function to start changing the image
changeImage();
