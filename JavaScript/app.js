 
const darkModeBtn = document.getElementById("dark-mode-btn");
const body = document.body;

darkModeBtn.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
  body.classList.toggle("dark-mode");
}
