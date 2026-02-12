// Abrir case
document.querySelectorAll(".btn-case").forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;
    document.getElementById(targetId).style.display = "block";
  });
});

// Voltar para projetos
document.querySelectorAll(".btn-back").forEach(button => {
  button.addEventListener("click", () => {
    button.closest(".case-container").style.display = "none";
  });
});

// Barra de progresso baseada no scroll
document.querySelectorAll(".case-container").forEach(container => {
  const progress = container.querySelector(".progress");

  container.addEventListener("scroll", () => {
    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight - container.clientHeight;
    const percentage = (scrollTop / scrollHeight) * 100;

    progress.style.width = percentage + "%";
  });
});
