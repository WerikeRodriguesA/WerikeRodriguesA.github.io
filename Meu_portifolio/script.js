const elementosAnimados = document.querySelectorAll(
  ".hero-image, .texto-apresentacao, .card, .btn-card, .skills-list li"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

elementosAnimados.forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});