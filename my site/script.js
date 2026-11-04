// Script para funcionalidades interativas do site e interações com o usuário

// ===============================
// TEXTO DIGITANDO
// ===============================

const texto = "Olá, eu sou Isabella Santos 👋";
const titulo = document.getElementById("titulo");

let i = 0;

function escrever() {

    if (i < texto.length) {

        titulo.textContent += texto.charAt(i);

        i++;

        setTimeout(escrever, 80);
    }

}

escrever();


// ===============================
// HEADER ENCOLHENDO
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }

});


// ===============================
// CARDS APARECENDO
// ===============================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

cards.forEach((card) => {
    observer.observe(card);
});


// ===============================
// MENU ATIVO
// ===============================

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const top = section.offsetTop - 200;

        const height = section.clientHeight;

        if (
            window.scrollY >= top &&
            window.scrollY < top + height
        ) {
            current = section.id;
        }

    });

    links.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});


// ===============================
// BOTÃO VOLTAR AO TOPO
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});