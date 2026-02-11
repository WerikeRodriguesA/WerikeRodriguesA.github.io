
import { registerRoute, navigate } from "./core/router.js";
import { HomePage } from "./pages/home.js";

// temporários - substituem as páginas reais até que sejam implementadas
const Placeholder = (text) => () => {
    const div = document.createElement("div");
    div.className = "page";
    div.innerHTML = `<h2>${text}</h2>`;
    return div;
};

// registro de rotas
registerRoute("home", HomePage);
registerRoute("about", Placeholder("Sobre Mim"));
registerRoute("projects", Placeholder("Projetos"));
registerRoute("contact", Placeholder("Contato"));

// tela inicial
navigate("home");
