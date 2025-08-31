// Les données des fermes
const farms = [
    {
        name: "Ferme à fer",
        type: "Ressources",
        image: "https://i.imgur.com/vHqB3v3.png", // Lien vers une image de ferme à fer
        description: "Automatisez la production de fer pour vos blocs de construction et outils.",
    },
    {
        name: "Ferme à mobs",
        type: "Mobs",
        image: "https://i.imgur.com/r6E8R1k.jpeg", // Lien vers une image de ferme à mobs
        description: "Récupérez de l'expérience, des cordes, des os et plus encore.",
    },
    {
        name: "Ferme à canne à sucre",
        type: "Automatique",
        image: "https://i.imgur.com/8x8M6rC.jpeg", // Lien vers une image de ferme à canne à sucre
        description: "Produisez de la canne à sucre en continu pour le papier et les livres.",
    }
];

// Fonction pour créer une fiche de ferme
function createFarmCard(farm) {
    const card = document.createElement('div');
    card.classList.add('farm-card');

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
function displayFarms() {
    const container = document.getElementById('farms-container');
    farms.forEach(farm => {
        const farmCard = createFarmCard(farm);
        container.appendChild(farmCard);
    });
}

// Appel de la fonction pour démarrer l'affichage
document.addEventListener('DOMContentLoaded', displayFarms);
