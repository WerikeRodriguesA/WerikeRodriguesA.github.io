/**
 * @typedef {() => HTMLElement} PageRenderer
 */

/** @type {{[key: string]: PageRenderer}} */
const routes = {};

export function registerRoute(name, renderer) {
  routes[name] = renderer;
}

export function navigate(routeName) {
  const app = document.getElementById("app");

  if (!app) return;

  const page = routes[routeName];
  if (!page) {
    console.error(`Rota "${routeName}" não encontrada`);
    return;
  }

  // animação de saída
  app.classList.add("fade-out");

  setTimeout(() => {
    app.innerHTML = "";
    app.appendChild(page());

    // animação de entrada
    app.classList.remove("fade-out");
    app.classList.add("fade-in");

    setTimeout(() => {
      app.classList.remove("fade-in");
    }, 300);
  }, 200);
}
