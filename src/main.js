import "./style.css";

const buttonLight = document.querySelector("#light");
const buttonDark = document.querySelector("#dark");

function toggleTheme(e) {
  const mode = e.target.dataset.theme;
  if (mode !== "dark") {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
}

buttonLight.addEventListener("click", toggleTheme);
buttonDark.addEventListener("click", toggleTheme);
