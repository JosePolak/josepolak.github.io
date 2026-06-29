// 1. FECHAR MENU AO CLICAR
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('navbarNav');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        // Remove a classe 'show' (que abre o menu no Bootstrap)
        if (menuToggle.classList.contains('show')) {
            menuToggle.classList.remove('show');

            // Opcional: Ajusta o atributo do botão hamburger para 'fechado'
            const toggler = document.querySelector('.navbar-toggler');
            toggler.setAttribute('aria-expanded', 'false');
            toggler.classList.add('collapsed');
        }
    });
});

// 2. BOTÃO VOLTAR AO TOPO
const mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

mybutton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
