document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default action

      // Remove active class from all nav items
      navItems.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");

      // Get target ID
      const targetId = this.getAttribute("data-target");

      // Hide all content sections
      document.querySelectorAll(".content").forEach((content) => {
        content.classList.remove("active");
      });

      // Show the clicked content
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.classList.add("active");
      }
    });
  });
});
