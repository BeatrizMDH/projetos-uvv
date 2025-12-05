/* script.js - versão robusta e sem dependências */

// lista de curiosidades
const curiosidades = [
  "Uma única abelha pode visitar até 5 mil flores por dia!",
  "As abelhas se comunicam por meio de uma dança chamada 'dança das abelhas'.",
  "Existem mais de 20.000 espécies diferentes de abelhas no mundo.",
  "A rainha é a única fêmea fértil da colmeia e pode viver vários anos (em algumas espécies).",
  "Sem abelhas, a produção de muitos alimentos cairia drasticamente.",
];

// aguarda o carregamento do DOM (script carregado com `defer`, mas this garante)
document.addEventListener("DOMContentLoaded", () => {
  // Inicializa o tema
  const htmlElement = document.documentElement;
  const savedTheme = localStorage.getItem("theme") || "light";
  htmlElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  // Configurar botão de toggle tema
  const toggleBtn = document.getElementById("toggleTheme");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", toggleTheme);
    toggleBtn.addEventListener("keyup", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleTheme();
      }
    });
  }

  // Configurar botão de curiosidade
  const btn = document.getElementById("btnCuriosidade");
  const out = document.getElementById("curiosidadeTexto");

  if (btn && out) {
    btn.addEventListener("click", mostrarCuriosidade);
    btn.addEventListener("keyup", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        mostrarCuriosidade();
      }
    });
  }
});

// Toggle tema (light/dark)
function toggleTheme() {
  const htmlElement = document.documentElement;
  const currentTheme = htmlElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  htmlElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
}

// Atualizar ícone do tema
function updateThemeIcon(theme) {
  const themeIcon = document.querySelector(".theme-toggle i");
  const themeLabel = document.querySelector(".toggle-label");

  if (themeIcon) {
    themeIcon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
  }

  if (themeLabel) {
    themeLabel.textContent = theme === "dark" ? "Light" : "Dark";
  }
}

// Mostrar curiosidade aleatória
function mostrarCuriosidade() {
  const out = document.getElementById("curiosidadeTexto");
  if (!out) return;

  if (!Array.isArray(curiosidades) || curiosidades.length === 0) {
    out.textContent = "Nenhuma curiosidade disponível no momento.";
    return;
  }

  const idx = Math.floor(Math.random() * curiosidades.length);
  out.textContent = curiosidades[idx];
}
