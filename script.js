// Les données des fermes
const farms = [
    {
        name: "Ferme à fer",
        type: "Ressources",
        image: "https://i.imgur.com/7gK9u3A.png",
        description: "Automatisez la production de fer pour vos blocs de construction et outils.",
        tutorialUrl: "https://www.youtube.com/watch?v=your-farm-video",
        materials: "100 blocs de fer, 20 verres, 50 planches de chêne."
    },
    {
        name: "Ferme à mobs",
        type: "Mobs",
        image: "https://i.imgur.com/uRj0o1g.png",
        description: "Récupérez de l'expérience, des cordes, des os et plus encore.",
        tutorialUrl: "https://www.youtube.com/watch?v=your-farm-video",
        materials: "60 blocs de pierre, 30 échelles, 10 barrières."
    },
    {
        name: "Ferme à canne à sucre",
        type: "Automatique",
        image: "https://i.imgur.com/V9X9eS2.png",
        description: "Produisez de la canne à sucre en continu pour le papier et les livres.",
        tutorialUrl: "https://www.youtube.com/watch?v=your-farm-video",
        materials: "20 cannes à sucre, 20 sables, 2 seaux d'eau, 15 pistons."
    }
];

// Fonction pour créer une fiche de ferme
function createFarmCard(farm) {
    const card = document.createElement('div');
    card.classList.add('farm-card');

    card.addEventListener('click', () => showDetails(farm));

    card.innerHTML = `
        <img src="${farm.image}" alt="Image de la ${farm.name}">
        <div class="farm-info">
            <h2>${farm.name}</h2>
            <p><strong>Type :</strong> ${farm.type}</p>
            <p>${farm.description}</p>
        </div>
    `;

    return card;
}

// Fonction pour afficher toutes les fiches de fermes
function displayFarms(filteredFarms = farms) {
    const container = document.getElementById('farms-container');
    container.innerHTML = '';
    filteredFarms.forEach(farm => {
        const farmCard = createFarmCard(farm);
        container.appendChild(farmCard);
    });
}

// Nouvelle fonction pour filtrer les fermes
function filterFarms() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();

    const filteredFarms = farms.filter(farm => {
        return farm.name.toLowerCase().includes(searchTerm) ||
               farm.description.toLowerCase().includes(searchTerm) ||
               farm.type.toLowerCase().includes(searchTerm);
    });

    displayFarms(filteredFarms);
}

// NOUVELLE FONCTION : Afficher les détails d'une ferme
function showDetails(farm) {
    const overlay = document.getElementById('farm-details-overlay');
    const content = document.getElementById('farm-details-content');

    content.innerHTML = `
        <h2>${farm.name}</h2>
        <p><strong>Type :</strong> ${farm.type}</p>
        <p><strong>Matériaux nécessaires :</strong> ${farm.materials}</p>
        <p>${farm.description}</p>
        <img src="${farm.image}" alt="Image de la ${farm.name}">
        <p>Cliquez sur le lien pour voir le tutoriel complet :</p>
        <a href="${farm.tutorialUrl}" target="_blank" class="tutorial-link">Voir le tutoriel sur YouTube</a>
    `;

    overlay.style.display = 'flex';
}

// NOUVELLE FONCTION : Cacher les détails
function hideDetails() {
    const overlay = document.getElementById('farm-details-overlay');
    overlay.style.display = 'none';
}

// Écouteur pour le bouton de fermeture
document.addEventListener('DOMContentLoaded', () => {
    displayFarms();
    const closeButton = document.getElementById('closeButton');
    closeButton.addEventListener('click', hideDetails);
});
