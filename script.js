// Select all navigation links
const navLinks = document.querySelectorAll(".nav-item");

// Function to remove "active" from all and add to clicked one
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active")); // Remove active from all
    this.classList.add("active"); // Add active to clicked one
  });
});
document.addEventListener("DOMContentLoaded", function () {
  let serverCounter = 0;
  const sidebarUl = document.querySelector(".sidebar ul");
  const mainContent = document.querySelector(".main-contentContainer");

  // Handle clicks on the sidebar's list items
  sidebarUl.addEventListener("click", function (e) {
    const target = e.target;
    if (
      target.tagName.toLowerCase() === "li" &&
      target.classList.contains("nav-item")
    ) {
      const dataTarget = target.dataset.target;
      if (dataTarget === "servers") {
        // Add a new server
        serverCounter++;
        const newServerId = `server${serverCounter}`;

        // Create new nav item
        const newNavItem = document.createElement("li");
        newNavItem.className = "nav-item";
        newNavItem.dataset.target = newServerId;
        newNavItem.textContent = `Server ${serverCounter}`;

        // Insert before the "+" item
        sidebarUl.insertBefore(newNavItem, target);

        // Create new content section
        const newContent = document.createElement("section");
        newContent.className = "contentContainer";
        newContent.id = newServerId;
        newContent.textContent = `# ${newServerId}`;

        mainContent.appendChild(newContent);
      } else {
        // Navigate to the target
        document
          .querySelectorAll(".contentContainer")
          .forEach((el) => el.classList.remove("active"));
        const targetContent = document.getElementById(dataTarget);
        if (targetContent) targetContent.classList.add("active");

        // Update active class on nav items
        sidebarUl
          .querySelectorAll(".nav-item")
          .forEach((item) => item.classList.remove("active"));
        target.classList.add("active");
      }
    }
  });
});
