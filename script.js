// // script.js
document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");

    // Lista de imagens. Coloque os caminhos das imagens aqui, agora com a pasta "imgserv".
    const images = [
        "imgserv/cartazigreja2servico.png",
        "imgserv/cartazigreja3servico.png",
        "imgserv/igrejadisciouladoservico.png",
        "imgserv/mundoservico.png",
        "imgserv/pizzaria2servico.png",
        "imgserv/porscheservico.png",
        "imgserv/tropicalservico.png",
        "imgserv/acai.jpeg",
        "imgserv/crepe.jpeg",
        "imgserv/natal.jpeg"

    ];

    // Gerar dinamicamente os itens da galeria
    images.forEach(image => {
        const item = document.createElement("div");
        item.classList.add("item");
        item.style.backgroundImage = `url(${image})`;
        gallery.appendChild(item);
    });
});

 


