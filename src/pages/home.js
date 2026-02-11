import { navigate } from "../core/router.js";

export function HomePage() {
  const container = document.createElement("div");
  container.className = "home";

  const title = document.createElement("h1");
  title.textContent = "Werike Rodrigues Alves";
  title.className = "home-title";

  const menu = document.createElement("ul");
  menu.className = "menu";

  const items = [
    { label: "SOBRE MIM", route: "about" },
    { label: "PROJETOS", route: "projects" },
    { label: "CONTATO", route: "contact" },
  ];

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.label;

    li.addEventListener("click", () => {
      navigate(item.route);
    });

    menu.appendChild(li);
  });

  container.appendChild(title);
  container.appendChild(menu);

  return container;
}
