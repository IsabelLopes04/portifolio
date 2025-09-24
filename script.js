// Mensagem de boas-vindas no console
console.log(
  "%cBem-vindo(a) ao portfólio da Isabel! 🚀",
  "color: #00bcd4; font-size: 18px; font-weight: bold;"
);

// Lógica do menu hambúrguer para dispositivos móveis
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// Fecha o menu ao clicar em um link
document.querySelectorAll("#nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Validação simples do formulário de contato
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = contactForm.nome.value.trim();
    const email = contactForm.email.value.trim();
    const mensagem = contactForm.mensagem.value.trim();

    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos do formulário.");
      return;
    }

    // Simulação de envio
    alert("Sua mensagem foi enviada com sucesso! Obrigada pelo contato.");
    contactForm.reset();
  });
}
