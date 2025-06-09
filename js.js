// Store theme state in memory instead of localStorage
let currentTheme = 'dark';

function toggleLightMode() {
  const element = document.body;
  element.classList.toggle("light-mode");

  // Update our in-memory theme state
  currentTheme = element.classList.contains("light-mode") ? 'light' : 'dark';

  // Optional: Log current theme to console
  console.log(`Theme is now: ${currentTheme}`);
}

// Initialize to dark mode by default
// No action needed here since body starts without the 'light-mode' class
