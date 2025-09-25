const body = document.querySelector("body");
const toggleThemeBtn = document.getElementById("toggle-theme");

(function checkStatus() {
  const localTheme = JSON.parse(localStorage.getItem("light-theme"));
  applyTheme(localTheme);
})();

function applyTheme(lightTheme) {
  if (lightTheme) {
    toggleThemeBtn.textContent = "🌙";
    body.classList.add("light-mode");
    localStorage.setItem("light-theme", "true");
  } else {
    toggleThemeBtn.textContent = "☀️";
    body.classList.remove("light-mode");
    localStorage.setItem("light-theme", "false");
  }
}

const toggleTheme = () => {
  const lightTheme = body.classList.contains("light-mode");
  applyTheme(!lightTheme);
};

toggleThemeBtn.addEventListener("click", toggleTheme);
