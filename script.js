const items = [
    { id: 1, name: "Camiseta", price: 20.00, image: "camiseta.jpg" },
    { id: 2, name: "Calça", price: 50.00, image: "calca.jpg" },
    { id: 3, name: "Tênis", price: 80.00, image: "tenis.jpg" },
    { id: 4, name: "Brinquedo", price: 15.00, image: "brinquedo.jpg" }
];

function renderItems() {
    const itemList = document.getElementById('item-list');
    itemList.innerHTML = '';
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="item-image">
            <p>${item.name} - R$ ${item.price.toFixed(2)}</p>
        `;
        itemList.appendChild(itemDiv);
    });
}

renderItems();
// Leitor de Áudio
const audioReaderBtn = document.getElementById('audio-reader-btn');

function readText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR'; // Define o idioma para português do Brasil
    speechSynthesis.speak(utterance);
}

function readPageContent() {
    const sections = document.querySelectorAll('section');
    let fullText = '';

    sections.forEach(section => {
        fullText += section.innerText + ' ';
    });

    readText(fullText);
}

audioReaderBtn.addEventListener('click', () => {
    readPageContent();
});

// Resto do JavaScript permanece igual