// script.js - Agrinho 2026 | Lucas Corso Damo

// Função para mostrar mensagem de boas-vindas
function mostrarMensagem() {
    alert("Bem-vindo ao projeto Agrinho 2026 de Lucas Corso Damo!");
}

// Adiciona evento ao botão "Clique Aqui"
const botao = document.getElementById("botaoMensagem");
if (botao) {
    botao.addEventListener("click", mostrarMensagem);
}

// Função para trocar cores do fundo de forma divertida
function trocarCorFundo() {
    const cores = ["#E8F5E9", "#FFF3E0", "#F3E5F5", "#E1F5FE", "#FFFDE7"];
    const indice = Math.floor(Math.random() * cores.length);
    document.body.style.background = `linear-gradient(to bottom, #87CEEB, ${cores[indice]})`;
}

// Troca a cor do fundo a cada 5 segundos
setInterval(trocarCorFundo, 5000);

// Função para mostrar um pequeno emoji animado no card ao passar o mouse
const card = document.querySelector(".card");
if (card) {
    card.addEventListener("mouseenter", () => {
        const emoji = document.createElement("div");
        emoji.textContent = "🌱";
        emoji.style.position = "absolute";
        emoji.style.fontSize = "50px";
        emoji.style.top = Math.random() * 200 + "px";
        emoji.style.left = Math.random() * 500 + "px";
        emoji.style.opacity = 0.8;
        emoji.style.transition = "all 2s ease-out";
        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.style.top = parseInt(emoji.style.top) - 100 + "px";
            emoji.style.opacity = 0;
        }, 50);

        setTimeout(() => {
            document.body.removeChild(emoji);
        }, 2050);
    });
}
