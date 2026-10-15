import "./style.css";

const app = document.getElementById("app");

app.innerHTML = `
  <header class="navbar">
    <h1>Lemonade 🍋</h1>
    <button id="green-flag" title="Run project">
      <img src="/src/assets/lemon-flag.svg" alt="Green flag">
    </button>
  </header>

  <main class="project-viewer">
    <div class="stage" id="stage">
      <p>Your project preview appears here.</p>
    </div>
  </main>
`;

document.getElementById("green-flag").addEventListener("click", () => {
  console.log("Lemonade project started!");
});