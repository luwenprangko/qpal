// Select all navigation links
const navLinks = document.querySelectorAll(".nav-item");

// Function to remove "active" from all and add to clicked one
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active")); // Remove active from all
    this.classList.add("active"); // Add active to clicked one
  });
});
