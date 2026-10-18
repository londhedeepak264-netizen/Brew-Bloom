/* ---------------------------------
   BREW & BEAN - JAVASCRIPT
---------------------------------- */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navigationItems = document.querySelectorAll(".nav-links a");

// Open and close the mobile navigation
function closeMenu() {
  navLinks.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
}

menuToggle.addEventListener("click", () => {
  const isExpanded =
    menuToggle.getAttribute("aria-expanded") === "true";

  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute(
    "aria-label",
    isExpanded ? "Open navigation menu" : "Close navigation menu"
  );

  navLinks.classList.toggle("is-open", !isExpanded);
});

// Close the menu when a navigation link is selected
navigationItems.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Close the menu when the visitor presses Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    menuToggle.focus();
  }
});

// Close the mobile menu when returning to desktop layout
window.addEventListener("resize", () => {
  if (window.innerWidth > 760) {
    closeMenu();
  }
});

// Set the current copyright year automatically
const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();
