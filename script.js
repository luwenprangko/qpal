document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();

      navItems.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");

      const targetId = this.getAttribute("data-target");

      document.querySelectorAll(".content").forEach((content) => {
        content.classList.remove("active");
      });

      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.classList.add("active");
      }
    });
  });
});
